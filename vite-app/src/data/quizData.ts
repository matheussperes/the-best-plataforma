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
    nomeEmocional: 'Cozinha - Para Reunir',
    estilos: ESTILOS,
    cenas: [
      { id: 'coz_c1', label: 'Domingos cozinhando para a família' },
      { id: 'coz_c2', label: 'Jantares com amigos próximos' },
      { id: 'coz_c3', label: 'Café da manhã em silêncio' },
      { id: 'coz_c4', label: 'Cozinhar como hobby criativo' },
      { id: 'coz_c5', label: 'Receber para celebrações grandes' },
    ],
    inegociaveis: [
      { id: 'coz_i1', label: 'Muito espaço para cozinhar' },
      { id: 'coz_i2', label: 'Tudo organizado e escondido' },
      { id: 'coz_i3', label: 'Um lugar para reunir as pessoas' },
      { id: 'coz_i4', label: 'Eletros totalmente integrados' },
      { id: 'coz_i5', label: 'Iluminação aconchegante' },
      { id: 'coz_i6', label: 'Espaço para um bom vinho' },
      { id: 'coz_i7', label: 'Bancada ampla para preparar receitas' },
      { id: 'coz_i8', label: 'Um cantinho para o café' },
    ],
    memorias: [
      { id: 'coz_m1', label: 'O cheiro do café passado pela manhã' },
      { id: 'coz_m2', label: 'Conversas que atravessam a madrugada' },
      { id: 'coz_m3', label: 'O aroma de um bolo saindo do forno' },
      { id: 'coz_m4', label: 'Crianças ajudando a preparar uma receita' },
      { id: 'coz_m5', label: 'A voz de quem eu amo cozinhando comigo' },
    ],
  },
  {
    id: 'closet',
    nomeSimples: 'Closet',
    nomeEmocional: 'Closet - Para Inspirar',
    estilos: ESTILOS,
    cenas: [
      { id: 'clo_c1', label: 'Começar o dia com calma e intenção' },
      { id: 'clo_c2', label: 'Escolher a roupa certa sem pressa' },
      { id: 'clo_c3', label: 'Ter tudo organizado e fácil de encontrar' },
      { id: 'clo_c4', label: 'Um momento só meu antes de sair' },
      { id: 'clo_c5', label: 'Preparar-me para ocasiões especiais' },
    ],
    inegociaveis: [
      { id: 'clo_i1', label: 'Iluminação que valoriza cada detalhe' },
      { id: 'clo_i2', label: 'Tudo no seu lugar, sem bagunça' },
      { id: 'clo_i3', label: 'Espelho amplo para me ver por completo' },
      { id: 'clo_i4', label: 'Sapatos organizados e fáceis de visualizar' },
      { id: 'clo_i5', label: 'Espaço dedicado para bolsas e acessórios' },
      { id: 'clo_i6', label: 'Um lugar para cuidar das roupas' },
      { id: 'clo_i7', label: 'Um espaço para maquiagem e autocuidado' },
      { id: 'clo_i8', label: 'Aproveitar cada centímetro do ambiente' },
    ],
    memorias: [
      { id: 'clo_m1', label: 'O silêncio de um espaço só meu' },
      { id: 'clo_m2', label: 'O cheiro de roupa limpa e bem cuidada' },
      { id: 'clo_m3', label: 'A tranquilidade de encontrar tudo facilmente' },
      { id: 'clo_m4', label: 'A luz suave refletindo no espelho' },
      { id: 'clo_m5', label: 'A confiança antes de abrir a porta e sair' },
    ],
  },
  {
    id: 'sala',
    nomeSimples: 'Sala',
    nomeEmocional: 'Sala - Para Viver',
    estilos: ESTILOS,
    cenas: [
      { id: 'sal_c1', label: 'Receber amigos e família em casa' },
      { id: 'sal_c2', label: 'Noites de filmes e séries juntos' },
      { id: 'sal_c3', label: 'Conversas que atravessam a noite' },
      { id: 'sal_c4', label: 'Um ambiente que encanta logo na chegada' },
      { id: 'sal_c5', label: 'Celebrar momentos especiais' },
    ],
    inegociaveis: [
      { id: 'sal_i1', label: 'Um espaço para reunir as pessoas' },
      { id: 'sal_i2', label: 'TV perfeitamente integrada ao ambiente' },
      { id: 'sal_i3', label: 'Lugar para livros, objetos e histórias' },
      { id: 'sal_i4', label: 'Iluminação acolhedora e versátil' },
      { id: 'sal_i5', label: 'Experiência de cinema em casa' },
      { id: 'sal_i6', label: 'Um cantinho para servir bons momentos' },
      { id: 'sal_i7', label: 'Muito conforto para permanecer por horas' },
      { id: 'sal_i8', label: 'Organização sem deixar tudo à mostra' },
    ],
    memorias: [
      { id: 'sal_m1', label: 'O som das risadas preenchendo a casa' },
      { id: 'sal_m2', label: 'Música ambiente durante uma boa conversa' },
      { id: 'sal_m3', label: 'O silêncio confortável de uma noite tranquila' },
      { id: 'sal_m4', label: 'O tilintar das taças em uma celebração' },
      { id: 'sal_m5', label: 'Todos reunidos compartilhando um momento especial' },
    ],
  },
  {
    id: 'quarto',
    nomeSimples: 'Quarto',
    nomeEmocional: 'Quarto - Para Sonhar',
    estilos: ESTILOS,
    cenas: [
      { id: 'qua_c1', label: 'Acordar devagar, com luz e tranquilidade' },
      { id: 'qua_c2', label: 'Dormir profundamente todas as noites' },
      { id: 'qua_c3', label: 'Encontrar paz depois de um dia intenso' },
      { id: 'qua_c4', label: 'Compartilhar momentos a dois com aconchego' },
      { id: 'qua_c5', label: 'Ler, descansar e esquecer do tempo' },
    ],
    inegociaveis: [
      { id: 'qua_i1', label: 'Uma cama que convida ao descanso' },
      { id: 'qua_i2', label: 'Iluminação suave para desacelerar' },
      { id: 'qua_i3', label: 'Tudo organizado ao lado da cama' },
      { id: 'qua_i4', label: 'Espaço para relaxar sem distrações' },
      { id: 'qua_i5', label: 'Escuridão completa para dormir melhor' },
      { id: 'qua_i6', label: 'Um cantinho para leitura ou contemplação' },
      { id: 'qua_i7', label: 'Tecnologia integrada com discrição' },
      { id: 'qua_i8', label: 'Um ambiente silencioso e acolhedor' },
    ],
    memorias: [
      { id: 'qua_m1', label: 'O silêncio que anuncia o fim do dia' },
      { id: 'qua_m2', label: 'A luz suave da manhã entrando pela janela' },
      { id: 'qua_m3', label: 'O aconchego do cobertor nas noites frias' },
      { id: 'qua_m4', label: 'Uma conversa tranquila antes de dormir' },
      { id: 'qua_m5', label: 'A sensação de paz ao fechar a porta' },
    ],
  },
  {
    id: 'banheiro',
    nomeSimples: 'Banheiro',
    nomeEmocional: 'Banheiro - Para Renovar',
    estilos: ESTILOS,
    cenas: [
      { id: 'ban_c1', label: 'Começar o dia com calma e leveza' },
      { id: 'ban_c2', label: 'Transformar o banho em um momento de relaxamento' },
      { id: 'ban_c3', label: 'Cuidar de mim com tranquilidade e privacidade' },
      { id: 'ban_c4', label: 'Ter a sensação de um spa dentro de casa' },
      { id: 'ban_c5', label: 'Encerrar o dia renovando as energias' },
    ],
    inegociaveis: [
      { id: 'ban_i1', label: 'Uma bancada ampla e funcional' },
      { id: 'ban_i2', label: 'Tudo organizado e fácil de acessar' },
      { id: 'ban_i3', label: 'Iluminação ideal para autocuidado' },
      { id: 'ban_i4', label: 'Um box confortável e espaçoso' },
      { id: 'ban_i5', label: 'Conforto térmico em todas as estações' },
      { id: 'ban_i6', label: 'Um espaço para relaxar de verdade' },
      { id: 'ban_i7', label: 'Toalhas sempre aquecidas e aconchegantes' },
      { id: 'ban_i8', label: 'Elegância sem abrir mão da praticidade' },
    ],
    memorias: [
      { id: 'ban_m1', label: 'A água quente relaxando o corpo após um dia intenso' },
      { id: 'ban_m2', label: 'O silêncio de alguns minutos só para mim' },
      { id: 'ban_m3', label: 'O aroma do meu produto favorito preenchendo o ambiente' },
      { id: 'ban_m4', label: 'O vapor criando uma atmosfera de relaxamento' },
      { id: 'ban_m5', label: 'A sensação de sair renovado, como depois de um spa' },
    ],
  },
  {
    id: 'escritorio',
    nomeSimples: 'Escritório',
    nomeEmocional: 'Escritório - Para Conquista',
    estilos: ESTILOS,
    cenas: [
      { id: 'esc_c1', label: 'Trabalhar com foco e produtividade' },
      { id: 'esc_c2', label: 'Receber clientes com profissionalismo' },
      { id: 'esc_c3', label: 'Criar ideias sem interrupções' },
      { id: 'esc_c4', label: 'Ter um espaço que representa minha trajetória' },
      { id: 'esc_c5', label: 'Encerrar o expediente e desconectar de verdade' },
    ],
    inegociaveis: [
      { id: 'esc_i1', label: 'Uma bancada ampla para trabalhar com conforto' },
      { id: 'esc_i2', label: 'Tudo organizado e sempre ao alcance das mãos' },
      { id: 'esc_i3', label: 'Iluminação confortável para longas horas de trabalho' },
      { id: 'esc_i4', label: 'Tecnologia integrada sem fios aparentes' },
      { id: 'esc_i5', label: 'Espaço para livros, documentos e materiais' },
      { id: 'esc_i6', label: 'Um ambiente livre de distrações' },
      { id: 'esc_i7', label: 'Flexibilidade para diferentes tipos de trabalho' },
      { id: 'esc_i8', label: 'Conforto para manter o foco durante todo o dia' },
    ],
    memorias: [
      { id: 'esc_m1', label: 'O silêncio de uma mente totalmente concentrada' },
      { id: 'esc_m2', label: 'O som do teclado acompanhando um dia produtivo' },
      { id: 'esc_m3', label: 'A luz perfeita durante horas de trabalho' },
      { id: 'esc_m4', label: 'A satisfação de concluir um grande projeto' },
      { id: 'esc_m5', label: 'Fechar o computador com a sensação de missão cumprida' },
    ],
  },
  {
    id: 'gourmet',
    nomeSimples: 'Área Gourmet',
    nomeEmocional: 'Área Gourmet - Para Celebrar',
    estilos: ESTILOS,
    cenas: [
      { id: 'gou_c1', label: 'Reunir a família para um churrasco de domingo' },
      { id: 'gou_c2', label: 'Receber amigos para longas conversas' },
      { id: 'gou_c3', label: 'Celebrar ao ar livre com conforto e estilo' },
      { id: 'gou_c4', label: 'Criar lembranças em datas especiais' },
      { id: 'gou_c5', label: 'Fazer da área externa o coração da casa' },
    ],
    inegociaveis: [
      { id: 'gou_i1', label: 'Uma churrasqueira que reúne as pessoas' },
      { id: 'gou_i2', label: 'Espaço amplo para preparar e servir' },
      { id: 'gou_i3', label: 'Bebidas sempre na temperatura ideal' },
      { id: 'gou_i4', label: 'Tudo à mão, sem precisar entrar na casa' },
      { id: 'gou_i5', label: 'Iluminação perfeita para aproveitar até a noite' },
      { id: 'gou_i6', label: 'Muito espaço para guardar utensílios' },
      { id: 'gou_i7', label: 'Uma bancada onde todos possam se reunir' },
      { id: 'gou_i8', label: 'Conforto para passar horas com quem importa' },
    ],
    memorias: [
      { id: 'gou_m1', label: 'O aroma do churrasco tomando conta do ambiente' },
      { id: 'gou_m2', label: 'As risadas e conversas que nunca têm hora para acabar' },
      { id: 'gou_m3', label: 'O calor da churrasqueira em um fim de tarde' },
      { id: 'gou_m4', label: 'O som das taças brindando bons momentos' },
      { id: 'gou_m5', label: 'A alegria de ver todos reunidos ao redor da mesa' },
    ],
  },
  {
    id: 'lavanderia',
    nomeSimples: 'Lavanderia',
    nomeEmocional: 'Lavanderia - Para Facilitar',
    estilos: ESTILOS,
    cenas: [
      { id: 'lav_c1', label: 'Cuidar da casa sem complicação' },
      { id: 'lav_c2', label: 'Manter tudo organizado com facilidade' },
      { id: 'lav_c3', label: 'Transformar a rotina em algo mais leve' },
      { id: 'lav_c4', label: 'Ganhar tempo para o que realmente importa' },
      { id: 'lav_c5', label: 'Ter um ambiente bonito até nas tarefas do dia a dia' },
    ],
    inegociaveis: [
      { id: 'lav_i1', label: 'Tudo organizado e fácil de acessar' },
      { id: 'lav_i2', label: 'Espaço para lavar e secar com praticidade' },
      { id: 'lav_i3', label: 'Muito espaço para armazenar produtos' },
      { id: 'lav_i4', label: 'Bancada para dobrar e organizar roupas' },
      { id: 'lav_i5', label: 'Um ambiente limpo e visualmente organizado' },
      { id: 'lav_i6', label: 'Iluminação que facilita todas as tarefas' },
      { id: 'lav_i7', label: 'Aproveitar cada centímetro do ambiente' },
      { id: 'lav_i8', label: 'Tudo pensado para agilizar a rotina' },
    ],
    memorias: [
      { id: 'lav_m1', label: 'O cheiro de roupa limpa recém-lavada' },
      { id: 'lav_m2', label: 'A sensação de ver tudo organizado' },
      { id: 'lav_m3', label: 'Dobrar roupas sem pressa em um espaço agradável' },
      { id: 'lav_m4', label: 'O som tranquilo da máquina funcionando ao fundo' },
      { id: 'lav_m5', label: 'A satisfação de terminar tudo com facilidade' },
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
