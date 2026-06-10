import { useState, useCallback } from 'react';
import { AMBIENTE_MAP, makeAmbienteRespostas } from '../../data/quizData';
import type { QuizData, AmbienteRespostas } from '../../data/quizData';
import { TransitionScreen } from './TransitionScreen';
import { LoopQuestionScreen } from './LoopQuestionScreen';
import { InvestimentoScreen } from './InvestimentoScreen';
import { ConclusaoScreen } from './ConclusaoScreen';

export type LoopStep =
  | 'transicao'
  | 'identidade'
  | 'cenas'
  | 'inegociaveis'
  | 'sensorial'
  | 'investimento'
  | 'conclusao';

const STEP_INDEX: Partial<Record<LoopStep, number>> = {
  identidade: 0, cenas: 1, inegociaveis: 2, sensorial: 3, investimento: 4,
};

const AMBIENTE_IMAGES: Record<string, string> = {
  cozinha:    '/assets/images/imgCozinha01.webp',
  closet:     '/assets/images/imgCloset01.webp',
  sala:       '/assets/images/imgSala01.webp',
  quarto:     '/assets/images/imgQuarto01.webp',
  banheiro:   '/assets/images/imgBanheiro01.jpg',
  escritorio: '/assets/images/imgEscritorio01.webp',
  gourmet:    '/assets/images/imgGourmet01.webp',
  lavanderia: '/assets/images/imgLavanderia01.webp',
  outro:      '',
};

interface LoopScreenProps {
  initialAmbienteIndex: number;
  initialStep: LoopStep;
  quizData: QuizData;
  onUpdateData: (data: QuizData) => void;
  onFinish: () => void;   // todos os ambientes concluídos → vai para Contato
  onBack: () => void;     // back do primeiro ambiente → volta para Seleção
}

export function LoopScreen({
  initialAmbienteIndex,
  initialStep,
  quizData,
  onUpdateData,
  onFinish,
  onBack,
}: LoopScreenProps) {
  const [ambienteIndex, setAmbienteIndex] = useState(initialAmbienteIndex);
  const [step, setStep] = useState<LoopStep>(initialStep);

  const ambienteId = quizData.ambientesOrdenados[ambienteIndex];
  const content = AMBIENTE_MAP[ambienteId];
  const image = AMBIENTE_IMAGES[ambienteId] ?? '';
  const totalAmbientes = quizData.ambientesOrdenados.length;

  const respostas: AmbienteRespostas =
    quizData.respostas[ambienteId] ?? makeAmbienteRespostas();

  // Salva um campo das respostas do ambiente atual e avança o step
  const saveAndAdvance = useCallback((
    field: keyof AmbienteRespostas,
    value: AmbienteRespostas[keyof AmbienteRespostas],
    nextStep: LoopStep,
  ) => {
    onUpdateData({
      ...quizData,
      ambienteAtualIndex: ambienteIndex,
      respostas: {
        ...quizData.respostas,
        [ambienteId]: { ...respostas, [field]: value },
      },
    });
    setStep(nextStep);
  }, [quizData, ambienteId, ambienteIndex, respostas, onUpdateData]);

  // ── Tela 3 — Transição ────────────────────────────────────────────────────
  if (step === 'transicao') {
    const handleBack = () => {
      if (ambienteIndex === 0) {
        onBack(); // volta para Seleção de Ambientes
      } else {
        setAmbienteIndex(ambienteIndex - 1);
        setStep('conclusao');
      }
    };

    return (
      <TransitionScreen
        nomeEmocional={content.nomeEmocional}
        image={image}
        onNext={() => setStep('identidade')}
        onBack={handleBack}
      />
    );
  }

  // ── Tela 4 — Identidade ───────────────────────────────────────────────────
  if (step === 'identidade') {
    return (
      <LoopQuestionScreen
        ambienteNomeSimples={content.nomeSimples}
        ambienteImage={image}
        secao="Identidade"
        question="Qual destes *universos* te toca mais?"
        instrucao="Escolha até 2."
        options={content.estilos}
        initialSelected={respostas.estilos}
        maxSelect={2}
        stepIndex={STEP_INDEX.identidade!}
        columns={2}
        onContinue={sel => saveAndAdvance('estilos', sel, 'cenas')}
        onBack={() => setStep('transicao')}
      />
    );
  }

  // ── Tela 5 — Cenas ────────────────────────────────────────────────────────
  if (step === 'cenas') {
    return (
      <LoopQuestionScreen
        ambienteNomeSimples={content.nomeSimples}
        ambienteImage={image}
        secao="Atmosfera"
        question="Qual *cena* você mais quer viver aqui?"
        instrucao="Escolha quantas quiser."
        options={content.cenas}
        initialSelected={respostas.cenas}
        stepIndex={STEP_INDEX.cenas!}
        columns={1}
        onContinue={sel => saveAndAdvance('cenas', sel, 'inegociaveis')}
        onBack={() => setStep('identidade')}
      />
    );
  }

  // ── Tela 6 — Inegociáveis ─────────────────────────────────────────────────
  if (step === 'inegociaveis') {
    return (
      <LoopQuestionScreen
        ambienteNomeSimples={content.nomeSimples}
        ambienteImage={image}
        secao="O que não abre mão"
        question={`O que é *inegociável* para você neste ${content.nomeSimples.toLowerCase()}?`}
        instrucao="Escolha até 3."
        options={content.inegociaveis}
        initialSelected={respostas.inegociaveis}
        maxSelect={3}
        stepIndex={STEP_INDEX.inegociaveis!}
        columns={2}
        onContinue={sel => saveAndAdvance('inegociaveis', sel, 'sensorial')}
        onBack={() => setStep('cenas')}
      />
    );
  }

  // ── Tela 7 — Memória sensorial ────────────────────────────────────────────
  if (step === 'sensorial') {
    return (
      <LoopQuestionScreen
        ambienteNomeSimples={content.nomeSimples}
        ambienteImage={image}
        secao="A memória"
        question={`Qual *som* você quer ouvir neste ${content.nomeSimples.toLowerCase()}?`}
        instrucao="Escolha quantos quiser."
        options={content.memorias}
        initialSelected={respostas.memorias}
        stepIndex={STEP_INDEX.sensorial!}
        columns={1}
        onContinue={sel => saveAndAdvance('memorias', sel, 'investimento')}
        onBack={() => setStep('inegociaveis')}
      />
    );
  }

  // ── Tela 8 — Investimento ─────────────────────────────────────────────────
  if (step === 'investimento') {
    return (
      <InvestimentoScreen
        ambienteNomeSimples={content.nomeSimples}
        ambienteNomeEmocional={content.nomeEmocional}
        ambienteImage={image}
        initialSelected={respostas.investimento}
        onSelect={id => saveAndAdvance('investimento', id, 'conclusao')}
        onBack={() => setStep('sensorial')}
      />
    );
  }

  // ── Tela 9 — Conclusão ────────────────────────────────────────────────────
  const isLastAmbiente = ambienteIndex === totalAmbientes - 1;
  const proximoId = isLastAmbiente ? undefined : quizData.ambientesOrdenados[ambienteIndex + 1];
  const proximoNome = proximoId ? AMBIENTE_MAP[proximoId]?.nomeEmocional : undefined;

  const handleNext = () => {
    if (isLastAmbiente) {
      onFinish();
    } else {
      setAmbienteIndex(ambienteIndex + 1);
      setStep('transicao');
    }
  };

  return (
    <ConclusaoScreen
      nomeEmocional={content.nomeEmocional}
      image={image}
      ambienteAtual={ambienteIndex}
      totalAmbientes={totalAmbientes}
      proximoNomeEmocional={proximoNome}
      onNext={handleNext}
      onRevisar={() => setStep('investimento')}
    />
  );
}
