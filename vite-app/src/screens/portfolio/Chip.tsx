import { useIsMobile } from '../../hooks/useIsMobile';

interface ChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function Chip({ label, active, onClick }: ChipProps) {
  const isMobile = useIsMobile();
  return (
    <button onClick={onClick} style={{
      background: active ? 'var(--champagne)' : 'transparent',
      color: active ? 'var(--noir)' : 'var(--marfim)',
      border: `1px solid ${active ? 'var(--champagne)' : 'var(--carvao)'}`,
      borderRadius: 0,
      padding: isMobile ? '10px 16px' : '11px 22px',
      cursor: 'pointer',
      fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 500,
      letterSpacing: '0.16em', textTransform: 'uppercase',
      transition: 'all var(--dur-hover) var(--ease-lux)',
    }}>{label}</button>
  );
}
