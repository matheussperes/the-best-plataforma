import { useIsMobile } from '../../hooks/useIsMobile';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import type { Project } from '../../data/projects';

interface LightboxProps {
  project: Project | null;
  onClose: () => void;
}

export function Lightbox({ project, onClose }: LightboxProps) {
  const isMobile = useIsMobile();
  if (!project) return null;

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(14,15,17,.96)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: isMobile ? 16 : 64,
      animation: 'fadeIn 400ms var(--ease-lux)',
    }}>
      <div onClick={e => e.stopPropagation()} style={{ maxWidth: 1100, width: '100%' }}>
        <img src={project.img} alt="" style={{
          width: '100%',
          maxHeight: isMobile ? '55vh' : '72vh',
          objectFit: 'cover', display: 'block',
        }} />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          flexDirection: isMobile ? 'column' : 'row',
          marginTop: 20, gap: 16,
        }}>
          <div>
            <Eyebrow>{project.amb} · {project.local}</Eyebrow>
            <div style={{
              fontFamily: 'var(--serif-display)', fontWeight: 300,
              fontSize: isMobile ? 28 : 40,
              color: 'var(--marfim)', marginTop: 10,
            }}>{project.ttl}</div>
          </div>
          <button onClick={onClose} style={{
            background: 'none', border: '1px solid var(--carvao)',
            color: 'var(--marfim)',
            padding: isMobile ? '14px 28px' : '12px 24px',
            cursor: 'pointer', fontFamily: 'var(--sans)',
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            width: isMobile ? '100%' : 'auto',
          }}>Fechar</button>
        </div>
      </div>
    </div>
  );
}
