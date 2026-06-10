import React, { useState, useEffect } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Button } from '../primitives/Button';

interface NavProps {
  current: string;
  onNavigate: (screen: string) => void;
}

const LINKS = [
  { id: 'home',      label: 'Início' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'quiz',      label: 'O Construtor' },
];

export function Nav({ current, onNavigate }: NavProps) {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const scroller = document.querySelector('[data-scroll]') || window;
    const onScroll = () => {
      const y = scroller === window ? window.scrollY : (scroller as HTMLElement).scrollTop;
      setSolid(y > 40);
    };
    scroller.addEventListener('scroll', onScroll, { passive: true });
    return () => scroller.removeEventListener('scroll', onScroll);
  }, [current]);

  const nav = (id: string) => { setMenuOpen(false); onNavigate(id); };

  const navBg     = (solid || menuOpen) ? 'rgba(14,15,17,0.96)' : 'transparent';
  const navBlur   = (solid || menuOpen) ? 'blur(14px)' : 'none';
  const navBorder = (solid || menuOpen) ? '1px solid var(--hairline)' : '1px solid transparent';

  return (
    <React.Fragment>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: isMobile ? '18px 24px' : (solid ? '20px 64px' : '32px 64px'),
        background: navBg, backdropFilter: navBlur, borderBottom: navBorder,
        transition: 'all var(--dur-hover) var(--ease-lux)',
      }}>
        <button onClick={() => nav('home')} style={{
          background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
          fontFamily: 'var(--sans)', fontWeight: 600,
          fontSize: isMobile ? 14 : 17,
          letterSpacing: '0.34em', color: 'var(--marfim)', paddingLeft: '0.34em',
        }}>THE BEST</button>

        {isMobile ? (
          <button onClick={() => setMenuOpen(o => !o)} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: '6px',
            display: 'flex', flexDirection: 'column', gap: 5,
          }}>
            {[
              { transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' },
              { opacity: menuOpen ? 0 : 1, transition: 'opacity 200ms' },
              { transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' },
            ].map((extra, i) => (
              <span key={i} style={{
                display: 'block', width: 22, height: 1,
                background: (menuOpen && i !== 1) ? 'var(--champagne)' : 'var(--marfim)',
                transition: 'background 300ms, transform 300ms, opacity 200ms',
                transformOrigin: 'center',
                ...extra,
              }} />
            ))}
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
            {LINKS.map(l => (
              <button key={l.id} onClick={() => nav(l.id)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 500,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: current === l.id ? 'var(--champagne)' : 'var(--marfim)',
                paddingBottom: 4,
                borderBottom: current === l.id ? '1px solid var(--champagne)' : '1px solid transparent',
                transition: 'color var(--dur-hover) var(--ease-lux)',
              }}>{l.label}</button>
            ))}
            <Button style={{ padding: '14px 30px', fontSize: 11 }} onClick={() => nav('quiz')}>
              Agendar
            </Button>
          </div>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: 57, left: 0, right: 0, zIndex: 49,
          background: 'rgba(14,15,17,0.98)', backdropFilter: 'blur(14px)',
          borderBottom: '1px solid var(--carvao)',
          padding: '24px 24px 32px',
          display: 'flex', flexDirection: 'column', gap: 0,
          animation: 'fadeIn 200ms var(--ease-lux)',
        }}>
          {LINKS.map(l => (
            <button key={l.id} onClick={() => nav(l.id)} style={{
              background: 'none', border: 'none',
              borderBottom: '1px solid var(--carvao)',
              cursor: 'pointer', textAlign: 'left', padding: '18px 0',
              fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 500,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: current === l.id ? 'var(--champagne)' : 'var(--marfim)',
            }}>{l.label}</button>
          ))}
          <div style={{ marginTop: 24 }}>
            <Button style={{ width: '100%', padding: '18px 24px' }} onClick={() => nav('quiz')}>
              Agendar visita
            </Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
