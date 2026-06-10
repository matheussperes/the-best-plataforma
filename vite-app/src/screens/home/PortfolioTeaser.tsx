import { useIsMobile } from '../../hooks/useIsMobile';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Display } from '../../components/primitives/Display';
import { Reveal } from '../../components/shared/Reveal';
import { ProjectCard } from '../../components/shared/ProjectCard';
import imgCozinha02 from '/assets/images/imgCozinha02.webp';
import imgCloset01 from '/assets/images/imgCloset01.webp';
import imgSala02 from '/assets/images/imgSala02.webp';

interface PortfolioTeaserProps {
  onNavigate: (screen: string) => void;
}

const TEASERS = [
  { img: imgCozinha02, amb: 'Cozinha',       ttl: 'Residência Alphaville' },
  { img: imgCloset01,  amb: 'Closet',        ttl: 'Cobertura Cambuí' },
  { img: imgSala02,    amb: 'Sala de estar', ttl: 'Apartamento Nova Campinas' },
];

export function PortfolioTeaser({ onNavigate }: PortfolioTeaserProps) {
  const isMobile = useIsMobile();
  const pad = isMobile ? '0 24px 80px' : '0 120px 200px';

  return (
    <section style={{ background: 'var(--noir)', padding: pad }}>
      <div style={{
        display: 'flex',
        alignItems: isMobile ? 'flex-start' : 'flex-end',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', gap: 20, marginBottom: isMobile ? 32 : 64,
      }}>
        <Reveal>
          <Eyebrow>Projetos selecionados</Eyebrow>
          <Display size={56} style={{ marginTop: 18 }}>Cada ambiente, uma *assinatura*.</Display>
        </Reveal>
        <Reveal delay={120}>
          <button onClick={() => onNavigate('portfolio')} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 500,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--champagne)', whiteSpace: 'nowrap', paddingBottom: 6,
            borderBottom: '1px solid var(--champagne)',
          }}>Ver tudo →</button>
        </Reveal>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: 16 }}>
        {TEASERS.map((t, i) => (
          <Reveal key={t.ttl} delay={i * 80}>
            <ProjectCard
              {...t}
              h={isMobile ? undefined : 460}
              square={isMobile}
              onClick={() => onNavigate('portfolio')}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
