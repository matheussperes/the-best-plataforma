import { useIsMobile } from '../../hooks/useIsMobile';
import { Display } from '../../components/primitives/Display';
import { Button } from '../../components/primitives/Button';

interface ConclusaoScreenProps {
  nomeEmocional: string;
  image: string;
  ambienteAtual: number;
  totalAmbientes: number;
  proximoNomeEmocional?: string;
  onNext: () => void;
  onRevisar: () => void;
}

export function ConclusaoScreen({
  nomeEmocional,
  image,
  ambienteAtual,
  totalAmbientes,
  proximoNomeEmocional,
  onNext,
  onRevisar,
}: ConclusaoScreenProps) {
  const isMobile = useIsMobile();
  const isLast = !proximoNomeEmocional;

  return (
    <div style={{
      position: 'relative', minHeight: '100dvh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', background: 'var(--noir)',
    }}>
      {image && (
        <img
          src={image}
          alt=""
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', filter: 'saturate(.75) brightness(.4)',
          }}
        />
      )}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(14,15,17,.25) 0%, rgba(14,15,17,.85) 100%)',
      }} />

      <div style={{
        position: 'absolute', top: isMobile ? 24 : 36, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', gap: 8,
      }}>
        {Array.from({ length: totalAmbientes }).map((_, i) => (
          <div key={i} style={{
            width: i === ambienteAtual ? 28 : 8, height: 2,
            background: i <= ambienteAtual ? 'var(--champagne)' : 'rgba(191,166,122,.3)',
            transition: 'all 500ms var(--ease-lux)',
          }} />
        ))}
      </div>

      <div style={{
        position: 'relative',
        textAlign: 'center',
        padding: isMobile ? '80px 24px 60px' : '40px 48px',
        maxWidth: 720,
        animation: 'fadeUp 700ms var(--ease-lux)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 500,
          letterSpacing: '0.24em', textTransform: 'uppercase',
          color: 'var(--champagne)', marginBottom: 28,
        }}>
          Ambiente {ambienteAtual + 1} de {totalAmbientes}
        </div>

        <Display size={56} style={{ lineHeight: 1.05 }}>
          {`*${nomeEmocional}*\nestá tomando forma.`}
        </Display>

        <div style={{
          marginTop: 48,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 14,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Button onClick={onNext} style={isMobile ? { padding: '18px 24px', width: '100%' } : undefined}>
            {isLast
              ? 'Continuar para seus dados →'
              : `Próximo ambiente → ${proximoNomeEmocional}`
            }
          </Button>

          <button
            onClick={onRevisar}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 500,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--pewter)', padding: 0,
            }}
          >
            ← Revisar
          </button>
        </div>
      </div>
    </div>
  );
}
