import { Footer } from '../../components/layout/Footer';
import { Hero } from './Hero';
import { Manifesto } from './Manifesto';
import { PortfolioTeaser } from './PortfolioTeaser';
import { QuoteSection } from './QuoteSection';
import { CTAStrip } from './CTAStrip';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <Manifesto />
      <PortfolioTeaser onNavigate={onNavigate} />
      <QuoteSection />
      <CTAStrip onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
