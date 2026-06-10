// stub — implementação vem na Fase 2
import React from 'react';

type Screen = 'home' | 'portfolio' | 'quiz';

export function App() {
  const [screen, setScreen] = React.useState<Screen>('home');
  const _navigate = (s: string) => setScreen(s as Screen);

  return (
    <div style={{ background: 'var(--noir)', minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: 'var(--champagne)', fontFamily: 'var(--sans)', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
        THE BEST · Fase 1 scaffolding OK · screen: {screen}
      </div>
    </div>
  );
}
