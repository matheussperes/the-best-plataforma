// Dados extraídos do bundle
export interface QuizOption {
  t: string;
  d: string;
}

export interface QuizStep {
  key: string;
  eyebrow: string;
  q: string;
  options: QuizOption[];
}

export const STEPS: QuizStep[] = [
  {
    key: 'sensacao',
    eyebrow: 'Pergunta 01 · A sensação',
    q: 'Que sensação você quer *sentir* ao chegar em casa?',
    options: [
      { t: 'Serenidade',  d: 'Silêncio, leveza, respiro.' },
      { t: 'Imponência',  d: 'Presença, materiais nobres.' },
      { t: 'Aconchego',   d: 'Calor, madeira, intimidade.' },
      { t: 'Vitalidade',  d: 'Luz, abertura, energia.' },
    ],
  },
  {
    key: 'ambiente',
    eyebrow: 'Pergunta 02 · O ambiente',
    q: 'Por qual *ambiente* o seu projeto começa?',
    options: [
      { t: 'Cozinha',      d: 'O coração da casa.' },
      { t: 'Closet',       d: 'Seu ritual diário.' },
      { t: 'Sala',         d: 'O encontro.' },
      { t: 'Área Gourmet', d: 'O receber.' },
    ],
  },
  {
    key: 'atmosfera',
    eyebrow: 'Pergunta 03 · A atmosfera',
    q: 'Que *paleta* traduz o seu gosto?',
    options: [
      { t: 'Madeira clara',    d: 'Calor escandinavo.' },
      { t: 'Mármore & Noir',   d: 'Contraste editorial.' },
      { t: 'Tons terrosos',    d: 'Orgânico, atemporal.' },
      { t: 'Champagne & linho', d: 'Luxo discreto.' },
    ],
  },
];
