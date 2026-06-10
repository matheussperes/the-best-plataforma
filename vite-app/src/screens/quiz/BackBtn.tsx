interface BackBtnProps {
  onClick: () => void;
  inline?: boolean;
}

export function BackBtn({ onClick, inline = false }: BackBtnProps) {
  return (
    <button onClick={onClick} style={{
      marginTop: inline ? 0 : 32,
      background: 'none', border: 'none', cursor: 'pointer',
      fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 500,
      letterSpacing: '0.14em', textTransform: 'uppercase',
      color: 'var(--pewter)', padding: 0,
    }}>← Voltar</button>
  );
}
