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

function handleCardClick(ambienteId: string, onNavigate: (s: string) => void) {
  // Hook para futura integração: persiste o ambiente de origem para pré-seleção no Quiz.
  // QuizScreen lerá sessionStorage.getItem('quiz_ambiente_preselecao') quando implementado (Sessão 12+).
  sessionStorage.setItem('quiz_ambiente_preselecao', ambienteId);
  onNavigate('quiz');
}

export function AmbientesSection({ onNavigate }: AmbientesSectionProps) {
  const isMobile = useIsMobile();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const pad = isMobile ? '80px 24px' : '200px 120px';
  const cardHeight = isMobile ? 260 : 340;
  const cols = isMobile ? '1fr' : 'repeat(3, 1fr)';

  return (
    <section style={{ background: 'var(--noir)', padding: pad }}>
      <Reveal>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 72 }}>
          <Eyebrow style={{ marginBottom: 20 }}>Ambientes</Eyebrow>
          <Display size={isMobile ? 40 : 64}>
            O espaço certo para cada *versão* de você.
          </Display>
        </div>
      </Reveal>

      <div style={{
        display: 'grid',
        gridTemplateColumns: cols,
        gap: isMobile ? 12 : 16,
      }}>
        {AMBIENTES.map((amb, i) => {
          const image = AMBIENTE_IMAGE[amb.id] ?? null;
          const frase = HOVER_FRASE[amb.id];
          const hovered = hoveredId === amb.id;

          return (
            <Reveal key={amb.id} delay={i * 60}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleCardClick(amb.id, onNavigate)}
                onKeyDown={e => e.key === 'Enter' && handleCardClick(amb.id, onNavigate)}
                onMouseEnter={() => setHoveredId(amb.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  position: 'relative',
                  height: cardHeight,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: image ? 'var(--antracite)' : 'var(--antracite)',
                  border: '1px solid var(--carvao)',
                  outline: 'none',
                }}
              >
                {/* Imagem de fundo */}
                {image && (
                  <img
                    src={image}
                    alt={amb.nomeSimples}
                    loading={i < 3 ? 'eager' : 'lazy'}
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

                {/* "Outro" sem imagem: símbolo central */}
                {!image && !hovered && (
                  <div style={{
                    position: 'absolute',
                    top: '38%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--serif-display)',
                      fontSize: 64,
                      fontWeight: 300,
                      color: 'var(--pewter)',
                      lineHeight: 1,
                    }}>+</span>
                  </div>
                )}

                {/* Gradiente permanente no rodapé do card */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)',
                }} />

                {/* Overlay de hover com frase emocional */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(14, 15, 17, 0.72)',
                  opacity: hovered ? 1 : 0,
                  transition: 'opacity 400ms var(--ease-lux)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '32px',
                }}>
                  <p style={{
                    fontFamily: 'var(--serif-display)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    fontSize: isMobile ? 20 : 24,
                    color: 'var(--champagne)',
                    textAlign: 'center',
                    lineHeight: 1.45,
                    transform: hovered ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'transform 450ms var(--ease-lux)',
                    margin: 0,
                  }}>
                    {frase}
                  </p>
                </div>

                {/* Nome do ambiente — visível quando não está em hover */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: isMobile ? '20px' : '28px',
                  opacity: hovered ? 0 : 1,
                  transform: hovered ? 'translateY(4px)' : 'translateY(0)',
                  transition: 'opacity 300ms var(--ease-lux), transform 300ms var(--ease-lux)',
                }}>
                  <p style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '0.32em',
                    textTransform: 'uppercase',
                    color: 'var(--champagne)',
                    margin: '0 0 8px',
                  }}>
                    {amb.nomeSimples}
                  </p>
                  <p style={{
                    fontFamily: 'var(--serif-display)',
                    fontWeight: 300,
                    fontSize: isMobile ? 18 : 22,
                    color: 'var(--marfim)',
                    lineHeight: 1.25,
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

      {/* CTA abaixo do grid */}
      <Reveal delay={200}>
        <div style={{ textAlign: 'center', marginTop: isMobile ? 48 : 72 }}>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: 14,
            color: 'var(--pewter)',
            marginBottom: 28,
            letterSpacing: '0.02em',
          }}>
            Clique no ambiente que você quer transformar.
          </p>
          <button
            onClick={() => { sessionStorage.removeItem('quiz_ambiente_preselecao'); onNavigate('quiz'); }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--sans)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--champagne)',
              paddingBottom: 6,
              borderBottom: '1px solid var(--champagne)',
            }}
          >
            Ou começar sem escolher →
          </button>
        </div>
      </Reveal>
    </section>
  );
}
