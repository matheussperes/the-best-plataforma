import { useIsMobile } from '../../hooks/useIsMobile';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Display } from '../../components/primitives/Display';
import { Reveal } from '../../components/shared/Reveal';

const ETAPAS = [
  { num: '01', nome: 'Imersão',    prazo: '3 dias úteis',    sensacao: 'Aqui você ainda sonha em voz alta.' },
  { num: '02', nome: 'Projeto',    prazo: '15 dias úteis',   sensacao: 'Cada milímetro pensado para o seu jeito de viver.' },
  { num: '03', nome: 'Aprovação',  prazo: '5 dias úteis',    sensacao: 'Você vê antes de existir. E aprova com confiança.' },
  { num: '04', nome: 'Produção',   prazo: '25 dias úteis',   sensacao: 'Tecnologia europeia. Precisão milimétrica.' },
  { num: '05', nome: 'Montagem',   prazo: '5–10 dias úteis', sensacao: 'Nossa equipe. Na sua casa. Do início ao fim.' },
  { num: '06', nome: 'Entrega',    prazo: '1 dia',           sensacao: 'As chaves do novo ambiente. E 5 anos de garantia.' },
];

export function MetodoSection() {
  const isMobile = useIsMobile();
  const pad = isMobile ? '80px 24px' : '200px 120px';

  return (
    <section style={{ background: 'var(--antracite)', padding: pad }}>
      {/* Cabeçalho */}
      <div style={{ maxWidth: 760, marginBottom: isMobile ? 48 : 80 }}>
        <Reveal>
          <Eyebrow style={{ marginBottom: 20 }}>O Método</Eyebrow>
          <Display size={isMobile ? 40 : 64}>
            Do *sonho* à chave na porta — em 60 dias úteis.
          </Display>
        </Reveal>
      </div>

      {/* Grid de etapas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: isMobile ? 1 : 1,
      }}>
        {ETAPAS.map((etapa, i) => (
          <Reveal key={etapa.num} delay={i * 80}>
            <div style={{
              padding: isMobile ? '32px 0' : '48px 40px',
              borderTop: '1px solid var(--carvao)',
              borderRight: (!isMobile && (i + 1) % 3 !== 0) ? '1px solid var(--carvao)' : 'none',
            }}>
              {/* Número da etapa */}
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--champagne)',
                margin: '0 0 20px',
              }}>
                {etapa.num}
              </p>

              {/* Nome da etapa */}
              <p style={{
                fontFamily: 'var(--serif-display)',
                fontWeight: 300,
                fontSize: isMobile ? 28 : 34,
                color: 'var(--marfim)',
                lineHeight: 1.15,
                margin: '0 0 12px',
              }}>
                {etapa.nome}
              </p>

              {/* Prazo */}
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: 13,
                fontWeight: 500,
                color: 'var(--pewter)',
                letterSpacing: '0.04em',
                margin: '0 0 20px',
              }}>
                {etapa.prazo}
              </p>

              {/* Linha divisória */}
              <div style={{
                width: 32,
                height: 1,
                background: 'var(--champagne)',
                marginBottom: 20,
                opacity: 0.5,
              }} />

              {/* Sensação */}
              <p style={{
                fontFamily: 'var(--serif-display)',
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: isMobile ? 15 : 16,
                color: 'var(--pewter)',
                lineHeight: 1.6,
                margin: 0,
              }}>
                "{etapa.sensacao}"
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Destaque final */}
      <Reveal delay={300}>
        <div style={{
          borderTop: '1px solid var(--carvao)',
          marginTop: isMobile ? 48 : 64,
          paddingTop: isMobile ? 40 : 56,
          textAlign: isMobile ? 'left' : 'center',
        }}>
          <Display size={isMobile ? 32 : 48}>
            Seu projeto pronto em *60 dias* úteis.
          </Display>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: 14,
            color: 'var(--pewter)',
            marginTop: 20,
            letterSpacing: '0.02em',
          }}>
            Da primeira conversa à última dobradiça ajustada.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
