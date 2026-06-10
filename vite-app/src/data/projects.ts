import imgCozinha01 from '/assets/images/imgCozinha01.webp';
import imgCozinha02 from '/assets/images/imgCozinha02.webp';
import imgCozinha03 from '/assets/images/imgCozinha03.webp';
import imgCloset01  from '/assets/images/imgCloset01.webp';
import imgCloset02  from '/assets/images/imgCloset02.webp';
import imgSala01    from '/assets/images/imgSala01.webp';
import imgSala02    from '/assets/images/imgSala02.webp';
import imgSala03    from '/assets/images/imgSala03.webp';
import imgQuarto01  from '/assets/images/imgQuarto01.webp';
import imgQuarto02  from '/assets/images/imgQuarto02.jpg';
import imgGourmet01 from '/assets/images/imgGourmet01.webp';
import imgBanheiro01    from '/assets/images/imgBanheiro01.jpg';
import imgEscritorio01  from '/assets/images/imgEscritorio01.webp';
import imgLavanderia01  from '/assets/images/imgLavanderia01.webp';

export interface Project {
  img: string;
  amb: string;
  ttl: string;
  local: string;
  tall?: boolean;
}

export const PROJECTS: Project[] = [
  { img: imgCozinha01,   amb: 'Cozinha',      ttl: 'Residência Alphaville',    local: 'Campinas', tall: true },
  { img: imgCloset01,    amb: 'Closet',       ttl: 'Cobertura Cambuí',         local: 'Campinas' },
  { img: imgSala01,      amb: 'Sala',         ttl: 'Apto. Nova Campinas',      local: 'Campinas' },
  { img: imgQuarto02,    amb: 'Quarto',       ttl: 'Suíte Master Gramado',     local: 'Gramado',  tall: true },
  { img: imgGourmet01,   amb: 'Área Gourmet', ttl: 'Casa de Campo Itu',        local: 'Itu' },
  { img: imgBanheiro01,  amb: 'Banheiro',     ttl: 'Lavabo Swiss Park',        local: 'Campinas' },
  { img: imgEscritorio01,amb: 'Escritório',   ttl: 'Home Office Cambuí',       local: 'Campinas', tall: true },
  { img: imgCozinha03,   amb: 'Cozinha',      ttl: 'Penthouse Sousas',         local: 'Campinas' },
  { img: imgCloset02,    amb: 'Closet',       ttl: 'Closet Feminino Barão',    local: 'Campinas' },
  { img: imgQuarto01,    amb: 'Quarto',       ttl: 'Quarto Jovem Taquaral',    local: 'Campinas' },
  { img: imgSala03,      amb: 'Sala',         ttl: 'Living Loft Vinhedo',      local: 'Vinhedo',  tall: true },
  { img: imgLavanderia01,amb: 'Lavanderia',   ttl: 'Espaço Serviço Valinhos',  local: 'Valinhos' },
];

export const FILTERS = [
  'Todos', 'Cozinha', 'Closet', 'Sala', 'Quarto',
  'Banheiro', 'Escritório', 'Área Gourmet', 'Lavanderia',
];

export interface Teaser {
  img: string;
  amb: string;
  ttl: string;
}

export const TEASERS: Teaser[] = [
  { img: imgCozinha02, amb: 'Cozinha',       ttl: 'Residência Alphaville' },
  { img: imgCloset01,  amb: 'Closet',        ttl: 'Cobertura Cambuí' },
  { img: imgSala02,    amb: 'Sala de estar', ttl: 'Apartamento Nova Campinas' },
];
