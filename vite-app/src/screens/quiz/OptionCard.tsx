import { useState } from 'react';
import type { QuizOption } from '../../data/quizSteps';

interface OptionCardProps {
  opt: QuizOption;
  selected: boolean;
  onClick: () => void;
}

export function OptionCard({ opt, selected, onClick }: OptionCardProps) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textAlign: 'left', cursor: 'pointer', padding: '22px 24px',
        background: selected ? 'var(--champagne-soft)' : 'var(--antracite)',
        border: `1px solid ${selected ? 'var(--champagne)' : (hover ? 'var(--pewter)' : 'var(--carvao)')}`,
        borderRadius: 0,
        transition: 'all var(--dur-hover) var(--ease-lux)',
        display: 'flex', flexDirection: 'column', gap: 7,
        width: '100%',
      }}
    >
      <span style={{
        fontFamily: 'var(--serif-display)', fontWeight: 300, fontSize: 26,
        lineHeight: 1,
        color: selected ? 'var(--champagne)' : 'var(--marfim)',
      }}>{opt.t}</span>
      <span className="ds-body-sm" style={{ color: 'var(--pewter)' }}>{opt.d}</span>
    </button>
  );
}
