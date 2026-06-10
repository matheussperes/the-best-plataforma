import { useIsMobile } from '../../hooks/useIsMobile';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Display } from '../../components/primitives/Display';
import { Reveal } from '../../components/shared/Reveal';

export function Manifesto() {
  const isMobile = useIsMobile();
  const pad = isMobile ? '80px 24px' : '200px 120px';

  return (
    <section style={{ background: 'var(--noir)', padding: pad }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Reveal><Eyebrow>Desde 2014</Eyebrow></Reveal>
        <Reveal delay={120} style={{ marginTop: 28 }}>
          <Display size={56} color="var(--marfim)" style={{ lineHeight: 1.12 }}>
            Não desenhamos móveis. Desenhamos a *sensação* de chegar em casa — a luz que toca a madeira, o silêncio de uma gaveta que fecha *perfeita*.
          </Display>
        </Reveal>
        <Reveal delay={240} style={{
          marginTop: 40,
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 24 : 64,
          maxWidth: 760,
        }}>
          <p className="ds-body" style={{ margin: 0 }}>
            Cada projeto nasce de uma escuta. Antes da medida, vem a intenção: como você quer viver
            aquele espaço, que emoção ele deve devolver todos os dias.
          </p>
          <p className="ds-body" style={{ margin: 0 }}>
            Da seleção da chapa ao último ajuste de dobradiça, o controle é nosso. O resultado é
            atemporal — pensado para durar tanto quanto a memória que abriga.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
