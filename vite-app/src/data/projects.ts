// Dados extraídos do bundle — imagens serão importadas na Fase 3
export interface Project {
  img: string;
  amb: string;
  ttl: string;
  local: string;
  tall?: boolean;
}

// placeholder — substituir pelos imports das imagens na Fase 3
export const PROJECTS: Project[] = [
  { img: '', amb: 'Cozinha',       ttl: 'Residência Alphaville',        local: 'Campinas', tall: true },
  { img: '', amb: 'Closet',        ttl: 'Cobertura Cambuí',             local: 'Campinas' },
  { img: '', amb: 'Sala',          ttl: 'Apto. Nova Campinas',          local: 'Campinas' },
  { img: '', amb: 'Quarto',        ttl: 'Suíte Master Gramado',         local: 'Gramado',  tall: true },
  { img: '', amb: 'Área Gourmet',  ttl: 'Casa de Campo Itu',            local: 'Itu' },
  { img: '', amb: 'Banheiro',      ttl: 'Lavabo Swiss Park',            local: 'Campinas' },
  { img: '', amb: 'Escritório',    ttl: 'Home Office Cambuí',           local: 'Campinas', tall: true },
  { img: '', amb: 'Cozinha',       ttl: 'Penthouse Sousas',             local: 'Campinas' },
  { img: '', amb: 'Closet',        ttl: 'Closet Feminino Barão',        local: 'Campinas' },
  { img: '', amb: 'Quarto',        ttl: 'Quarto Jovem Taquaral',        local: 'Campinas' },
  { img: '', amb: 'Sala',          ttl: 'Living Loft Vinhedo',          local: 'Vinhedo',  tall: true },
  { img: '', amb: 'Lavanderia',    ttl: 'Espaço Serviço Valinhos',      local: 'Valinhos' },
];

export const FILTERS = [
  'Todos', 'Cozinha', 'Closet', 'Sala', 'Quarto',
  'Banheiro', 'Escritório', 'Área Gourmet', 'Lavanderia',
];

// Teasers exibidos na HomeScreen (subconjunto de 3 projetos)
export interface Teaser {
  img: string;
  amb: string;
  ttl: string;
}

export const TEASERS: Teaser[] = [
  { img: '', amb: 'Cozinha',    ttl: 'Residência Alphaville' },
  { img: '', amb: 'Closet',     ttl: 'Cobertura Cambuí' },
  { img: '', amb: 'Sala de estar', ttl: 'Apartamento Nova Campinas' },
];
