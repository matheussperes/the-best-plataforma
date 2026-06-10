interface ProgressBarProps {
  index: number;
  total: number;
}

export function ProgressBar({ index, total }: ProgressBarProps) {
  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 36 }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          height: 2, flex: 1,
          background: i <= index ? 'var(--champagne)' : 'var(--carvao)',
          transition: 'background 600ms var(--ease-lux)',
        }} />
      ))}
    </div>
  );
}
