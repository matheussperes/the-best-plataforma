import { useIsMobile } from '../../hooks/useIsMobile';
import { Display } from '../../components/primitives/Display';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Button } from '../../components/primitives/Button';
import { AMBIENTE_MAP } from '../../data/quizData';
import type { QuizData } from '../../data/quizData';
import type { RetratoEmocional } from '../../data/quiz-retrato';

interface RetratoScreenProps {
  quizData: QuizData;
  retrato: RetratoEmocional;
  onNavigate: (screen: string) => void;
}

const CATEGORIA_COR: Record<string, string> = {
  ESSENCIAL: 'var(--pewter)',
  'PADRÃO':  'var(--champagne)',
  PREMIUM:   'var(--champagne)',
  EXCLUSIVO: 'var(--champagne)',
};

function formatRange(min: number, max: number): string {
  if (min === 0 && max === 0) return 'Personalizado';
  const fmt = (v: number) => `R$ ${Math.round(v / 1000)}k`;
  if (max >= 600000) return `${fmt(min)} – R$ 300k+`;
  return `${fmt(min)} – ${fmt(max)}`;
}

export function RetratoScreen({ quizData, retrato, onNavigate }: RetratoScreenProps) {
  const isMobile = useIsMobile();
  const firstName = quizData.contato.nome.split(' ')[0] || '';
  const headlinePart = firstName
    ? `${firstName}, seu lar pede *${retrato.sensacaoDominante}*.`
    : `Seu lar pede *${retrato.sensacaoDominante}*.`;

  const investimento = formatRange(quizData.totalMin, quizData.totalMax);
  const categoriaLabel = quizData.categoria || 'ESSENCIAL';

  return (
    <div style={{
      minHeight: '100dvh',
      background: 'var(--noir)',
      padding: isMobile ? '100px 24px 80px' : '120px 48px 100px',
    }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Cabeçalho */}
        <Eyebrow style={{ marginBottom: 20 }}>Seu retrato emocional</Eyebrow>

        <Display size={isMobile ? 44 : 64} style={{ lineHeight: 1.05 }}>
          {headlinePart}
        </Display>

        {/* Divisor champagne */}
        <div style={{
          width: 48, height: 1,
          background: 'var(--champagne)',
          margin: '36px 0',
        }} />

        {/* Parágrafos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {retrato.paragrafos.map((p, i) => (
            <p
              key={i}
              className={i === 0 ? 'ds-body-lg' : 'ds-body-lg'}
              style={{
                color: i === 0 ? 'var(--marfim)' : 'var(--pewter)',
                margin: 0, lineHeight: 1.75,
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Card de resumo */}
        <div className="ds-card" style={{
          marginTop: 48,
          padding: isMobile ? '28px 24px' : '36px 40px',
          display: 'grid',
          gridTemplateColumns: isMobile
            ? '1fr 1fr'
            : 'repeat(4, 1fr)',
          gap: isMobile ? '28px 16px' : 40,
        }}>
          {/* Ambientes */}
          <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
            <Eyebrow style={{ color: 'var(--pewter)', marginBottom: 12 }}>Ambientes</Eyebrow>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {quizData.ambientesOrdenados.map(id => (
                <span key={id} style={{
                  fontFamily: 'var(--serif-display)', fontWeight: 300,
                  fontStyle: 'italic', fontSize: 18,
                  color: 'var(--champagne)', lineHeight: 1.4,
                }}>
                  {AMBIENTE_MAP[id]?.nomeSimples ?? id}
                </span>
              ))}
            </div>
          </div>

          {/* Estilo */}
          <div>
            <Eyebrow style={{ color: 'var(--pewter)', marginBottom: 12 }}>Estilo</Eyebrow>
            <span style={{
              fontFamily: 'var(--serif-display)', fontWeight: 300,
              fontStyle: 'italic', fontSize: 20,
              color: 'var(--champagne)',
            }}>
              {retrato.estiloDominanteLabel}
            </span>
          </div>

          {/* Investimento */}
          <div>
            <Eyebrow style={{ color: 'var(--pewter)', marginBottom: 12 }}>Investimento</Eyebrow>
            <span style={{
              fontFamily: 'var(--serif-display)', fontWeight: 300,
              fontStyle: 'italic', fontSize: 20,
              color: 'var(--champagne)',
            }}>
              {investimento}
            </span>
          </div>

          {/* Categoria */}
          <div>
            <Eyebrow style={{ color: 'var(--pewter)', marginBottom: 12 }}>Perfil</Eyebrow>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              border: `1px solid ${CATEGORIA_COR[categoriaLabel] ?? 'var(--champagne)'}`,
              padding: '6px 12px',
            }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: CATEGORIA_COR[categoriaLabel] ?? 'var(--champagne)' }} />
              <span style={{
                fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 600,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: CATEGORIA_COR[categoriaLabel] ?? 'var(--champagne)',
              }}>
                {categoriaLabel}
              </span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div style={{
          marginTop: 48,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 14, flexWrap: 'wrap',
        }}>
          <Button
            onClick={() => onNavigate('portfolio')}
            style={isMobile ? { padding: '18px 24px' } : undefined}
          >
            Ver projetos como o meu
          </Button>
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            style={isMobile ? { padding: '18px 24px' } : undefined}
          >
            Voltar ao início
          </Button>
        </div>

      </div>
    </div>
  );
}
