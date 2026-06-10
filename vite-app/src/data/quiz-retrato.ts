import type { QuizData } from './quizData';
import { AMBIENTE_MAP } from './quizData';

// ─── Tipos públicos ───────────────────────────────────────────────────────────

export interface RetratoEmocional {
  sensacaoDominante: string;     // ex: "serenidade"
  estiloDominanteId: string;     // ex: "contemporaneo"
  estiloDominanteLabel: string;  // ex: "Contemporâneo Sereno"
  paragrafos: string[];          // 3–4 parágrafos personalizados
}

// ─── Mapeamentos base ─────────────────────────────────────────────────────────

const SENSACAO_MAP: Record<string, string> = {
  contemporaneo: 'serenidade',
  industrial:    'imponência',
  classico:      'elegância',
  organico:      'aconchego',
};

const ESTILO_NOME: Record<string, string> = {
  contemporaneo: 'Contemporâneo Sereno',
  industrial:    'Industrial Sofisticado',
  classico:      'Clássico Reinterpretado',
  organico:      'Orgânico Quente',
};

// ─── Templates de parágrafos ─────────────────────────────────────────────────

// Regra P1 — baseado na sensação dominante + lista de ambientes
const SENSACAO_ABERTURA: Record<string, string> = {
  serenidade: 'há algo muito claro nas suas escolhas: você quer silêncio que diz muito. Espaços que respiram.',
  imponência: 'o que te define é a presença — você quer entrar num ambiente e sentir que ele foi feito exatamente para você.',
  elegância:  'você não busca tendência. Você busca permanência.',
  aconchego:  'o que você quer é simples e raro ao mesmo tempo: entrar em casa e sentir que chegou de verdade.',
};

// Regra P3 — baseado no estilo dominante
const ESTILO_DESCRICAO: Record<string, string> = {
  contemporaneo: 'Seu gosto é pelo contemporâneo sereno: linhas que respiram, materiais que envelhecem com beleza. Um projeto que vai parecer atemporal daqui a dez anos.',
  industrial:    'A sofisticação que te atrai vem da materialidade real — concreto, aço, presença sem disfarces. Um espaço que marca quem você é antes mesmo de você falar.',
  classico:      'Você tem atração pelo clássico reinterpretado: elegância que não precisa se explicar, detalhes com intenção. Um projeto que vai fazer seus convidados pararem para olhar.',
  organico:      'O orgânico quente é o que te toca: madeiras vivas, curvas suaves, textura que se sente. Um lar que abraça quem entra — inclusive você, no fim de um dia longo.',
};

// Regra P4 — baseado na categoria do lead (calculada por quiz-calc)
const FECHAMENTO: Record<string, string> = {
  ESSENCIAL:  'Nossa equipe vai entrar em contato para entender como podemos realizar o melhor projeto dentro da sua realidade. Cada história é única, e a sua não é diferente.',
  'PADRÃO':   'Nossa equipe vai entrar em contato para transformar esse retrato em um projeto concreto — milímetro por milímetro, exatamente como você imaginou.',
  PREMIUM:    'Nossa equipe vai entrar em contato em breve para dar o primeiro passo. Projetos assim têm uma data de início. Essa data pode ser agora.',
  EXCLUSIVO:  'Nossa equipe vai entrar em contato em breve para iniciar algo que, como você, não vai se encaixar em nenhuma categoria. Estamos prontos.',
  '':         'Nossa equipe vai entrar em contato em breve para transformar esse retrato em realidade.',
};

// ─── Construtores de parágrafo ────────────────────────────────────────────────

// P1 — abertura emocional (sensação + ambientes selecionados)
function buildP1(sensacao: string, ambienteIds: string[]): string {
  const abertura = SENSACAO_ABERTURA[sensacao]
    ?? 'suas escolhas revelam um gosto muito preciso.';

  const nomes = ambienteIds
    .map(id => AMBIENTE_MAP[id]?.nomeEmocional)
    .filter(Boolean) as string[];

  let ambienteFrase: string;
  if (nomes.length === 0) {
    ambienteFrase = 'O projeto que você imagina já está ganhando forma.';
  } else if (nomes.length === 1) {
    ambienteFrase = `Tudo começa em sua ${nomes[0]} — e já conseguimos imaginar.`;
  } else if (nomes.length === 2) {
    ambienteFrase = `Sua ${nomes[0]} e sua ${nomes[1]} têm muito a dizer uma à outra.`;
  } else if (nomes.length === 3) {
    ambienteFrase = `${nomes[0]}, ${nomes[1]} e ${nomes[2]} — três capítulos de uma mesma história.`;
  } else {
    ambienteFrase = `${nomes.length} espaços. Um mesmo fio condutor: o seu jeito único de viver.`;
  }

  return `Ao longo das suas escolhas, ${abertura} ${ambienteFrase}`;
}

// P2 — âncora na cena escolhida do primeiro ambiente
function buildP2(data: QuizData): string {
  const primeiroId = data.ambientesOrdenados[0];
  if (!primeiroId) return '';

  const content = AMBIENTE_MAP[primeiroId];
  const respostas = data.respostas[primeiroId];
  if (!content || !respostas) return '';

  const primeiraCenaId = respostas.cenas[0];
  const cenaLabel = content.cenas.find(c => c.id === primeiraCenaId)?.label;
  if (!cenaLabel) return '';

  return `Você escolheu "${cenaLabel}" como uma das cenas que mais quer viver em sua ${content.nomeEmocional.toLowerCase()}. Esse é exatamente o tipo de detalhe que guia cada decisão de projeto — da altura do balcão à intensidade da luz.`;
}

// ─── Função principal ─────────────────────────────────────────────────────────

export function gerarRetrato(data: QuizData): RetratoEmocional {
  // Conta ocorrências de cada estilo em todos os ambientes
  const contagem: Record<string, number> = {};
  for (const resp of Object.values(data.respostas)) {
    for (const estiloId of resp.estilos) {
      contagem[estiloId] = (contagem[estiloId] ?? 0) + 1;
    }
  }

  // Estilo dominante = mais selecionado; fallback para contemporaneo
  const estiloDominanteId =
    Object.entries(contagem).sort((a, b) => b[1] - a[1])[0]?.[0] ?? 'contemporaneo';

  const sensacaoDominante    = SENSACAO_MAP[estiloDominanteId]  ?? 'sofisticação';
  const estiloDominanteLabel = ESTILO_NOME[estiloDominanteId]   ?? 'Contemporâneo Sereno';

  const paragrafos: string[] = [
    buildP1(sensacaoDominante, data.ambientesOrdenados),
    buildP2(data),
    ESTILO_DESCRICAO[estiloDominanteId] ?? '',
    FECHAMENTO[data.categoria]          ?? FECHAMENTO[''],
  ].filter(p => p.length > 0);

  return { sensacaoDominante, estiloDominanteId, estiloDominanteLabel, paragrafos };
}
