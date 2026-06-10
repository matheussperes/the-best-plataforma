import React, { useRef } from 'react';
import { Nav } from './components/layout/Nav';
import { HomeScreen } from './screens/home/HomeScreen';
import { PortfolioScreen } from './screens/portfolio/PortfolioScreen';
import { QuizScreen } from './screens/quiz/QuizScreen';

type Screen = 'home' | 'portfolio' | 'quiz';

export function App() {
  const [screen, setScreen] = React.useState<Screen>('home');
  const scrollRef = useRef<HTMLDivElement>(null);

  const navigate = (s: string) => {
    setScreen(s as Screen);
    requestAnimationFrame(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    });
  };

  return (
    <React.Fragment>
      <Nav current={screen} onNavigate={navigate} />
      <div data-scroll ref={scrollRef} key={screen}>
        {screen === 'home'      && <HomeScreen onNavigate={navigate} />}
        {screen === 'portfolio' && <PortfolioScreen onNavigate={navigate} />}
        {screen === 'quiz'      && <QuizScreen onNavigate={navigate} />}
      </div>
    </React.Fragment>
  );
}
