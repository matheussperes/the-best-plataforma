import { useState } from 'react';
import { makeQuizData } from '../../data/quizData';
import type { QuizData } from '../../data/quizData';
import { AberturaScreen } from './AberturaScreen';
import { AmbienteSelectionScreen } from './AmbienteSelectionScreen';
import { LoopScreen } from './LoopScreen';
import type { LoopStep } from './LoopScreen';
import { ContactScreen } from './ContactScreen';

// Bloco D adicionará: 'loader' | 'retrato'
type QuizView = 'abertura' | 'selecao' | 'loop' | 'contato' | 'placeholder';

interface LoopEntry {
  ambienteIndex: number;
  step: LoopStep;
}

interface QuizScreenProps {
  onNavigate: (screen: string) => void;
}

export function QuizScreen({ onNavigate }: QuizScreenProps) {
  const [view, setView]           = useState<QuizView>('abertura');
  const [quizData, setQuizData]   = useState<QuizData>(makeQuizData);
  const [loopEntry, setLoopEntry] = useState<LoopEntry>({ ambienteIndex: 0, step: 'transicao' });

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
    setQuizData(d => ({ ...d, contato }));
    // Bloco D substituirá por: setView('loader')
    setView('placeholder');
  };

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

  // Placeholder — substituído no Bloco D (Loader + Retrato Emocional)
  return (
    <div style={{
      minHeight: '100dvh', background: 'var(--noir)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', gap: 24, padding: '40px 24px',
    }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        border: '1px solid var(--champagne)', padding: '8px 14px',
      }}>
        <span style={{ width: 4, height: 4, background: 'var(--champagne)', borderRadius: '50%' }} />
        <span style={{
          fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.24em',
          textTransform: 'uppercase', color: 'var(--champagne)',
        }}>
          O Construtor Emocional™
        </span>
      </div>

      <p style={{
        fontFamily: 'var(--serif-display)', fontWeight: 300, fontSize: 32,
        color: 'var(--marfim)', textAlign: 'center', margin: 0,
      }}>
        {quizData.contato.nome.split(' ')[0]
          ? `${quizData.contato.nome.split(' ')[0]}, dados recebidos.`
          : 'Dados recebidos.'}
      </p>

      <p className="ds-body-sm" style={{ color: 'var(--pewter)', textAlign: 'center' }}>
        Loader · Retrato emocional — em breve (Bloco D).
      </p>

      <button
        className="ds-btn ds-btn--ghost"
        onClick={() => onNavigate('home')}
      >
        Voltar ao início
      </button>
    </div>
  );
}
