import type { CSSProperties } from 'react';

interface RuleProps {
  w?: number;
  style?: CSSProperties;
}

export function Rule({ w = 120, style }: RuleProps) {
  return <div style={{ height: 1, width: w, background: 'var(--champagne)', ...style }} />;
}
