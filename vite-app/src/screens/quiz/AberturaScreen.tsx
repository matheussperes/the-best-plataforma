import { useIsMobile } from '../../hooks/useIsMobile';
import { Display } from '../../components/primitives/Display';
import { Button } from '../../components/primitives/Button';

interface AberturaScreenProps {
  onStart: () => void;
}

const BADGE = (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 8,
    border: '1px solid var(--champagne)', padding: '8px 14px', marginBottom: 40,
  }}>
    <span style={{ width: 4, height: 4, background: 'var(--champagne)', borderRadius: '50%' }} />
    <span style={{
      fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.24em',
      textTransform: 'uppercase', color: 'var(--champagne)',
    }}>
      O Construtor Emocional™
    </span>
  </div>
);

export function AberturaScreen({ onStart }: AberturaScreenProps) {
  const isMobile = useIsMobile();

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '440px 1fr',
      minHeight: '100dvh',
      background: 'var(--noir)',
    }}>
      {/* Painel editorial — apenas desktop */}
      {!isMobile && (
        <aside style={{
          position: 'relative', overflow: 'hidden',
          borderRight: '1px solid var(--carvao)',
        }}>
          <img
            src="/assets/images/imgCozinha01.webp"
            alt=""
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', filter: 'saturate(.8)',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(14,15,17,.45) 0%, rgba(14,15,17,.88) 100%)',
          }} />
          <div style={{
            position: 'relative', padding: '120px 48px', height: '100%',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            boxSizing: 'border-box',
          }}>
            <p className="ds-body-sm" style={{ color: 'var(--pewter)', lineHeight: 1.8 }}>
              Em 8 minutos, você nos conta<br />como quer viver. Nós cuidamos do resto.
            </p>
          </div>
        </aside>
      )}

      {/* Área de conteúdo */}
      <main style={{
        padding: isMobile ? '100px 24px 60px' : '0 96px',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{ width: '100%', maxWidth: 560 }}>
          {BADGE}

          <Display size={64} style={{ lineHeight: 1.05 }}>
            Vamos *imaginar* juntos?
          </Display>

          <p className="ds-body-lg" style={{
            color: 'var(--pewter)', marginTop: 24,
          }}>
            Em 8 minutos, você nos conta como quer viver.<br />Nós cuidamos do resto.
          </p>

          <div style={{ marginTop: 48 }}>
            <Button onClick={onStart}>Começar</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
