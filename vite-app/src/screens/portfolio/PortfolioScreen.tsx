import { useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Eyebrow } from '../../components/primitives/Eyebrow';
import { Display } from '../../components/primitives/Display';
import { Reveal } from '../../components/shared/Reveal';
import { ProjectCard } from '../../components/shared/ProjectCard';
import { Footer } from '../../components/layout/Footer';
import { PROJECTS, FILTERS } from '../../data/projects';
import type { Project } from '../../data/projects';
import { Chip } from './Chip';
import { Lightbox } from './Lightbox';

interface PortfolioScreenProps {
  onNavigate: (screen: string) => void;
}

export function PortfolioScreen({ onNavigate }: PortfolioScreenProps) {
  const [filter, setFilter] = useState('Todos');
  const [open, setOpen] = useState<Project | null>(null);
  const isMobile = useIsMobile();

  const shown = filter === 'Todos' ? PROJECTS : PROJECTS.filter(p => p.amb === filter);

  return (
    <div style={{ background: 'var(--noir)', minHeight: '100dvh' }}>
      <header style={{ padding: isMobile ? '100px 24px 48px' : '200px 120px 64px' }}>
        <Reveal><Eyebrow>Portfólio · 11 anos de projetos</Eyebrow></Reveal>
        <Reveal delay={120} style={{ marginTop: 24 }}>
          <Display size={88}>Espaços que carregam{'\n'}uma *assinatura*.</Display>
        </Reveal>
      </header>

      <div style={{
        padding: isMobile ? '0 24px 32px' : '0 120px 56px',
        display: 'flex', gap: 10, flexWrap: 'wrap',
        borderBottom: '1px solid var(--carvao)',
      }}>
        {FILTERS.map(f => (
          <Chip key={f} label={f} active={filter === f} onClick={() => setFilter(f)} />
        ))}
      </div>

      <div style={{ padding: isMobile ? '32px 24px 80px' : '64px 120px 160px' }}>
        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {shown.map((p, i) => (
              <ProjectCard key={p.ttl + i} {...p} square onClick={() => setOpen(p)} />
            ))}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {shown.map((p, i) => (
              <ProjectCard key={p.ttl + i} {...p} square onClick={() => setOpen(p)} />
            ))}
          </div>
        )}
      </div>

      <Footer onNavigate={onNavigate} />
      <Lightbox project={open} onClose={() => setOpen(null)} />
    </div>
  );
}
