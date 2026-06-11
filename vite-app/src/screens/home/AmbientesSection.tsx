import { useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Display } from '../../components/primitives/Display';
import { Button } from '../../components/primitives/Button';
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
const TODOS_IDS = AMBIENTES.map(a => a.id);

export function AmbientesSection({ onNavigate }: AmbientesSectionProps) {
  const isMobile = useIsMobile();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [hoveredId, setHoveredId]     = useState<string | null>(null);

  const toggle = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const toggleTodos = () => {
    setSelectedIds(prev =>
      prev.length === TODOS_IDS.length ? [] : TODOS_IDS
    );
  };

  const handleContinuar = () => {
    if (selectedIds.length === 0) return;
    // Persiste a seleção para QuizScreen iniciar direto na Tela 3 (LoopScreen)
    // QuizScreen lê quiz_home_selecao nos lazy initializers (leitura sem side-effect)
    // Outros pontos de entrada do quiz (Hero, Nav, etc.) limpam esta chave antes de navegar
    sessionStorage.setItem('quiz_home_selecao', JSON.stringify({ ambientesOrdenados: selectedIds }));
    onNavigate('quiz');
  };

  const todosSelected = selectedIds.length === TODOS_IDS.length;
  const canContinue   = selectedIds.length > 0;

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
        <div style={{ flexShrink: 0, width: isMobile ? '100%' : 260 }}>
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
              marginBottom: 14,
            }}>
              <Display size={isMobile ? 28 : 36} style={{ lineHeight: 1.15 }}>
                Quais ambientes você *sonha* em transformar?
              </Display>
              <button
                onClick={toggleTodos}
                style={{
                  flexShrink: 0,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--sans)',
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: todosSelected ? 'var(--champagne)' : 'var(--pewter)',
                  padding: 0,
                  whiteSpace: 'nowrap',
                  transition: 'color 300ms var(--ease-lux)',
                }}
              >
                {todosSelected ? '✕ Desmarcar todos' : '+ Selecionar todos'}
              </button>
            </div>
            <p style={{
              fontFamily: 'var(--sans)',
              fontSize: 13,
              color: 'var(--pewter)',
              margin: '0 0 20px',
              lineHeight: 1.6,
            }}>
              A ordem em que você clicar define a sequência do seu briefing.
            </p>
          </Reveal>

          {/* Grid 4×2 — ambientes principais */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? 10 : 8,
          }}>
            {PRINCIPAIS.map((amb, i) => {
              const image      = AMBIENTE_IMAGE[amb.id] ?? null;
              const frase      = HOVER_FRASE[amb.id];
              const isSelected = selectedIds.includes(amb.id);
              const order      = selectedIds.indexOf(amb.id) + 1;
              const isHovered  = hoveredId === amb.id && !isSelected;

              return (
                <Reveal key={amb.id} delay={i * 40}>
                  <button
                    onClick={() => toggle(amb.id)}
                    onMouseEnter={() => setHoveredId(amb.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    aria-pressed={isSelected}
                    aria-label={amb.nomeEmocional}
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: isMobile ? 200 : 190,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: `2px solid ${isSelected ? 'var(--champagne)' : 'transparent'}`,
                      background: 'var(--antracite)',
                      padding: 0,
                      borderRadius: 0,
                      transition: 'border-color 300ms var(--ease-lux)',
                      outline: 'none',
                    }}
                  >
                    {/* Imagem */}
                    {image && (
                      <img
                        src={image}
                        alt=""
                        loading={i < 4 ? 'eager' : 'lazy'}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: `saturate(.8) ${isSelected ? 'brightness(.7)' : 'brightness(.55)'}`,
                          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                          transition: 'filter 400ms var(--ease-lux), transform 700ms var(--ease-lux)',
                        }}
                      />
                    )}

                    {/* Gradiente base */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(14,15,17,0) 30%, rgba(14,15,17,.85) 100%)',
                    }} />

                    {/* Overlay champagne quando selecionado */}
                    {isSelected && (
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(191,166,122,0.10)',
                      }} />
                    )}

                    {/* Overlay hover com frase emocional (apenas não-selecionado) */}
                    {!isSelected && (
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(14,15,17,0.72)',
                        opacity: isHovered ? 1 : 0,
                        transition: 'opacity 380ms var(--ease-lux)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 16,
                      }}>
                        <p style={{
                          fontFamily: 'var(--serif-display)',
                          fontWeight: 300,
                          fontStyle: 'italic',
                          fontSize: 15,
                          color: 'var(--champagne)',
                          textAlign: 'center',
                          lineHeight: 1.45,
                          transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
                          transition: 'transform 420ms var(--ease-lux)',
                          margin: 0,
                        }}>
                          {frase}
                        </p>
                      </div>
                    )}

                    {/* Badge de ordem quando selecionado */}
                    {isSelected && (
                      <div style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        width: 26,
                        height: 26,
                        borderRadius: '50%',
                        background: 'var(--champagne)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--sans)',
                        fontSize: 11,
                        fontWeight: 600,
                        color: 'var(--noir)',
                      }}>
                        {order}
                      </div>
                    )}

                    {/* Nome emocional */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '12px 14px',
                      textAlign: 'left',
                    }}>
                      <span style={{
                        fontFamily: 'var(--serif-display)',
                        fontWeight: 300,
                        fontSize: isMobile ? 14 : 16,
                        lineHeight: 1.2,
                        color: isSelected ? 'var(--champagne)' : 'var(--marfim)',
                        transition: 'color 300ms var(--ease-lux)',
                      }}>
                        {amb.nomeEmocional}
                      </span>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Card "Outro" — largura total */}
          <Reveal delay={360}>
            {(() => {
              const isSelected = selectedIds.includes(OUTRO.id);
              const order      = selectedIds.indexOf(OUTRO.id) + 1;
              const isHovered  = hoveredId === OUTRO.id && !isSelected;
              return (
                <button
                  onClick={() => toggle(OUTRO.id)}
                  onMouseEnter={() => setHoveredId(OUTRO.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  aria-pressed={isSelected}
                  aria-label={OUTRO.nomeEmocional}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 16,
                    width: '100%',
                    marginTop: 8,
                    height: 64,
                    background: isSelected ? 'rgba(191,166,122,0.08)' : (isHovered ? 'var(--antracite)' : '#111316'),
                    border: `2px solid ${isSelected ? 'var(--champagne)' : 'transparent'}`,
                    cursor: 'pointer',
                    padding: 0,
                    borderRadius: 0,
                    outline: 'none',
                    position: 'relative',
                    transition: 'background 300ms var(--ease-lux), border-color 300ms var(--ease-lux)',
                  }}
                >
                  {isSelected && (
                    <div style={{
                      position: 'absolute',
                      top: 8,
                      right: 10,
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: 'var(--champagne)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--sans)',
                      fontSize: 10,
                      fontWeight: 600,
                      color: 'var(--noir)',
                    }}>
                      {order}
                    </div>
                  )}
                  <span style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: isSelected ? 'var(--champagne)' : (isHovered ? 'var(--marfim)' : 'var(--pewter)'),
                    transition: 'color 300ms var(--ease-lux)',
                  }}>
                    Outro Ambiente
                  </span>
                  <span style={{
                    fontFamily: 'var(--serif-display)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    fontSize: 14,
                    color: isSelected ? 'var(--champagne)' : 'var(--pewter)',
                    opacity: (isSelected || isHovered) ? 1 : 0.5,
                    transition: 'color 300ms var(--ease-lux), opacity 300ms var(--ease-lux)',
                  }}>
                    {isSelected
                      ? HOVER_FRASE.outro
                      : '— o espaço que existe só na sua cabeça'}
                  </span>
                </button>
              );
            })()}
          </Reveal>

          {/* Rodapé da seção: contagem + Continuar */}
          <div style={{
            marginTop: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 16,
            opacity: canContinue ? 1 : 0,
            transform: canContinue ? 'translateY(0)' : 'translateY(8px)',
            pointerEvents: canContinue ? 'auto' : 'none',
            transition: 'opacity 400ms var(--ease-lux), transform 400ms var(--ease-lux)',
          }}>
            <span style={{
              fontFamily: 'var(--sans)',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--champagne)',
            }}>
              {selectedIds.length === 1
                ? '1 ambiente selecionado'
                : `${selectedIds.length} ambientes selecionados`}
            </span>
            <Button
              onClick={handleContinuar}
              style={isMobile ? { width: '100%', padding: '18px 24px' } : undefined}
            >
              Continuar
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
