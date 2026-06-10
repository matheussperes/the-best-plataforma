// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface QuizOption {
  id: string;
  label: string;
  descricao?: string;
}

export interface InvestimentoOption extends QuizOption {
  min: number;
  max: number;
}

export interface AmbienteContent {
  id: string;
  nomeSimples: string;
  nomeEmocional: string;
  estilos: QuizOption[];      // Tela 4 — os 4 estilos são globais mas o type vive aqui
  cenas: QuizOption[];        // Tela 5
  inegociaveis: QuizOption[]; // Tela 6
  memorias: QuizOption[];     // Tela 7
}

export interface AmbienteRespostas {
  estilos: string[];          // até 2 ids
  cenas: string[];            // livre
  inegociaveis: string[];     // até 3 ids
  memorias: string[];         // livre
  investimento: string;       // 1 id
}

export interface ContatoData {
  nome: string;
  whatsapp: string;
  email?: string;             // opcional
  cidade: string;             // obrigatório
  prazo: string;              // obrigatório — id da opção de prazo
}

export interface QuizData {
  sessionId: string;
  versaoQuiz: string;
  ambientesOrdenados: string[];                    // ids, na ordem de clique
  ambienteAtualIndex: number;
  respostas: Record<string, AmbienteRespostas>;    // chave = id do ambiente
  contato: ContatoData;
  totalMin: number;
  totalMax: number;
  categoria: LeadCategoria;
  scoreLeadQualificacao: number;                   // 0–100
}

export type LeadCategoria = 'ESSENCIAL' | 'PADRÃO' | 'PREMIUM' | 'EXCLUSIVO' | '';

// ─── Estilos — Tela 4 (globais, mesmos para todos os ambientes) ───────────────

export const ESTILOS: QuizOption[] = [
  { id: 'contemporaneo', label: 'Contemporâneo Sereno',      descricao: 'Linhas limpas, mármore claro, madeira nobre.' },
  { id: 'industrial',    label: 'Industrial Sofisticado',     descricao: 'Concreto pigmentado, aço escovado, presença marcante.' },
  { id: 'classico',      label: 'Clássico Reinterpretado',    descricao: 'Boiseries modernas, dourado fosco, elegância eterna.' },
  { id: 'organico',      label: 'Orgânico Quente',            descricao: 'Madeiras vivas, curvas suaves, acolhimento natural.' },
];

// ─── Investimento — Tela 8 (global, mesmo para todos os ambientes) ────────────

export const INVESTIMENTO_OPTIONS: InvestimentoOption[] = [
  { id: 'ate5k',      label: 'Até R$ 5.000',             descricao: 'SOLUÇÕES PONTUAIS',          min: 0,      max: 5000 },
  { id: '5k15k',      label: 'R$ 5.000 — R$ 15.000',     descricao: 'MÓVEIS ESPECÍFICOS',         min: 5000,   max: 15000 },
  { id: '15k40k',     label: 'R$ 15.000 — R$ 40.000',    descricao: 'AMBIENTE MÉDIO PORTE',       min: 15000,  max: 40000 },
  { id: '40k80k',     label: 'R$ 40.000 — R$ 80.000',    descricao: 'AMBIENTE COMPLETO PADRÃO',   min: 40000,  max: 80000 },
  { id: '80k150k',    label: 'R$ 80.000 — R$ 150.000',   descricao: 'AMBIENTE ASSINADO PREMIUM',  min: 80000,  max: 150000 },
  { id: '150k300k',   label: 'R$ 150.000 — R$ 300.000',  descricao: 'PROJETO EXCLUSIVO DE AUTOR', min: 150000, max: 300000 },
  { id: 'acima300k',  label: 'Acima de R$ 300.000',      descricao: 'PROJETO SEM LIMITES',        min: 300000, max: 600000 },
  { id: 'conversar',  label: 'Prefiro conversar',         descricao: 'VALORES PERSONALIZADOS',    min: 0,      max: 0 },
];

// ─── Prazo — Tela 10 ──────────────────────────────────────────────────────────

export const PRAZO_OPTIONS: QuizOption[] = [
  { id: 'imediato',    label: 'Assim que possível — estou pronto' },
  { id: '3meses',      label: 'Nos próximos 3 meses' },
  { id: '6meses',      label: 'Entre 3 e 6 meses' },
  { id: '12meses',     label: 'Em até 1 ano' },
  { id: 'pesquisando', label: 'Ainda estou pesquisando' },
];

// ─── Conteúdo dos 9 Ambientes ─────────────────────────────────────────────────

export const AMBIENTES: AmbienteContent[] = [
  {
    id: 'cozinha',
    nomeSimples: 'Cozinha',
    nomeEmocional: 'Cozinha para receber',
    estilos: ESTILOS,
    cenas: [
      { id: 'coz_c1', label: 'Domingos cozinhando para a família' },
      { id: 'coz_c2', label: 'Jantares com amigos próximos' },
      { id: 'coz_c3', label: 'Café da manhã em silêncio' },
      { id: 'coz_c4', label: 'Cozinhar como hobby criativo' },
      { id: 'coz_c5', label: 'Receber para celebrações grandes' },
    ],
    inegociaveis: [
      { id: 'coz_i1', label: 'Ilha generosa para conviver' },
      { id: 'coz_i2', label: 'Coifa protagonista' },
      { id: 'coz_i3', label: 'Adega climatizada integrada' },
      { id: 'coz_i4', label: 'Forno e cooktop de embutir premium' },
      { id: 'coz_i5', label: 'Iluminação cênica' },
      { id: 'coz_i6', label: 'Despensa oculta' },
      { id: 'coz_i7', label: 'Bancada técnica de preparo' },
      { id: 'coz_i8', label: 'Espaço bistrô' },
    ],
    memorias: [
      { id: 'coz_m1', label: 'O barulho da chaleira no domingo' },
      { id: 'coz_m2', label: 'Risadas da família reunida' },
      { id: 'coz_m3', label: 'Música ambiente e taças tilintando' },
      { id: 'coz_m4', label: 'O silêncio absoluto da manhã' },
      { id: 'coz_m5', label: 'A voz de quem eu amo cozinhando comigo' },
    ],
  },
  {
    id: 'closet',
    nomeSimples: 'Closet',
    nomeEmocional: 'Closet para começar o dia',
    estilos: ESTILOS,
    cenas: [
      { id: 'clo_c1', label: 'Começar o dia com ritual e calma' },
      { id: 'clo_c2', label: 'Escolher a roupa certa para cada momento' },
      { id: 'clo_c3', label: 'Organização que elimina a ansiedade' },
      { id: 'clo_c4', label: 'Um espaço só seu, de respiro' },
      { id: 'clo_c5', label: 'Guardar memórias e peças especiais' },
    ],
    inegociaveis: [
      { id: 'clo_i1', label: 'Iluminação cênica interna' },
      { id: 'clo_i2', label: 'Gavetas e nichos sob medida' },
      { id: 'clo_i3', label: 'Espelho de corpo inteiro embutido' },
      { id: 'clo_i4', label: 'Sapateira organizada e visível' },
      { id: 'clo_i5', label: 'Espaço para bolsas em destaque' },
      { id: 'clo_i6', label: 'Área de passar / vaporizador' },
      { id: 'clo_i7', label: 'Penteadeira integrada' },
      { id: 'clo_i8', label: 'Cabideiro giratório ou deslizante' },
    ],
    memorias: [
      { id: 'clo_m1', label: 'O silêncio de um espaço só seu' },
      { id: 'clo_m2', label: 'O cheiro de roupa fresca organizada' },
      { id: 'clo_m3', label: 'A sensação de encontrar tudo onde deve estar' },
      { id: 'clo_m4', label: 'Luz suave que revela cada detalhe' },
      { id: 'clo_m5', label: 'A calma antes de sair de casa' },
    ],
  },
  {
    id: 'sala',
    nomeSimples: 'Sala',
    nomeEmocional: 'Sala para celebrar',
    estilos: ESTILOS,
    cenas: [
      { id: 'sal_c1', label: 'Receber amigos e família em estilo' },
      { id: 'sal_c2', label: 'Noites de cinema em casa' },
      { id: 'sal_c3', label: 'Conversas que se estendem pela madrugada' },
      { id: 'sal_c4', label: 'Um espaço que impressiona ao entrar' },
      { id: 'sal_c5', label: 'Celebrações e eventos especiais' },
    ],
    inegociaveis: [
      { id: 'sal_i1', label: 'Painel de TV com nicho integrado' },
      { id: 'sal_i2', label: 'Rack suspenso' },
      { id: 'sal_i3', label: 'Estante embutida para livros ou coleções' },
      { id: 'sal_i4', label: 'Iluminação indireta' },
      { id: 'sal_i5', label: 'Home theater com acústica' },
      { id: 'sal_i6', label: 'Adega ou bar integrado' },
      { id: 'sal_i7', label: 'Sofá sob medida' },
      { id: 'sal_i8', label: 'Mesa de centro com armazenamento' },
    ],
    memorias: [
      { id: 'sal_m1', label: 'O som da risada de quem eu amo' },
      { id: 'sal_m2', label: 'Música boa enchendo o espaço' },
      { id: 'sal_m3', label: 'O silêncio confortável de uma noite em casa' },
      { id: 'sal_m4', label: 'O tilintar de taças em uma celebração' },
      { id: 'sal_m5', label: 'A cena de um filme que prende a atenção' },
    ],
  },
  {
    id: 'quarto',
    nomeSimples: 'Quarto',
    nomeEmocional: 'Quarto para descansar',
    estilos: ESTILOS,
    cenas: [
      { id: 'qua_c1', label: 'Acordar com luz e leveza' },
      { id: 'qua_c2', label: 'Dormir com conforto absoluto' },
      { id: 'qua_c3', label: 'Um refúgio após dias intensos' },
      { id: 'qua_c4', label: 'Momentos a dois, com privacidade' },
      { id: 'qua_c5', label: 'Espaço para leitura e silêncio' },
    ],
    inegociaveis: [
      { id: 'qua_i1', label: 'Cabeceira estofada integrada à parede' },
      { id: 'qua_i2', label: 'Criados-mudos suspensos' },
      { id: 'qua_i3', label: 'Guarda-roupa com espelho embutido' },
      { id: 'qua_i4', label: 'Iluminação cênica de cabeceira' },
      { id: 'qua_i5', label: 'Baú ao pé da cama' },
      { id: 'qua_i6', label: 'TV embutida ou painel' },
      { id: 'qua_i7', label: 'Área de leitura com luminária' },
      { id: 'qua_i8', label: 'Blackout integrado' },
    ],
    memorias: [
      { id: 'qua_m1', label: 'O silêncio absoluto das 22h' },
      { id: 'qua_m2', label: 'A luz suave do amanhecer entrando' },
      { id: 'qua_m3', label: 'O peso do cobertor nos dias frios' },
      { id: 'qua_m4', label: 'A voz baixa de uma conversa íntima' },
      { id: 'qua_m5', label: 'O som do nada, só paz' },
    ],
  },
  {
    id: 'banheiro',
    nomeSimples: 'Banheiro',
    nomeEmocional: 'Banheiro para se cuidar',
    estilos: ESTILOS,
    cenas: [
      { id: 'ban_c1', label: 'Ritual matinal em paz' },
      { id: 'ban_c2', label: 'Banho como momento de descompressão' },
      { id: 'ban_c3', label: 'Cuidar-se com calma e privacidade' },
      { id: 'ban_c4', label: 'Um spa em casa' },
      { id: 'ban_c5', label: 'Começar e terminar o dia com intenção' },
    ],
    inegociaveis: [
      { id: 'ban_i1', label: 'Bancada e cuba sob medida' },
      { id: 'ban_i2', label: 'Nicho embutido no box' },
      { id: 'ban_i3', label: 'Espelho com iluminação LED' },
      { id: 'ban_i4', label: 'Cuba de embutir ou semi-encaixe' },
      { id: 'ban_i5', label: 'Aquecimento no piso' },
      { id: 'ban_i6', label: 'Banheira de imersão' },
      { id: 'ban_i7', label: 'Toalheiro aquecido' },
      { id: 'ban_i8', label: 'Armário suspenso com divisórias' },
    ],
    memorias: [
      { id: 'ban_m1', label: 'A água quente descendo nas costas após um dia longo' },
      { id: 'ban_m2', label: 'O silêncio de estar sozinho por alguns minutos' },
      { id: 'ban_m3', label: 'O cheiro de um produto favorito abrindo o dia' },
      { id: 'ban_m4', label: 'A temperatura certa, sem pensar nisso' },
      { id: 'ban_m5', label: 'A sensação de estar em um spa' },
    ],
  },
  {
    id: 'escritorio',
    nomeSimples: 'Escritório',
    nomeEmocional: 'Escritório para criar',
    estilos: ESTILOS,
    cenas: [
      { id: 'esc_c1', label: 'Trabalhar com foco e inspiração' },
      { id: 'esc_c2', label: 'Reuniões com clientes em casa' },
      { id: 'esc_c3', label: 'Criar sem interrupções' },
      { id: 'esc_c4', label: 'Um espaço que reflete quem você é profissionalmente' },
      { id: 'esc_c5', label: 'Separar o trabalho do resto da vida' },
    ],
    inegociaveis: [
      { id: 'esc_i1', label: 'Mesa de trabalho ampla e ergonômica' },
      { id: 'esc_i2', label: 'Parede de prateleiras do chão ao teto' },
      { id: 'esc_i3', label: 'Iluminação de trabalho sem reflexo' },
      { id: 'esc_i4', label: 'Cabeamento oculto e organizado' },
      { id: 'esc_i5', label: 'Armário para arquivo e documentos' },
      { id: 'esc_i6', label: 'Segundo monitor ou tela embutida' },
      { id: 'esc_i7', label: 'Bancada de apoio lateral' },
      { id: 'esc_i8', label: 'Isolamento acústico integrado' },
    ],
    memorias: [
      { id: 'esc_m1', label: 'O silêncio de foco profundo' },
      { id: 'esc_m2', label: 'O som do teclado em ritmo de concentração' },
      { id: 'esc_m3', label: 'A luz certa que não cansa os olhos' },
      { id: 'esc_m4', label: 'A sensação de estar no controle' },
      { id: 'esc_m5', label: 'O clique de fechar o computador quando o trabalho foi bem feito' },
    ],
  },
  {
    id: 'gourmet',
    nomeSimples: 'Área Gourmet',
    nomeEmocional: 'Área Gourmet para reunir',
    estilos: ESTILOS,
    cenas: [
      { id: 'gou_c1', label: 'Churrascos de domingo em família' },
      { id: 'gou_c2', label: 'Confraternizações com amigos' },
      { id: 'gou_c3', label: 'Receber ao ar livre com estilo' },
      { id: 'gou_c4', label: 'Criar momentos memoráveis fora de casa' },
      { id: 'gou_c5', label: 'Estender o convívio para além da sala' },
    ],
    inegociaveis: [
      { id: 'gou_i1', label: 'Churrasqueira embutida de alta potência' },
      { id: 'gou_i2', label: 'Pia e bancada de preparo externas' },
      { id: 'gou_i3', label: 'Adega ou frigobar embutido' },
      { id: 'gou_i4', label: 'Coifa ou exaustor de alta potência' },
      { id: 'gou_i5', label: 'Iluminação cênica à prova d\'água' },
      { id: 'gou_i6', label: 'Armário externo para louças e utensílios' },
      { id: 'gou_i7', label: 'Bancada de servir integrada' },
      { id: 'gou_i8', label: 'TV externa resistente à umidade' },
    ],
    memorias: [
      { id: 'gou_m1', label: 'O cheiro de churrasco no ar' },
      { id: 'gou_m2', label: 'O barulho de conversa e risada ao fundo' },
      { id: 'gou_m3', label: 'O calor do fogo e do entardecer' },
      { id: 'gou_m4', label: 'O som das bebidas geladas sendo abertas' },
      { id: 'gou_m5', label: 'A sensação de receber como você sempre quis' },
    ],
  },
  {
    id: 'lavanderia',
    nomeSimples: 'Lavanderia',
    nomeEmocional: 'Lavanderia para uma rotina leve',
    estilos: ESTILOS,
    cenas: [
      { id: 'lav_c1', label: 'Uma rotina de cuidados sem estresse' },
      { id: 'lav_c2', label: 'Organização que facilita o dia a dia' },
      { id: 'lav_c3', label: 'Espaço funcional e bonito ao mesmo tempo' },
      { id: 'lav_c4', label: 'Eficiência nos cuidados da casa' },
      { id: 'lav_c5', label: 'Guardar tudo com ordem e facilidade' },
    ],
    inegociaveis: [
      { id: 'lav_i1', label: 'Tanque esculpido embutido' },
      { id: 'lav_i2', label: 'Máquina de lavar embutida' },
      { id: 'lav_i3', label: 'Secadora integrada' },
      { id: 'lav_i4', label: 'Armário de produtos oculto' },
      { id: 'lav_i5', label: 'Tábua de passar retrátil' },
      { id: 'lav_i6', label: 'Iluminação funcional de trabalho' },
      { id: 'lav_i7', label: 'Bancada de dobrar roupas' },
      { id: 'lav_i8', label: 'Passa-roupas suspenso' },
    ],
    memorias: [
      { id: 'lav_m1', label: 'O cheiro de roupa limpa saindo da secadora' },
      { id: 'lav_m2', label: 'O silêncio organizado de tudo no lugar' },
      { id: 'lav_m3', label: 'A leveza de uma tarefa que fluiu bem' },
      { id: 'lav_m4', label: 'O som suave da máquina de fundo' },
      { id: 'lav_m5', label: 'A satisfação de ver ordem onde havia caos' },
    ],
  },
  {
    id: 'outro',
    nomeSimples: 'Outro',
    nomeEmocional: 'Outro ambiente',
    estilos: ESTILOS,
    cenas: [
      { id: 'out_c1', label: 'Liberdade total para criar' },
      { id: 'out_c2', label: 'Um espaço único, que não se encaixa em nada' },
      { id: 'out_c3', label: 'Transformar um ambiente esquecido' },
      { id: 'out_c4', label: 'Algo que ainda não existe em lugar nenhum' },
      { id: 'out_c5', label: 'O projeto que está na sua cabeça há anos' },
    ],
    inegociaveis: [
      { id: 'out_i1', label: 'Uso exclusivo' },
      { id: 'out_i2', label: 'Versatilidade total' },
      { id: 'out_i3', label: 'Iluminação especial' },
      { id: 'out_i4', label: 'Privacidade' },
      { id: 'out_i5', label: 'Integração com área externa' },
      { id: 'out_i6', label: 'Acesso independente' },
      { id: 'out_i7', label: 'Tecnologia integrada' },
      { id: 'out_i8', label: 'Personalização livre' },
    ],
    memorias: [
      { id: 'out_m1', label: 'A sensação de entrar num espaço que é só seu' },
      { id: 'out_m2', label: 'O silêncio de um lugar que ainda não existe' },
      { id: 'out_m3', label: 'A liberdade de criar sem referência' },
      { id: 'out_m4', label: 'A emoção de imaginar algo do zero' },
      { id: 'out_m5', label: 'A vontade de já estar vivendo este espaço' },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const AMBIENTE_MAP: Record<string, AmbienteContent> =
  Object.fromEntries(AMBIENTES.map(a => [a.id, a]));

export const INVESTIMENTO_MAP: Record<string, InvestimentoOption> =
  Object.fromEntries(INVESTIMENTO_OPTIONS.map(o => [o.id, o]));

export function makeQuizData(): QuizData {
  return {
    sessionId: crypto.randomUUID(),
    versaoQuiz: '2.0',
    ambientesOrdenados: [],
    ambienteAtualIndex: 0,
    respostas: {},
    contato: { nome: '', whatsapp: '', email: '', cidade: '', prazo: '' },
    totalMin: 0,
    totalMax: 0,
    categoria: '',
    scoreLeadQualificacao: 0,
  };
}

export function makeAmbienteRespostas(): AmbienteRespostas {
  return { estilos: [], cenas: [], inegociaveis: [], memorias: [], investimento: '' };
}
