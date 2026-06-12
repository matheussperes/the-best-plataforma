import { useIsMobile } from '../../hooks/useIsMobile';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Display } from '../../components/primitives/Display';
import { Reveal } from '../../components/shared/Reveal';

const DEPOIMENTOS = [
  {
    texto: 'Minha cozinha virou o lugar favorito da família. Meu marido — que nunca cozinhou — agora insiste em fazer o jantar. Não esperava que um ambiente pudesse mudar tanto uma rotina.',
    nome: 'R. M.',
    contexto: 'Cozinha · Campinas, SP',
  },
  {
    texto: 'Parece bobagem, mas eu passava vinte minutos procurando roupa toda manhã. Hoje entro no closet e sei exatamente onde tudo está. O dia começa diferente — com calma.',
    nome: 'A. C.',
    contexto: 'Closet · Campinas, SP',
  },
  {
    texto: 'Sempre evitei receber em casa porque o espaço não me representava. Hoje meus amigos não querem ir embora. A sala virou o centro do meu mundo social.',
    nome: 'F. B.',
    contexto: 'Sala de estar · Campinas, SP',
  },
];

export function DepoimentosSection() {
  const isMobile = useIsMobile();
  const pad = isMobile ? '80px 24px' : '200px 120px';

  return (
    <section style={{ background: 'var(--noir)', padding: pad }}>

      {/* Cabeçalho */}
      <Reveal>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          justifyContent: 'space-between',
          gap: 20,
          marginBottom: isMobile ? 48 : 72,
        }}>
          <div>
            <Eyebrow style={{ marginBottom: 20 }}>Depoimentos</Eyebrow>
            <Display size={isMobile ? 36 : 52}>
              O ambiente mudou. A *vida* também.
            </Display>
          </div>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: 13,
            color: 'var(--pewter)',
            lineHeight: 1.65,
            margin: 0,
            maxWidth: 280,
            flexShrink: 0,
            paddingBottom: isMobile ? 0 : 4,
          }}>
            Histórias reais de quem transformou um espaço — e sentiu a diferença no dia a dia.
          </p>
        </div>
      </Reveal>

      {/* Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: 0,
      }}>
        {DEPOIMENTOS.map((dep, i) => (
          <Reveal key={dep.nome} delay={i * 100}>
            <div style={{
              padding: isMobile ? '36px 0' : '0 48px',
              borderTop: isMobile ? '1px solid var(--carvao)' : 'none',
              borderLeft: (!isMobile && i > 0) ? '1px solid var(--carvao)' : 'none',
            }}>
              {/* Aspas de abertura */}
              <p style={{
                fontFamily: 'var(--serif-display)',
                fontWeight: 300,
                fontSize: 80,
                lineHeight: 0.6,
                color: 'var(--champagne)',
                opacity: 0.5,
                margin: '0 0 24px',
                userSelect: 'none',
              }}>
                "
              </p>

              {/* Texto do depoimento */}
              <p style={{
                fontFamily: 'var(--serif-display)',
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: isMobile ? 20 : 22,
                color: 'var(--marfim)',
                lineHeight: 1.6,
                margin: '0 0 32px',
              }}>
                {dep.texto}
              </p>

              {/* Linha champagne */}
              <div style={{
                width: 28,
                height: 1,
                background: 'var(--champagne)',
                opacity: 0.45,
                marginBottom: 16,
              }} />

              {/* Nome */}
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: 13,
                fontWeight: 500,
                color: 'var(--marfim)',
                margin: '0 0 4px',
                letterSpacing: '0.04em',
              }}>
                {dep.nome}
              </p>

              {/* Contexto */}
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: 12,
                color: 'var(--pewter)',
                margin: 0,
                letterSpacing: '0.03em',
              }}>
                {dep.contexto}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  );
}
