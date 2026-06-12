import { useIsMobile } from '../../hooks/useIsMobile';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Reveal } from '../../components/shared/Reveal';

const NUMEROS = [
  { valor: '200+',    legenda: 'Famílias que confiaram suas histórias à The Best.' },
  { valor: '11',      legenda: 'Anos refinando o que importa: você.' },
  { valor: '60 dias', legenda: 'Do briefing ao "uau" final.' },
  { valor: '5 anos',  legenda: 'De garantia. Mas a relação dura para sempre.' },
];

export function NumerosSection() {
  const isMobile = useIsMobile();
  const pad = isMobile ? '80px 24px' : '200px 120px';

  return (
    <section style={{ background: 'var(--antracite)', padding: pad }}>
      <Reveal>
        <Eyebrow style={{ marginBottom: isMobile ? 40 : 56 }}>Números com Alma</Eyebrow>
      </Reveal>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
        gap: 0,
      }}>
        {NUMEROS.map((n, i) => (
          <Reveal key={n.valor} delay={i * 90}>
            <div style={{
              padding: isMobile ? '28px 0' : '0 40px',
              borderTop: isMobile ? '1px solid var(--carvao)' : 'none',
              borderLeft: (!isMobile && i > 0) ? '1px solid var(--carvao)' : 'none',
            }}>
              {/* Número */}
              <p style={{
                fontFamily: 'var(--serif-display)',
                fontWeight: 300,
                fontSize: isMobile ? 52 : 80,
                lineHeight: 1,
                color: 'var(--champagne)',
                margin: '0 0 16px',
                letterSpacing: '-0.02em',
              }}>
                {n.valor}
              </p>

              {/* Legenda */}
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: 14,
                fontWeight: 400,
                color: 'var(--pewter)',
                lineHeight: 1.65,
                margin: 0,
                maxWidth: 200,
              }}>
                {n.legenda}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
