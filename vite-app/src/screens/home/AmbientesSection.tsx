import { useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Display } from '../../components/primitives/Display';
import { Reveal } from '../../components/shared/Reveal';
import { AMBIENTES } from '../../data/quizData';
import imgCozinha01 from '/assets/images/imgCozinha01.webp';
import imgCloset01 from '/assets/images/imgCloset01.webp';
import imgSala01 from '/assets/images/imgSala01.webp';
import imgQuarto01 from '/assets/images/imgQuarto01.webp';
import imgBanheiro01 from '/assets/images/imgBanheiro01.jpg';
import imgEscritorio01 from '/assets/images/imgEscritorio01.webp';
import imgGourmet01 from '/assets/images/imgGourmet01.webp';
import imgLavanderia01 from '/assets/images/imgLavanderia01.webp';

interface AmbientesSectionProps {
  onNavigate: (screen: string) => void;
}

const AMBIENTE_IMAGE: Record<string, string | null> = {
  cozinha:    imgCozinha01,
  closet:     imgCloset01,
  sala:       imgSala01,
  quarto:     imgQuarto01,
  banheiro:   imgBanheiro01,
  escritorio: imgEscritorio01,
  gourmet:    imgGourmet01,
  lavanderia: imgLavanderia01,
  outro:      null,
};

const HOVER_FRASE: Record<string, string> = {
  cozinha:    'Imagine os jantares de domingo aqui.',
  closet:     'Imagine começar o dia neste silêncio.',
  sala:       'Imagine seus amigos celebrando aqui.',
  quarto:     'Imagine acordar assim todos os dias.',
  banheiro:   'Imagine este silêncio às 6h da manhã.',
  escritorio: 'Imagine criar aqui, sem interrupções.',
  gourmet:    'Imagine o cheiro do churrasco no domingo.',
  lavanderia: 'Imagine uma rotina mais leve aqui.',
  outro:      'Imagine o espaço que ainda está na sua cabeça.',
};

const PRINCIPAIS = AMBIENTES.filter(a => a.id !== 'outro');
const OUTRO = AMBIENTES.find(a => a.id === 'outro')!;

function navigateToQuiz(ambienteId: string | null, onNavigate: (s: string) => void) {
  // Hook para futura pré-seleção — QuizScreen lê quiz_ambiente_preselecao (Sessão 12+)
  if (ambienteId) {
    sessionStorage.setItem('quiz_ambiente_preselecao', ambienteId);
  } else {
    sessionStorage.removeItem('quiz_ambiente_preselecao');
  }
  onNavigate('quiz');
}

export function AmbientesSection({ onNavigate }: AmbientesSectionProps) {
  const isMobile = useIsMobile();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const cardHeight = isMobile ? 200 : 190;

  return (
    <section style={{
      background: 'var(--noir)',
      padding: isMobile ? '80px 24px' : '200px 120px',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 48 : 72,
        alignItems: 'flex-start',
      }}>

        {/* ── Coluna esquerda — contexto ── */}
        <div style={{
          flexShrink: 0,
          width: isMobile ? '100%' : 260,
        }}>
          <Reveal>
            <Eyebrow style={{ marginBottom: 24 }}>O Construtor Emocional™</Eyebrow>
            <Display size={isMobile ? 40 : 52} style={{ lineHeight: 1.1 }}>
              Vamos *imaginar* juntos?
            </Display>
          </Reveal>
          <Reveal delay={120}>
            <p style={{
              fontFamily: 'var(--sans)',
              fontSize: 15,
              color: 'var(--pewter)',
              lineHeight: 1.7,
              margin: '28px 0 0',
            }}>
              Clique no ambiente que você quer transformar. Em minutos, nosso sistema irá
              construir um retrato do espaço ideal para sua rotina.
            </p>
          </Reveal>
        </div>

        {/* ── Coluna direita — seleção ── */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Cabeçalho do grid */}
          <Reveal>
            <div style={{
              display: 'flex',
              alignItems: isMobile ? 'flex-start' : 'flex-end',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              gap: 16,
              marginBottom: 20,
            }}>
              <Display size={isMobile ? 28 : 36} style={{ lineHeight: 1.15 }}>
                Quais ambientes você *sonha* em transformar?
              </Display>
              <button
                onClick={() => navigateToQuiz(null, onNavigate)}
                style={{
                  flexShrink: 0,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--sans)',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--champagne)',
                  paddingBottom: 4,
                  borderBottom: '1px solid var(--champagne)',
                  whiteSpace: 'nowrap',
                }}
              >
                Selecionar todos →
              </button>
            </div>
            <p style={{
              fontFamily: 'var(--sans)',
              fontSize: 13,
              color: 'var(--pewter)',
              margin: '0 0 24px',
              lineHeight: 1.6,
            }}>
              A sessão em que você define a sequência do seu briefing.
            </p>
          </Reveal>

          {/* Grid 4×2 — ambientes principais */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: 8,
          }}>
            {PRINCIPAIS.map((amb, i) => {
              const image = AMBIENTE_IMAGE[amb.id] ?? null;
              const frase = HOVER_FRASE[amb.id];
              const hovered = hoveredId === amb.id;

              return (
                <Reveal key={amb.id} delay={i * 40}>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => navigateToQuiz(amb.id, onNavigate)}
                    onKeyDown={e => e.key === 'Enter' && navigateToQuiz(amb.id, onNavigate)}
                    onMouseEnter={() => setHoveredId(amb.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{
                      position: 'relative',
                      height: cardHeight,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      background: 'var(--antracite)',
                      outline: 'none',
                    }}
                  >
                    {/* Imagem */}
                    {image && (
                      <img
                        src={image}
                        alt={amb.nomeSimples}
                        loading={i < 4 ? 'eager' : 'lazy'}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transform: hovered ? 'scale(1.06)' : 'scale(1)',
                          transition: 'transform 700ms var(--ease-lux)',
                        }}
                      />
                    )}

                    {/* Gradiente permanente */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)',
                    }} />

                    {/* Overlay hover com frase emocional */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(14,15,17,0.75)',
                      opacity: hovered ? 1 : 0,
                      transition: 'opacity 380ms var(--ease-lux)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 20,
                    }}>
                      <p style={{
                        fontFamily: 'var(--serif-display)',
                        fontWeight: 300,
                        fontStyle: 'italic',
                        fontSize: 16,
                        color: 'var(--champagne)',
                        textAlign: 'center',
                        lineHeight: 1.45,
                        transform: hovered ? 'translateY(0)' : 'translateY(8px)',
                        transition: 'transform 420ms var(--ease-lux)',
                        margin: 0,
                      }}>
                        {frase}
                      </p>
                    </div>

                    {/* Nome — visível sem hover */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '14px 16px',
                      opacity: hovered ? 0 : 1,
                      transition: 'opacity 280ms var(--ease-lux)',
                    }}>
                      <p style={{
                        fontFamily: 'var(--sans)',
                        fontSize: 9,
                        fontWeight: 600,
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: 'var(--champagne)',
                        margin: '0 0 5px',
                      }}>
                        {amb.nomeSimples}
                      </p>
                      <p style={{
                        fontFamily: 'var(--serif-display)',
                        fontWeight: 300,
                        fontSize: 16,
                        color: 'var(--marfim)',
                        lineHeight: 1.2,
                        margin: 0,
                      }}>
                        {amb.nomeEmocional}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Card "Outro" — largura total, fundo plano */}
          <Reveal delay={360}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => navigateToQuiz(OUTRO.id, onNavigate)}
              onKeyDown={e => e.key === 'Enter' && navigateToQuiz(OUTRO.id, onNavigate)}
              onMouseEnter={() => setHoveredId(OUTRO.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                marginTop: 8,
                height: 72,
                background: hoveredId === OUTRO.id ? 'var(--antracite)' : '#111316',
                border: '1px solid var(--carvao)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                transition: 'background 300ms var(--ease-lux)',
                outline: 'none',
              }}
            >
              <span style={{
                fontFamily: 'var(--sans)',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: hoveredId === OUTRO.id ? 'var(--champagne)' : 'var(--pewter)',
                transition: 'color 300ms var(--ease-lux)',
              }}>
                Outro Ambiente
              </span>
              <span style={{
                fontFamily: 'var(--serif-display)',
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: 15,
                color: hoveredId === OUTRO.id ? 'var(--champagne)' : 'var(--pewter)',
                transition: 'color 300ms var(--ease-lux)',
                opacity: hoveredId === OUTRO.id ? 1 : 0.6,
              }}>
                {hoveredId === OUTRO.id ? HOVER_FRASE.outro : '— o espaço que existe só na sua cabeça'}
              </span>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
