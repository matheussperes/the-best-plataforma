import { useIsMobile } from '../../hooks/useIsMobile';
import { Display } from '../../components/primitives/Display';
import { Button } from '../../components/primitives/Button';
import { Reveal } from '../../components/shared/Reveal';

interface QuizCTASectionProps {
  onNavigate: (screen: string) => void;
}

export function QuizCTASection({ onNavigate }: QuizCTASectionProps) {
  const isMobile = useIsMobile();
  const pad = isMobile ? '80px 24px' : '160px 120px';

  return (
    <section style={{ background: 'var(--noir)', padding: pad, textAlign: isMobile ? 'left' : 'center' }}>
      <Reveal>
        <Display size={isMobile ? 48 : 64}>
          Descubra o ambiente dos seus *sonhos*
        </Display>
      </Reveal>

      <Reveal delay={120}>
        <p style={{
          fontFamily: 'var(--sans)',
          fontSize: 16,
          color: 'var(--pewter)',
          lineHeight: 1.7,
          marginTop: 24,
          marginBottom: 0,
        }}>
          Em 8 minutos, você nos conta como quer viver. Nós cuidamos do resto.
        </p>
      </Reveal>

      <Reveal delay={220} style={{
        marginTop: 48,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: 14,
        justifyContent: isMobile ? 'flex-start' : 'center',
        flexWrap: 'wrap',
      }}>
        <Button
          style={isMobile ? { width: '100%', padding: '18px 24px' } : undefined}
          onClick={() => { sessionStorage.removeItem('quiz_home_selecao'); onNavigate('quiz'); }}
        >
          MONTAR MEU ORÇAMENTO
        </Button>
        <a
          href="https://wa.me/5519900000000"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            padding: isMobile ? '18px 24px' : '14px 30px',
            fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--champagne)',
            border: '1px solid var(--champagne)',
            background: 'none',
            textDecoration: 'none',
            transition: 'all var(--dur-hover) var(--ease-lux)',
            width: isMobile ? '100%' : undefined,
            boxSizing: 'border-box',
          }}
        >
          FALAR NO WHATSAPP
        </a>
      </Reveal>
    </section>
  );
}
