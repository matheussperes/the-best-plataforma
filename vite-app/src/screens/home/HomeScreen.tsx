import { Footer } from '../../components/layout/Footer';
import { Hero } from './Hero';
import { Manifesto } from './Manifesto';
import { MetodoSection } from './MetodoSection';
import { NumerosSection } from './NumerosSection';
import { QuizCTASection } from './QuizCTASection';
import { DepoimentosSection } from './DepoimentosSection';
import { JornadaClienteSection } from './JornadaClienteSection';
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
      <MetodoSection />
      <NumerosSection />
      <QuizCTASection onNavigate={onNavigate} />
      <DepoimentosSection />
      <JornadaClienteSection />
      <PortfolioTeaser onNavigate={onNavigate} />
      <QuoteSection />
      <CTAStrip onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
