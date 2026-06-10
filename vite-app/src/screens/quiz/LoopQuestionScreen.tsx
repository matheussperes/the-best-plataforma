import { useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Display } from '../../components/primitives/Display';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Button } from '../../components/primitives/Button';
import { BackBtn } from './BackBtn';
import { ProgressBar } from './ProgressBar';
import { OptionCard } from './OptionCard';
import type { QuizOption } from '../../data/quizData';

interface LoopQuestionScreenProps {
  ambienteNomeSimples: string;
  ambienteImage: string;
  secao: string;
  question: string;
  instrucao: string;
  options: QuizOption[];
  initialSelected: string[];
  maxSelect?: number;   // undefined = seleção livre
  stepIndex: number;    // 0–3 para barra de progresso (5 steps no loop)
  columns?: 1 | 2;
  onContinue: (selected: string[]) => void;
  onBack: () => void;
}

export function LoopQuestionScreen({
  ambienteNomeSimples,
  ambienteImage,
  secao,
  question,
  instrucao,
  options,
  initialSelected,
  maxSelect,
  stepIndex,
  columns = 2,
  onContinue,
  onBack,
}: LoopQuestionScreenProps) {
  const isMobile = useIsMobile();
  const [selected, setSelected] = useState<string[]>(initialSelected);

  const toggle = (id: string) => {
    setSelected(prev => {
      if (prev.includes(id)) return prev.filter(x => x !== id);
      if (maxSelect !== undefined && prev.length >= maxSelect) return prev;
      return [...prev, id];
    });
  };

  const canContinue = selected.length > 0;
  const gridCols = isMobile ? 1 : columns;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '440px 1fr',
      minHeight: '100dvh',
      background: 'var(--noir)',
    }}>
      {/* Painel editorial — apenas desktop */}
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

      {/* Conteúdo */}
      <main style={{
        padding: isMobile ? '100px 24px 60px' : '64px 80px',
        overflowY: 'auto',
      }}>
        <div style={{ maxWidth: 720 }}>
          <ProgressBar index={stepIndex} total={5} />

          <Eyebrow style={{ marginBottom: 16 }}>
            {ambienteNomeSimples} · {secao}
          </Eyebrow>

          <Display size={44} style={{ lineHeight: 1.1 }}>{question}</Display>

          <p className="ds-body-sm" style={{ color: 'var(--pewter)', marginTop: 12 }}>
            {instrucao}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
            gap: 10, marginTop: 28,
          }}>
            {options.map(opt => {
              const isSelected = selected.includes(opt.id);
              const isDisabled = !isSelected && maxSelect !== undefined && selected.length >= maxSelect;
              return (
                <OptionCard
                  key={opt.id}
                  opt={opt}
                  selected={isSelected}
                  disabled={isDisabled}
                  onClick={() => toggle(opt.id)}
                />
              );
            })}
          </div>

          <div style={{
            marginTop: 36,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 14, alignItems: isMobile ? 'stretch' : 'center',
          }}>
            <Button
              onClick={() => canContinue && onContinue(selected)}
              style={{
                ...(!canContinue ? { opacity: 0.35, pointerEvents: 'none' } : {}),
                ...(isMobile ? { padding: '18px 24px' } : {}),
              }}
            >
              Continuar
            </Button>
            <BackBtn inline onClick={onBack} />
          </div>
        </div>
      </main>
    </div>
  );
}
