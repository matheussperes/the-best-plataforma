import { useState } from 'react';
import { makeQuizData } from '../../data/quizData';
import type { QuizData } from '../../data/quizData';
import { finalizarQuizData } from '../../data/quiz-calc';
import { gerarRetrato } from '../../data/quiz-retrato';
import type { RetratoEmocional } from '../../data/quiz-retrato';
import { AberturaScreen } from './AberturaScreen';
import { AmbienteSelectionScreen } from './AmbienteSelectionScreen';
import { LoopScreen } from './LoopScreen';
import type { LoopStep } from './LoopScreen';
import { ContactScreen } from './ContactScreen';
import { LoaderScreen } from './LoaderScreen';
import { RetratoScreen } from './RetratoScreen';

type QuizView = 'abertura' | 'selecao' | 'loop' | 'contato' | 'loader' | 'retrato';

interface LoopEntry {
  ambienteIndex: number;
  step: LoopStep;
}

interface QuizScreenProps {
  onNavigate: (screen: string) => void;
}

// Lê a pré-seleção feita na Home sem removê-la (leitura idempotente).
// A remoção é responsabilidade dos outros pontos de entrada do quiz (Hero, Nav, CTAStrip, Footer).
function readHomeSelecao(): string[] | null {
  try {
    const raw = sessionStorage.getItem('quiz_home_selecao');
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { ambientesOrdenados: string[] };
    if (Array.isArray(parsed.ambientesOrdenados) && parsed.ambientesOrdenados.length > 0) {
      return parsed.ambientesOrdenados;
    }
  } catch { /* ignore */ }
  return null;
}

export function QuizScreen({ onNavigate }: QuizScreenProps) {
  const [view, setView] = useState<QuizView>(() =>
    readHomeSelecao() ? 'loop' : 'abertura'
  );
  const [quizData, setQuizData] = useState<QuizData>(() => {
    const ambs = readHomeSelecao();
    return ambs
      ? { ...makeQuizData(), ambientesOrdenados: ambs, ambienteAtualIndex: 0 }
      : makeQuizData();
  });
  const [loopEntry, setLoopEntry] = useState<LoopEntry>({ ambienteIndex: 0, step: 'transicao' });
  const [retrato, setRetrato]     = useState<RetratoEmocional | null>(null);

  const handleAmbientesConfirm = (ambientesOrdenados: string[]) => {
    setQuizData(d => ({ ...d, ambientesOrdenados, ambienteAtualIndex: 0 }));
    setLoopEntry({ ambienteIndex: 0, step: 'transicao' });
    setView('loop');
  };

  const handleLoopFinish = () => setView('contato');

  const handleLoopBack = () => setView('selecao');

  const handleContatoBack = () => {
    const lastIndex = Math.max(0, quizData.ambientesOrdenados.length - 1);
    setLoopEntry({ ambienteIndex: lastIndex, step: 'conclusao' });
    setView('loop');
  };

  const handleContatoSubmit = (contato: QuizData['contato']) => {
    // Finaliza todos os campos calculados (totalMin, totalMax, categoria, score)
    const finalizado = finalizarQuizData({ ...quizData, contato });
    setQuizData(finalizado);
    setRetrato(gerarRetrato(finalizado));
    setView('loader');
  };

  const handleLoaderComplete = () => setView('retrato');

  if (view === 'abertura') {
    return <AberturaScreen onStart={() => setView('selecao')} />;
  }

  if (view === 'selecao') {
    return (
      <AmbienteSelectionScreen
        initialSelected={quizData.ambientesOrdenados}
        onConfirm={handleAmbientesConfirm}
        onBack={() => setView('abertura')}
      />
    );
  }

  if (view === 'loop') {
    return (
      <LoopScreen
        initialAmbienteIndex={loopEntry.ambienteIndex}
        initialStep={loopEntry.step}
        quizData={quizData}
        onUpdateData={setQuizData}
        onFinish={handleLoopFinish}
        onBack={handleLoopBack}
      />
    );
  }

  if (view === 'contato') {
    return (
      <ContactScreen
        initialData={quizData.contato}
        onSubmit={handleContatoSubmit}
        onBack={handleContatoBack}
      />
    );
  }

  if (view === 'loader') {
    return <LoaderScreen onComplete={handleLoaderComplete} />;
  }

  if (view === 'retrato' && retrato) {
    return (
      <RetratoScreen
        quizData={quizData}
        retrato={retrato}
        onNavigate={onNavigate}
      />
    );
  }

  // Fallback de segurança — não deve ser atingido em fluxo normal
  return null;
}
