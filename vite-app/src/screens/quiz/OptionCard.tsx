import { useState } from 'react';
import type { QuizOption } from '../../data/quizData';

interface OptionCardProps {
  opt: QuizOption;
  selected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export function OptionCard({ opt, selected, onClick, disabled = false }: OptionCardProps) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => !disabled && setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textAlign: 'left', cursor: disabled ? 'default' : 'pointer', padding: '22px 24px',
        background: selected ? 'var(--champagne-soft)' : 'var(--antracite)',
        border: `1px solid ${selected ? 'var(--champagne)' : (hover && !disabled ? 'var(--pewter)' : 'var(--carvao)')}`,
        borderRadius: 0, opacity: disabled ? 0.38 : 1,
        transition: 'all var(--dur-hover) var(--ease-lux)',
        display: 'flex', flexDirection: 'column', gap: 7,
        width: '100%',
      }}
    >
      <span style={{
        fontFamily: 'var(--serif-display)', fontWeight: 300, fontSize: 26,
        lineHeight: 1,
        color: selected ? 'var(--champagne)' : 'var(--marfim)',
      }}>{opt.label}</span>
      {opt.descricao && (
        <span className="ds-body-sm" style={{ color: 'var(--pewter)' }}>{opt.descricao}</span>
      )}
    </button>
  );
}
