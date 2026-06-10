import type { Dispatch, SetStateAction } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

type Answers = Record<string, string>;

interface ContactStepProps {
  data: Answers;
  setData: Dispatch<SetStateAction<Answers>>;
}

function Field({
  label, placeholder, type = 'text', value, onChange,
}: {
  label: string; placeholder: string; type?: string;
  value: string; onChange: (v: string) => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <label className="ds-eyebrow" style={{ color: 'var(--pewter)' }}>{label}</label>
      <input
        className="ds-input" type={type} placeholder={placeholder} value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

export function ContactStep({ data, setData }: ContactStepProps) {
  const isMobile = useIsMobile();
  const set = (key: string) => (v: string) => setData(d => ({ ...d, [key]: v }));

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? 28 : 40,
      marginTop: 8,
    }}>
      <Field label="Nome"     placeholder="Como podemos chamá-lo"   value={data.nome   ?? ''} onChange={set('nome')} />
      <Field label="E-mail"   placeholder="voce@empresa.com.br"    type="email" value={data.email  ?? ''} onChange={set('email')} />
      <Field label="Telefone" placeholder="+55 19 9 0000-0000"     type="tel"   value={data.tel    ?? ''} onChange={set('tel')} />
      <Field label="Cidade"   placeholder="Campinas / SP"           value={data.cidade ?? ''} onChange={set('cidade')} />
    </div>
  );
}
