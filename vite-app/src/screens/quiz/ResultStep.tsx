import { useIsMobile } from '../../hooks/useIsMobile';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Display } from '../../components/primitives/Display';
import { Button } from '../../components/primitives/Button';

type Answers = Record<string, string>;

interface ResultStepProps {
  answers: Answers;
  onNavigate: (screen: string) => void;
}

const SUMMARY_KEYS: [string, string][] = [
  ['Sensação',  'sensacao'],
  ['Ambiente',  'ambiente'],
  ['Atmosfera', 'atmosfera'],
];

export function ResultStep({ answers, onNavigate }: ResultStepProps) {
  const isMobile = useIsMobile();
  const firstName = answers.nome ? answers.nome.split(' ')[0] : '';

  return (
    <div>
      <Eyebrow>Seu retrato emocional</Eyebrow>
      <Display size={64} style={{ marginTop: 20, lineHeight: 1.05 }}>
        {firstName ? `${firstName}, ` : ''}seu lar pede *{(answers.sensacao || 'Serenidade').toLowerCase()}*.
      </Display>
      <p className="ds-body-lg" style={{ marginTop: 24, maxWidth: 560 }}>
        Um projeto de{' '}
        <strong style={{ color: 'var(--marfim)', fontWeight: 500 }}>
          {(answers.ambiente || 'cozinha').toLowerCase()}
        </strong>{' '}
        com atmosfera{' '}
        <strong style={{ color: 'var(--marfim)', fontWeight: 500 }}>
          {(answers.atmosfera || 'madeira clara').toLowerCase()}
        </strong>.{' '}
        Nossa equipe entrará em contato para transformar este retrato em desenho.
      </p>
      <div className="ds-card" style={{
        marginTop: 32,
        padding: isMobile ? '24px 20px' : '32px 36px',
        display: 'flex', gap: isMobile ? 32 : 56, flexWrap: 'wrap',
      }}>
        {SUMMARY_KEYS.map(([label, key]) => (
          <div key={key}>
            <Eyebrow style={{ color: 'var(--pewter)' }}>{label}</Eyebrow>
            <div style={{
              fontFamily: 'var(--serif-display)', fontWeight: 300, fontStyle: 'italic',
              fontSize: 26, color: 'var(--champagne)', marginTop: 8,
            }}>{answers[key] || '—'}</div>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 36,
        display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 14, flexWrap: 'wrap',
      }}>
        <Button
          style={isMobile ? { width: '100%', padding: '18px 24px' } : undefined}
          onClick={() => onNavigate('portfolio')}
        >Ver projetos como o meu</Button>
        <Button
          variant="ghost"
          style={isMobile ? { width: '100%', padding: '18px 24px' } : undefined}
          onClick={() => onNavigate('home')}
        >Voltar ao início</Button>
      </div>
    </div>
  );
}
