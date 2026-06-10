import { useEffect, useRef } from 'react';

const LOADER_DURATION_MS = 2800;

interface LoaderScreenProps {
  onComplete: () => void;
}

export function LoaderScreen({ onComplete }: LoaderScreenProps) {
  // useRef evita que a mudança de referência do callback reative o timer
  const cbRef = useRef(onComplete);
  cbRef.current = onComplete;

  useEffect(() => {
    const timer = setTimeout(() => cbRef.current(), LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      minHeight: '100dvh', background: 'var(--noir)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 32, padding: '40px 24px',
    }}>
      <style>{`
        @keyframes loader-bar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes loader-pulse {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 1; }
        }
        @keyframes loader-line {
          0%   { transform: translateX(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>

      {/* Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        border: '1px solid var(--carvao)', padding: '8px 14px',
      }}>
        <span style={{ width: 4, height: 4, background: 'var(--champagne)', borderRadius: '50%' }} />
        <span style={{
          fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.24em',
          textTransform: 'uppercase', color: 'var(--champagne)',
        }}>
          O Construtor Emocional™
        </span>
      </div>

      {/* Linhas decorativas animadas */}
      <div style={{ position: 'relative', width: 240, height: 40, overflow: 'hidden' }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            position: 'absolute',
            left: 0, right: 0,
            top: i * 14,
            height: 1,
            background: `linear-gradient(90deg, transparent, var(--champagne), transparent)`,
            opacity: 0,
            animation: `loader-line ${1.6 + i * 0.4}s ${i * 0.35}s ease-in-out infinite`,
          }} />
        ))}
      </div>

      {/* Texto pulsante */}
      <p style={{
        fontFamily: 'var(--serif-display)', fontWeight: 300, fontStyle: 'italic',
        fontSize: 22, color: 'var(--marfim)', textAlign: 'center', margin: 0,
        animation: 'loader-pulse 2s ease infinite',
      }}>
        Estamos desenhando o seu perfil...
      </p>

      {/* Barra de progresso */}
      <div style={{
        width: 200, height: 1,
        background: 'var(--carvao)',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          background: 'var(--champagne)',
          transformOrigin: 'left center',
          animation: `loader-bar ${LOADER_DURATION_MS}ms cubic-bezier(0.16,1,0.3,1) forwards`,
        }} />
      </div>
    </div>
  );
}
