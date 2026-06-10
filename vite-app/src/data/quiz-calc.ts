import type { QuizData, LeadCategoria, AmbienteRespostas } from './quizData';
import { INVESTIMENTO_MAP } from './quizData';

// ─── Investimento acumulado ────────────────────────────────────────────────────

interface TotalInvestimento {
  min: number;
  max: number;
}

export function calcTotalInvestimento(respostas: Record<string, AmbienteRespostas>): TotalInvestimento {
  let min = 0;
  let max = 0;

  for (const resp of Object.values(respostas)) {
    const opt = INVESTIMENTO_MAP[resp.investimento];
    if (!opt) continue;
    min += opt.min;
    max += opt.max;
  }

  return { min, max };
}

// ─── Categoria do lead ────────────────────────────────────────────────────────

export function calcCategoria(totalMin: number): LeadCategoria {
  if (totalMin >= 200000) return 'EXCLUSIVO';
  if (totalMin >= 80000)  return 'PREMIUM';
  if (totalMin >= 15000)  return 'PADRÃO';
  return 'ESSENCIAL';
}

// ─── Score de qualificação (0–100) ────────────────────────────────────────────

const INVESTIMENTO_SCORE: Record<string, number> = {
  ate5k:      5,
  '5k15k':    10,
  '15k40k':   20,
  '40k80k':   28,
  '80k150k':  34,
  '150k300k': 38,
  acima300k:  40,
  conversar:  15,
};

const PRAZO_SCORE: Record<string, number> = {
  imediato:    25,
  '3meses':    20,
  '6meses':    12,
  '12meses':    5,
  pesquisando:  2,
};

function scorePorInvestimento(respostas: Record<string, AmbienteRespostas>): number {
  let highest = 0;
  for (const resp of Object.values(respostas)) {
    const pts = INVESTIMENTO_SCORE[resp.investimento] ?? 0;
    if (pts > highest) highest = pts;
  }
  return highest; // máximo 40 pts — faixa mais alta entre os ambientes
}

function scorePorPrazo(prazo: string): number {
  return PRAZO_SCORE[prazo] ?? 0; // máximo 25 pts
}

function scorePorAmbientes(qtd: number): number {
  if (qtd >= 7) return 20;
  if (qtd >= 5) return 17;
  if (qtd >= 3) return 14;
  if (qtd === 2) return 10;
  return 5; // máximo 20 pts
}

function scorePorCompletude(respostas: Record<string, AmbienteRespostas>): number {
  const ambientes = Object.values(respostas);
  if (ambientes.length === 0) return 0;

  let pts = 0;

  // +3 pts: média de cenas ≥ 2 por ambiente
  const mediaCenas = ambientes.reduce((s, r) => s + r.cenas.length, 0) / ambientes.length;
  if (mediaCenas >= 2) pts += 3;

  // +3 pts: média de inegociáveis ≥ 2 por ambiente
  const mediaIneg = ambientes.reduce((s, r) => s + r.inegociaveis.length, 0) / ambientes.length;
  if (mediaIneg >= 2) pts += 3;

  // +3 pts: média de memórias ≥ 2 por ambiente
  const mediaMem = ambientes.reduce((s, r) => s + r.memorias.length, 0) / ambientes.length;
  if (mediaMem >= 2) pts += 3;

  // +3 pts: selecionou 2 estilos em pelo menos 1 ambiente
  const temDoisEstilos = ambientes.some(r => r.estilos.length >= 2);
  if (temDoisEstilos) pts += 3;

  // +3 pts: todos os campos do contato preenchidos (verificado fora daqui, mas contabilizado via flag)
  // — este ponto é calculado em calcScore diretamente pois precisa do contato

  return pts; // máximo 12 pts aqui; +3 pts adicionados em calcScore
}

// ─── Função principal ─────────────────────────────────────────────────────────

export function calcScore(data: Pick<QuizData, 'respostas' | 'ambientesOrdenados' | 'contato'>): number {
  const { respostas, ambientesOrdenados, contato } = data;

  const c1 = scorePorInvestimento(respostas);
  const c2 = scorePorPrazo(contato.prazo);
  const c3 = scorePorAmbientes(ambientesOrdenados.length);
  const c4base = scorePorCompletude(respostas);

  // +3 pts completude: contato completo (email preenchido além dos obrigatórios)
  const c4extra = contato.email && contato.email.trim().length > 0 ? 3 : 0;

  return Math.min(100, c1 + c2 + c3 + c4base + c4extra);
}

// ─── Classificação interna por score ─────────────────────────────────────────

export type ScoreClassificacao = 'QUENTE' | 'MORNO' | 'FRIO' | 'BAIXA_PRIORIDADE';

export function classificarScore(score: number): ScoreClassificacao {
  if (score >= 80) return 'QUENTE';
  if (score >= 60) return 'MORNO';
  if (score >= 40) return 'FRIO';
  return 'BAIXA_PRIORIDADE';
}

// ─── Calcula e preenche todos os campos derivados no QuizData ─────────────────

export function finalizarQuizData(data: QuizData): QuizData {
  const { min, max } = calcTotalInvestimento(data.respostas);
  const categoria = calcCategoria(min);
  const scoreLeadQualificacao = calcScore(data);

  return { ...data, totalMin: min, totalMax: max, categoria, scoreLeadQualificacao };
}
