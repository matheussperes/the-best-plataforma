import type { ReactNode, CSSProperties } from 'react';

interface ButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'ghost';
  onClick?: () => void;
  style?: CSSProperties;
}

export function Button({ children, variant = 'primary', onClick, style }: ButtonProps) {
  const cls = variant === 'ghost' ? 'ds-btn ds-btn--ghost' : 'ds-btn';
  return <button className={cls} style={style} onClick={onClick}>{children}</button>;
}
