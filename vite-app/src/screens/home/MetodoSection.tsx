import { useIsMobile } from '../../hooks/useIsMobile';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Display } from '../../components/primitives/Display';
import { Reveal } from '../../components/shared/Reveal';

const PILARES = [
  {
    num: '01',
    titulo: 'O espaço serve você',
    copy: 'Um ambiente genérico exige adaptação.\nUm espaço pensado para a sua rotina simplesmente funciona — sem esforço, sem compensações.',
  },
  {
    num: '02',
    titulo: 'Cada detalhe tem um nome: o seu',
    copy: 'A altura da bancada, a direção da luz, a profundidade da prateleira.\nCada decisão é tomada pensando em como você vive aquele espaço.',
  },
  {
    num: '03',
    titulo: 'É bonito sem esforço',
    copy: 'Antes de impressionar os olhos, um espaço precisa acolher quem vive nele.\nQuando um ambiente funciona e pertence a quem o habita, a beleza surge naturalmente.',
  },
  {
    num: '04',
    titulo: 'Cresce com você',
    copy: 'Os melhores ambientes não resolvem apenas o presente.\nEles acompanham novas fases, novas rotinas e novas conquistas.\nContinuam fazendo sentido com o passar dos anos.',
  },
];

export function MetodoSection() {
  const isMobile = useIsMobile();
  const pad = isMobile ? '80px 24px' : '200px 120px';

  return (
    <section style={{ background: 'var(--noir)', padding: pad }}>

      {/* Headline centralizado */}
      <Reveal>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 64 }}>
          <Eyebrow style={{ marginBottom: 24 }}>O Método</Eyebrow>
          <Display size={isMobile ? 36 : 64} style={{ maxWidth: 860, margin: '0 auto' }}>
            {'Não projetamos *móveis*.\nProjetamos a forma como você *vive* dentro dos espaços.'}
          </Display>
        </div>
      </Reveal>

      {/* Separador */}
      <Reveal delay={100}>
        <div style={{
          height: 1,
          background: 'var(--carvao)',
          margin: isMobile ? '0 0 40px' : '0 0 64px',
        }} />
      </Reveal>

      {/* Grid de pilares */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
        gap: 0,
      }}>
        {PILARES.map((pilar, i) => (
          <Reveal key={pilar.num} delay={i * 80}>
            <div style={{
              padding: isMobile ? '32px 0' : '0 40px',
              borderTop: isMobile ? '1px solid var(--carvao)' : 'none',
              borderLeft: (!isMobile && i > 0) ? '1px solid var(--carvao)' : 'none',
            }}>
              {/* Número */}
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--champagne)',
                margin: '0 0 20px',
              }}>
                {pilar.num}
              </p>

              {/* Título */}
              <p style={{
                fontFamily: 'var(--serif-display)',
                fontWeight: 300,
                fontSize: isMobile ? 26 : 30,
                color: 'var(--marfim)',
                lineHeight: 1.2,
                margin: '0 0 20px',
              }}>
                {pilar.titulo}
              </p>

              {/* Linha champagne */}
              <div style={{
                width: 28,
                height: 1,
                background: 'var(--champagne)',
                opacity: 0.45,
                marginBottom: 20,
              }} />

              {/* Copy */}
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: 14,
                fontWeight: 400,
                color: 'var(--pewter)',
                lineHeight: 1.75,
                margin: 0,
                whiteSpace: 'pre-wrap',
              }}>
                {pilar.copy}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  );
}
