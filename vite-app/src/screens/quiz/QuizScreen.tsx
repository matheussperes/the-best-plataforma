import { useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Display } from '../../components/primitives/Display';
import { Button } from '../../components/primitives/Button';
import { STEPS } from '../../data/quizSteps';
import { ProgressBar } from './ProgressBar';
import { OptionCard } from './OptionCard';
import { ContactStep } from './ContactStep';
import { ResultStep } from './ResultStep';
import { BackBtn } from './BackBtn';
import imgQuarto03 from '/assets/images/imgQuarto03.jpg';

type Answers = Record<string, string>;

interface QuizScreenProps {
  onNavigate: (screen: string) => void;
}

const BADGE = (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid var(--champagne)', padding: '8px 14px' }}>
    <span style={{ width: 4, height: 4, background: 'var(--champagne)', borderRadius: '50%' }} />
    <span style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--champagne)' }}>
      O Construtor Emocional™
    </span>
  </div>
);

export function QuizScreen({ onNavigate }: QuizScreenProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const isMobile = useIsMobile();

  const total     = STEPS.length + 1; // steps + contact
  const isContact = step === STEPS.length;
  const isResult  = step > STEPS.length;
  const cur       = STEPS[step];

  const pick = (val: string) => {
    setAnswers(a => ({ ...a, [cur.key]: val }));
    setTimeout(() => setStep(s => s + 1), 260);
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '440px 1fr',
      minHeight: '100dvh',
      background: 'var(--noir)',
    }}>
      {/* Painel editorial — apenas desktop */}
      {!isMobile && (
        <aside style={{ position: 'relative', overflow: 'hidden', borderRight: '1px solid var(--carvao)' }}>
          <img src={imgQuarto03} alt="" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', filter: 'saturate(.85)',
          }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14,15,17,.55), rgba(14,15,17,.85))' }} />
          <div style={{
            position: 'relative', padding: '120px 48px', height: '100%',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid var(--champagne)', padding: '9px 16px', alignSelf: 'flex-start' }}>
              <span style={{ width: 5, height: 5, background: 'var(--champagne)', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--champagne)' }}>
                O Construtor Emocional™
              </span>
            </div>
            <div>
              <Display size={40} style={{ lineHeight: 1.1 }}>
                Não perguntamos *metros*. Perguntamos *memórias*.
              </Display>
              <p className="ds-body-sm" style={{ color: 'var(--pewter)', marginTop: 20 }}>
                Um briefing que começa pela emoção.
              </p>
            </div>
          </div>
        </aside>
      )}

      {/* Área de conteúdo */}
      <main style={{
        padding: isMobile ? '100px 24px 60px' : '120px 96px',
        display: 'flex', alignItems: isMobile ? 'flex-start' : 'center',
      }}>
        <div style={{ width: '100%', maxWidth: 720 }}>
          {isMobile && <div style={{ marginBottom: 28 }}>{BADGE}</div>}

          {!isResult && <ProgressBar index={isContact ? total - 1 : step} total={total} />}

          {/* Pergunta */}
          {!isContact && !isResult && (
            <div key={step} style={{ animation: 'fadeUp 600ms var(--ease-lux)' }}>
              <Eyebrow>{cur.eyebrow}</Eyebrow>
              <Display size={52} style={{ marginTop: 18, lineHeight: 1.08 }}>{cur.q}</Display>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: 12, marginTop: 36,
              }}>
                {cur.options.map(o => (
                  <OptionCard key={o.t} opt={o} selected={answers[cur.key] === o.t} onClick={() => pick(o.t)} />
                ))}
              </div>
              {step > 0 && <BackBtn onClick={() => setStep(s => s - 1)} />}
            </div>
          )}

          {/* Contato */}
          {isContact && (
            <div style={{ animation: 'fadeUp 600ms var(--ease-lux)' }}>
              <Eyebrow>Quase lá · seus dados</Eyebrow>
              <Display size={52} style={{ marginTop: 18 }}>Para onde enviamos seu *retrato*?</Display>
              <ContactStep data={answers} setData={setAnswers} />
              <div style={{
                marginTop: 40,
                display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 14,
                alignItems: isMobile ? 'stretch' : 'center',
              }}>
                <Button
                  style={isMobile ? { padding: '18px 24px' } : undefined}
                  onClick={() => setStep(s => s + 1)}
                >Ver meu retrato emocional</Button>
                <BackBtn inline onClick={() => setStep(s => s - 1)} />
              </div>
            </div>
          )}

          {/* Resultado */}
          {isResult && (
            <div style={{ animation: 'fadeUp 700ms var(--ease-lux)' }}>
              <ResultStep answers={answers} onNavigate={onNavigate} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
