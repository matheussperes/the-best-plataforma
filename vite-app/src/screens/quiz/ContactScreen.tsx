import { useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Display } from '../../components/primitives/Display';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Button } from '../../components/primitives/Button';
import { BackBtn } from './BackBtn';
import { PRAZO_OPTIONS } from '../../data/quizData';
import type { ContatoData } from '../../data/quizData';

interface ContactScreenProps {
  initialData: ContatoData;
  onSubmit: (data: ContatoData) => void;
  onBack: () => void;
}

function Field({
  label, placeholder, type = 'text', value, onChange, required = false,
}: {
  label: string; placeholder: string; type?: string;
  value: string; onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <label style={{
        fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 600,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'var(--pewter)',
      }}>
        {label}{required && <span style={{ color: 'var(--champagne)', marginLeft: 4 }}>*</span>}
      </label>
      <input
        className="ds-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

export function ContactScreen({ initialData, onSubmit, onBack }: ContactScreenProps) {
  const isMobile = useIsMobile();
  const [data, setData] = useState<ContatoData>(initialData);

  const set = (key: keyof ContatoData) => (v: string) =>
    setData(d => ({ ...d, [key]: v }));

  const canSubmit =
    data.nome.trim().length > 0 &&
    data.whatsapp.trim().length > 0 &&
    data.cidade.trim().length > 0 &&
    data.prazo.length > 0;

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
          <img
            src="/assets/images/imgQuarto03.jpg"
            alt=""
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', filter: 'saturate(.8)',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(14,15,17,.45) 0%, rgba(14,15,17,.88) 100%)',
          }} />
          <div style={{
            position: 'relative', padding: '120px 48px', height: '100%',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            boxSizing: 'border-box',
          }}>
            <p className="ds-body-sm" style={{ color: 'var(--pewter)', lineHeight: 1.8 }}>
              Seu retrato emocional está quase pronto.<br />
              Onde devemos enviá-lo?
            </p>
          </div>
        </aside>
      )}

      {/* Formulário */}
      <main style={{
        padding: isMobile ? '100px 24px 60px' : '80px 96px',
        display: 'flex', alignItems: 'flex-start',
        overflowY: 'auto',
      }}>
        <div style={{ width: '100%', maxWidth: 680 }}>
          <Eyebrow style={{ marginBottom: 16 }}>Quase lá · seus dados</Eyebrow>

          <Display size={48} style={{ lineHeight: 1.08 }}>
            Para onde enviamos<br />seu *retrato*?
          </Display>

          {/* Campos de contato */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 28 : 36,
            marginTop: 48,
          }}>
            <Field
              label="Nome"
              placeholder="Como podemos chamá-lo"
              value={data.nome}
              onChange={set('nome')}
              required
            />
            <Field
              label="WhatsApp"
              placeholder="+55 19 9 0000-0000"
              type="tel"
              value={data.whatsapp}
              onChange={set('whatsapp')}
              required
            />
            <Field
              label="E-mail"
              placeholder="voce@empresa.com.br"
              type="email"
              value={data.email ?? ''}
              onChange={set('email')}
            />
            <Field
              label="Cidade"
              placeholder="Campinas / SP"
              value={data.cidade}
              onChange={set('cidade')}
              required
            />
          </div>

          {/* Campo Prazo */}
          <div style={{ marginTop: 48 }}>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 600,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--pewter)', marginBottom: 20,
            }}>
              Prazo para iniciar o projeto<span style={{ color: 'var(--champagne)', marginLeft: 4 }}>*</span>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}>
              {PRAZO_OPTIONS.map(opt => {
                const isSelected = data.prazo === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => set('prazo')(opt.id)}
                    style={{
                      textAlign: 'left', cursor: 'pointer',
                      padding: '10px 16px',
                      background: isSelected ? 'var(--champagne-soft)' : 'var(--antracite)',
                      border: `1px solid ${isSelected ? 'var(--champagne)' : 'var(--carvao)'}`,
                      borderRadius: 0,
                      transition: 'all 300ms var(--ease-lux)',
                      fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 400,
                      color: isSelected ? 'var(--champagne)' : 'var(--marfim)',
                    }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ações */}
          <div style={{
            marginTop: 48,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 16,
            alignItems: isMobile ? 'stretch' : 'center',
          }}>
            <Button
              onClick={() => canSubmit && onSubmit(data)}
              style={{
                ...(!canSubmit ? { opacity: 0.35, pointerEvents: 'none' } : {}),
                ...(isMobile ? { padding: '18px 24px' } : {}),
              }}
            >
              Ver meu retrato emocional
            </Button>
            <BackBtn inline onClick={onBack} />
          </div>
        </div>
      </main>
    </div>
  );
}
