import { Eyebrow } from '../primitives/Eyebrow';

interface FooterColProps {
  title: string;
  items: string[];
  onNavigate?: (screen: string) => void;
}

const NAV_MAP: Record<string, string> = {
  'Início': 'home',
  'Portfólio': 'portfolio',
  'O Construtor': 'quiz',
};

export function FooterCol({ title, items, onNavigate }: FooterColProps) {
  return (
    <div>
      <Eyebrow style={{ color: 'var(--pewter)', marginBottom: 18 }}>{title}</Eyebrow>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map(it => (
          <button key={it} onClick={() => NAV_MAP[it] && onNavigate && onNavigate(NAV_MAP[it])} style={{
            background: 'none', border: 'none', textAlign: 'left', padding: 0,
            cursor: NAV_MAP[it] ? 'pointer' : 'default',
            fontFamily: 'var(--sans)', fontSize: 14,
            color: 'var(--marfim)', opacity: 0.82,
          }}>{it}</button>
        ))}
      </div>
    </div>
  );
}
