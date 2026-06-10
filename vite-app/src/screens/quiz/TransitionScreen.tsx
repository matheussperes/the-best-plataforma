import { useEffect, useRef } from 'react';
import { Display } from '../../components/primitives/Display';
import { BackBtn } from './BackBtn';

const AUTO_ADVANCE_MS = 2500;

interface TransitionScreenProps {
  nomeEmocional: string;
  image: string;
  onNext: () => void;
  onBack: () => void;
}

export function TransitionScreen({ nomeEmocional, image, onNext, onBack }: TransitionScreenProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(onNext, AUTO_ADVANCE_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [onNext]);

  const handleNext = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    onNext();
  };

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
            objectFit: 'cover', filter: 'saturate(.75) brightness(.45)',
          }}
        />
      )}

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(14,15,17,.2) 0%, rgba(14,15,17,.8) 100%)',
      }} />

      <div style={{
        position: 'relative', textAlign: 'center', padding: '40px 32px',
        maxWidth: 700, animation: 'fadeUp 700ms var(--ease-lux)',
      }}>
        <Display size={72} style={{ lineHeight: 1.0 }}>
          {`Sua\n*${nomeEmocional}*.`}
        </Display>

        <p className="ds-body-lg" style={{ color: 'var(--pewter)', marginTop: 20 }}>
          Vamos imaginá-la juntos.
        </p>

        <button
          onClick={handleNext}
          style={{
            marginTop: 48,
            background: 'none', border: '1px solid var(--champagne)', cursor: 'pointer',
            fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--champagne)', padding: '14px 32px',
            transition: 'all 400ms var(--ease-lux)',
          }}
        >
          Começar a sonhar →
        </button>
      </div>

      <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}>
        <BackBtn inline onClick={onBack} />
      </div>
    </div>
  );
}
