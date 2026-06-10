import React from 'react';
import type { ReactNode, CSSProperties } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

interface DisplayProps {
  children?: ReactNode;
  size?: number;
  color?: string;
  style?: CSSProperties;
}

function flatten(node: ReactNode): string {
  if (node == null || node === false || node === true) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(flatten).join('');
  if (typeof node === 'object' && node !== null && 'props' in node) {
    const el = node as React.ReactElement<{ children?: ReactNode }>;
    return flatten(el.props.children);
  }
  return '';
}

function renderLine(line: string, lineIdx: number) {
  return line.split(/(\*[^*]+\*)/g).filter(Boolean).map((part, i) =>
    part.startsWith('*') && part.endsWith('*')
      ? <em key={`${lineIdx}-${i}`} style={{ fontStyle: 'italic', color: 'var(--champagne)' }}>{part.slice(1, -1)}</em>
      : <span key={`${lineIdx}-${i}`}>{part}</span>
  );
}

export function Display({ size = 64, children, color = 'var(--marfim)', style }: DisplayProps) {
  const isMobile = useIsMobile();
  const effectiveSize = isMobile ? Math.min(size, 48) : size;
  const text = flatten(children);
  const lines = text.split('\n');

  return (
    <h1 style={{
      fontFamily: 'var(--serif-display)',
      fontWeight: 300,
      fontSize: effectiveSize,
      lineHeight: effectiveSize > 90 ? 0.92 : 1.05,
      letterSpacing: '-0.01em',
      color,
      margin: 0,
      textWrap: 'balance' as CSSProperties['textWrap'],
      ...style,
    }}>
      {lines.map((line, li) => (
        <React.Fragment key={li}>
          {li > 0 && <br />}
          {renderLine(line, li)}
        </React.Fragment>
      ))}
    </h1>
  );
}
