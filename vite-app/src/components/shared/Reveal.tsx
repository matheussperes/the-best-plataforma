import type { ReactNode, CSSProperties } from 'react';

interface RevealProps {
  children?: ReactNode;
  delay?: number;
  style?: CSSProperties;
}

export function Reveal({ children, delay = 0, style }: RevealProps) {
  return (
    <div style={{ animation: `revealUp 900ms var(--ease-lux) ${delay}ms both`, ...style }}>
      {children}
    </div>
  );
}
