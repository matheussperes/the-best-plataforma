import { useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Display } from '../../components/primitives/Display';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Button } from '../../components/primitives/Button';
import { BackBtn } from './BackBtn';
import { AMBIENTES } from '../../data/quizData';

// Imagens disponíveis por ambiente (public/)
const AMBIENTE_IMAGES: Record<string, string> = {
  cozinha:    '/assets/images/imgCozinha01.webp',
  closet:     '/assets/images/imgCloset01.webp',
  sala:       '/assets/images/imgSala01.webp',
  quarto:     '/assets/images/imgQuarto01.webp',
  banheiro:   '/assets/images/imgBanheiro01.jpg',
  escritorio: '/assets/images/imgEscritorio01.webp',
  gourmet:    '/assets/images/imgGourmet01.webp',
  lavanderia: '/assets/images/imgLavanderia01.webp',
  outro:      '',
};

interface AmbienteSelectionScreenProps {
  initialSelected: string[];
  onConfirm: (ambientesOrdenados: string[]) => void;
  onBack: () => void;
}

export function AmbienteSelectionScreen({
  initialSelected,
  onConfirm,
  onBack,
}: AmbienteSelectionScreenProps) {
  const isMobile = useIsMobile();
  const [selected, setSelected] = useState<string[]>(initialSelected);

  const toggle = (id: string) => {
    setSelected(prev =>
      prev.includes(id)
        ? prev.filter(s => s !== id)
        : [...prev, id]
    );
  };

  const toggleTodos = () => {
    if (selected.length === AMBIENTES.length) {
      setSelected([]);
    } else {
      setSelected(AMBIENTES.map(a => a.id));
    }
  };

  const todosSelected = selected.length === AMBIENTES.length;
  const canContinue = selected.length >= 1;

  return (
    <div style={{
      minHeight: '100dvh',
      background: 'var(--noir)',
      paddingBottom: 120, // espaço para o footer fixo
    }}>
      {/* Header */}
      <div style={{
        padding: isMobile ? '80px 24px 40px' : '80px 96px 48px',
        maxWidth: 1400, margin: '0 auto',
      }}>
        <Eyebrow style={{ marginBottom: 16 }}>
          O Construtor Emocional™ · Ambientes
        </Eyebrow>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          justifyContent: 'space-between',
          gap: 24,
        }}>
          <Display size={52} style={{ maxWidth: 640, lineHeight: 1.05 }}>
            Quais ambientes você *sonha* em transformar?
          </Display>

          <button
            onClick={toggleTodos}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: todosSelected ? 'var(--champagne)' : 'var(--pewter)',
              padding: 0, whiteSpace: 'nowrap', flexShrink: 0,
              transition: 'color 300ms var(--ease-lux)',
            }}
          >
            {todosSelected ? '✕ Desmarcar todos' : '+ Selecionar todos'}
          </button>
        </div>

        <p className="ds-body-sm" style={{ color: 'var(--pewter)', marginTop: 14 }}>
          A ordem em que você clicar define a sequência do seu briefing.
        </p>
      </div>

      {/* Grid de ambientes */}
      <div style={{
        padding: isMobile ? '0 16px' : '0 96px',
        maxWidth: 1400, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
        gap: isMobile ? 10 : 14,
      }}>
        {AMBIENTES.map((ambiente, idx) => {
          const isSelected = selected.includes(ambiente.id);
          const order = selected.indexOf(ambiente.id) + 1;
          const hasImage = Boolean(AMBIENTE_IMAGES[ambiente.id]);

          return (
            <button
              key={ambiente.id}
              onClick={() => toggle(ambiente.id)}
              style={{
                position: 'relative',
                aspectRatio: '3 / 4',
                overflow: 'hidden',
                cursor: 'pointer',
                border: `2px solid ${isSelected ? 'var(--champagne)' : 'transparent'}`,
                background: 'var(--antracite)',
                padding: 0,
                borderRadius: 0,
                transition: 'border-color 300ms var(--ease-lux)',
                outline: 'none',
              }}
              aria-pressed={isSelected}
              aria-label={ambiente.nomeEmocional}
            >
              {/* Imagem de fundo */}
              {hasImage && (
                <img
                  src={AMBIENTE_IMAGES[ambiente.id]}
                  alt=""
                  loading={idx < 6 ? 'eager' : 'lazy'}
                  style={{
                    position: 'absolute', inset: 0, width: '100%', height: '100%',
                    objectFit: 'cover',
                    filter: `saturate(.8) ${isSelected ? 'brightness(.7)' : 'brightness(.55)'}`,
                    transition: 'filter 400ms var(--ease-lux)',
                  }}
                />
              )}

              {/* Gradiente base */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(14,15,17,0) 30%, rgba(14,15,17,.85) 100%)',
              }} />

              {/* Overlay champagne quando selecionado */}
              {isSelected && (
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(191, 166, 122, 0.10)',
                }} />
              )}

              {/* Badge de ordem */}
              {isSelected && (
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  width: 28, height: 28, borderRadius: '50%',
                  background: 'var(--champagne)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 600,
                  color: 'var(--noir)',
                }}>
                  {order}
                </div>
              )}

              {/* Nome emocional */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: isMobile ? '16px 14px' : '20px 20px',
                textAlign: 'left',
              }}>
                <span style={{
                  fontFamily: 'var(--serif-display)', fontWeight: 300,
                  fontSize: isMobile ? 16 : 20, lineHeight: 1.2,
                  color: isSelected ? 'var(--champagne)' : 'var(--marfim)',
                  transition: 'color 300ms var(--ease-lux)',
                }}>
                  {ambiente.nomeEmocional}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer fixo */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        background: 'rgba(14, 15, 17, 0.95)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid var(--carvao)',
        padding: isMobile ? '16px 24px' : '20px 96px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <BackBtn inline onClick={onBack} />
          <span style={{
            fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: selected.length > 0 ? 'var(--champagne)' : 'var(--pewter)',
            transition: 'color 300ms var(--ease-lux)',
          }}>
            {selected.length === 0
              ? 'Nenhum selecionado'
              : `${selected.length} ambiente${selected.length > 1 ? 's' : ''} selecionado${selected.length > 1 ? 's' : ''}`
            }
          </span>
        </div>

        <Button
          onClick={() => canContinue && onConfirm(selected)}
          style={!canContinue ? { opacity: 0.35, pointerEvents: 'none' } : undefined}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}
