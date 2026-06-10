import { useIsMobile } from '../../hooks/useIsMobile';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Display } from '../../components/primitives/Display';
import { Reveal } from '../../components/shared/Reveal';

export function QuoteSection() {
  const isMobile = useIsMobile();
  const pad = isMobile ? '80px 24px' : '160px 120px';

  return (
    <section style={{ background: 'var(--linen)', padding: pad }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: isMobile ? 'left' : 'center' }}>
        <Reveal>
          <Eyebrow style={{ color: 'var(--bronze)' }}>O Construtor Emocional™</Eyebrow>
        </Reveal>
        <Reveal delay={140} style={{ marginTop: 28 }}>
          <Display size={64} color="var(--noir)" style={{ lineHeight: 1.1 }}>
            "Que sensação você quer *sentir* ao chegar em casa?"
          </Display>
        </Reveal>
        <Reveal delay={280} style={{ marginTop: 28 }}>
          <p className="ds-body-lg" style={{
            color: 'var(--pewter)',
            maxWidth: isMobile ? '100%' : 560,
            margin: isMobile ? 0 : '0 auto',
          }}>
            Responda sete perguntas. Devolvemos um retrato emocional do seu projeto — o ponto de
            partida para um lar verdadeiramente seu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
