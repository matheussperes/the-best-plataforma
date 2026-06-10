import { useIsMobile } from '../../hooks/useIsMobile';
import { Rule } from '../primitives/Rule';
import { FooterCol } from './FooterCol';

interface FooterProps {
  onNavigate: (screen: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const isMobile = useIsMobile();
  return (
    <footer style={{
      background: 'var(--noir)',
      borderTop: '1px solid var(--carvao)',
      padding: isMobile ? '64px 24px 40px' : '96px 64px 56px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40 }}>
        <div style={{ maxWidth: 380 }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 18,
            letterSpacing: '0.34em', color: 'var(--marfim)', paddingLeft: '0.34em',
          }}>THE BEST</div>
          <Rule w={80} style={{ margin: '16px 0 14px' }} />
          <p className="ds-body-sm" style={{ color: 'var(--pewter)', margin: 0, lineHeight: 1.7 }}>
            Marcenaria planejada de alto padrão.<br />
            Onze anos transformando espaços em assinatura.
          </p>
        </div>
        <div style={{ display: 'flex', gap: isMobile ? 48 : 72, flexWrap: 'wrap' }}>
          <FooterCol
            title="Navegar"
            items={['Início', 'Portfólio', 'O Construtor']}
            onNavigate={onNavigate}
          />
          <FooterCol
            title="Contato"
            items={['Campinas / SP', 'contato@thebest.com.br', '+55 19 9 9999-0000']}
          />
        </div>
      </div>
      <div style={{
        marginTop: 56, paddingTop: 24,
        borderTop: '1px solid var(--carvao)',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10,
      }}>
        <span className="ds-body-sm" style={{ color: 'var(--pewter)' }}>
          © 2026 THE BEST Móveis Planejados · desde 2014
        </span>
        <span className="ds-body-sm" style={{ color: 'var(--pewter)' }}>
          Campinas · São Paulo · Brasil
        </span>
      </div>
    </footer>
  );
}
