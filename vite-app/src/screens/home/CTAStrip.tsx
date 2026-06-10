import { useIsMobile } from '../../hooks/useIsMobile';
import { Display } from '../../components/primitives/Display';
import { Button } from '../../components/primitives/Button';
import { Reveal } from '../../components/shared/Reveal';

interface CTAStripProps {
  onNavigate: (screen: string) => void;
}

export function CTAStrip({ onNavigate }: CTAStripProps) {
  const isMobile = useIsMobile();
  const pad = isMobile ? '80px 24px' : '200px 120px';

  return (
    <section style={{ background: 'var(--noir)', padding: pad, textAlign: isMobile ? 'left' : 'center' }}>
      <Reveal>
        <Display size={72}>Vamos *construir* o seu.</Display>
      </Reveal>
      <Reveal delay={160} style={{
        marginTop: 36,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: 14,
        justifyContent: isMobile ? 'flex-start' : 'center',
        flexWrap: 'wrap',
      }}>
        <Button
          style={isMobile ? { width: '100%', padding: '18px 24px' } : undefined}
          onClick={() => onNavigate('quiz')}
        >Iniciar o Construtor</Button>
        <Button
          variant="ghost"
          style={isMobile ? { width: '100%', padding: '18px 24px' } : undefined}
          onClick={() => onNavigate('portfolio')}
        >Explorar projetos</Button>
      </Reveal>
    </section>
  );
}
