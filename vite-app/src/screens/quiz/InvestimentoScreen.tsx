import { useIsMobile } from '../../hooks/useIsMobile';
import { Display } from '../../components/primitives/Display';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { BackBtn } from './BackBtn';
import { ProgressBar } from './ProgressBar';
import { OptionCard } from './OptionCard';
import { INVESTIMENTO_OPTIONS } from '../../data/quizData';

interface InvestimentoScreenProps {
  ambienteNomeSimples: string;
  ambienteNomeEmocional: string;
  ambienteImage: string;
  initialSelected: string;
  onSelect: (id: string) => void;
  onBack: () => void;
}

export function InvestimentoScreen({
  ambienteNomeSimples,
  ambienteNomeEmocional,
  ambienteImage,
  initialSelected,
  onSelect,
  onBack,
}: InvestimentoScreenProps) {
  const isMobile = useIsMobile();

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '440px 1fr',
      minHeight: '100dvh',
      background: 'var(--noir)',
    }}>
      {!isMobile && (
        <aside style={{
          position: 'relative', overflow: 'hidden',
          borderRight: '1px solid var(--carvao)',
        }}>
          {ambienteImage && (
            <img
              src={ambienteImage}
              alt=""
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', filter: 'saturate(.75) brightness(.5)',
              }}
            />
          )}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(14,15,17,.3) 0%, rgba(14,15,17,.88) 100%)',
          }} />
          <div style={{
            position: 'relative', padding: '48px', height: '100%',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            boxSizing: 'border-box',
          }}>
            <p style={{
              fontFamily: 'var(--serif-display)', fontWeight: 300, fontStyle: 'italic',
              fontSize: 22, color: 'var(--champagne)', lineHeight: 1.3, margin: 0,
            }}>
              {ambienteNomeSimples}
            </p>
          </div>
        </aside>
      )}

      <main style={{
        padding: isMobile ? '100px 24px 60px' : '64px 80px',
        overflowY: 'auto',
      }}>
        <div style={{ maxWidth: 680 }}>
          <ProgressBar index={4} total={5} />

          <Eyebrow style={{ marginBottom: 16 }}>
            {ambienteNomeSimples} · Investimento
          </Eyebrow>

          <Display size={44} style={{ lineHeight: 1.1 }}>
            {`Quanto você imagina *investir* em ${ambienteNomeEmocional}?`}
          </Display>

          <p className="ds-body-sm" style={{ color: 'var(--pewter)', marginTop: 12 }}>
            Selecione uma faixa.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 28 }}>
            {INVESTIMENTO_OPTIONS.map(opt => (
              <OptionCard
                key={opt.id}
                opt={opt}
                selected={initialSelected === opt.id}
                onClick={() => onSelect(opt.id)}
              />
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <BackBtn inline onClick={onBack} />
          </div>
        </div>
      </main>
    </div>
  );
}
