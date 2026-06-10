import { useIsMobile } from '../../hooks/useIsMobile';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Display } from '../../components/primitives/Display';
import { Button } from '../../components/primitives/Button';
import { Reveal } from '../../components/shared/Reveal';
import imgCozinha01 from '/assets/images/imgCozinha01.webp';

interface HeroProps {
  onNavigate: (screen: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const isMobile = useIsMobile();
  const pad = isMobile ? '80px 24px 56px' : '0 120px 120px';

  return (
    <section style={{
      position: 'relative',
      height: '100dvh',
      minHeight: isMobile ? 600 : 720,
      overflow: 'hidden',
    }}>
      <img src={imgCozinha01} alt="" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', filter: 'saturate(.9) contrast(1.02)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(14,15,17,.55) 0%, rgba(14,15,17,.30) 38%, rgba(14,15,17,.86) 100%)',
      }} />
      <div style={{
        position: 'relative', height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: pad,
      }}>
        <Reveal delay={120}>
          <Eyebrow>Marcenaria de alto padrão · Campinas / SP</Eyebrow>
        </Reveal>
        <Reveal delay={260} style={{ marginTop: 22, maxWidth: isMobile ? '100%' : 1000 }}>
          <Display size={104}>O lar que você *sente*{'\n'}antes de *habitar*.</Display>
        </Reveal>
        <Reveal delay={420} style={{ marginTop: 22, maxWidth: isMobile ? '100%' : 540 }}>
          <p className="ds-body-lg" style={{ margin: 0, fontSize: isMobile ? 16 : undefined }}>
            Onze anos transformando espaços em assinatura. Cada projeto começa por uma pergunta —
            não sobre metros quadrados, mas sobre a vida que acontecerá ali.
          </p>
        </Reveal>
        <Reveal delay={560} style={{
          marginTop: 32,
          display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 14, flexWrap: 'wrap',
        }}>
          <Button
            style={isMobile ? { width: '100%', padding: '18px 24px' } : undefined}
            onClick={() => onNavigate('quiz')}
          >Iniciar o Construtor</Button>
          <Button
            variant="ghost"
            style={isMobile ? { width: '100%', padding: '18px 24px' } : undefined}
            onClick={() => onNavigate('portfolio')}
          >Ver portfólio</Button>
        </Reveal>
      </div>
    </section>
  );
}
