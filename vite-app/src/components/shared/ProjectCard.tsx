import { useState } from 'react';
import { Eyebrow } from '../primitives/Eyebrow';

interface ProjectCardProps {
  img: string;
  amb: string;
  ttl: string;
  local?: string;
  tall?: boolean;
  square?: boolean;
  h?: number;
  onClick?: () => void;
}

export function ProjectCard({ img, amb, ttl, square = false, h, onClick }: ProjectCardProps) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        cursor: 'pointer', overflow: 'hidden', position: 'relative',
        height: square ? 'auto' : (h ?? 'auto'),
        aspectRatio: square ? '1 / 1' : undefined,
        background: 'var(--antracite)',
      }}
    >
      <img src={img} alt="" style={{
        width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.9)',
        transform: hover ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 700ms var(--ease-lux)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, transparent 45%, rgba(14,15,17,.82) 100%)',
      }} />
      <div style={{ position: 'absolute', left: 24, bottom: 22, right: 24 }}>
        <Eyebrow>{amb}</Eyebrow>
        <div style={{
          fontFamily: 'var(--serif-display)', fontWeight: 300, fontSize: 26,
          color: 'var(--marfim)', marginTop: 7, lineHeight: 1.05,
        }}>{ttl}</div>
      </div>
    </div>
  );
}
