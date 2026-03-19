import React, { useState } from 'react';
import { Navbar, Footer } from './components/Layout';
import { Hero, Features, BentoGrid, CTA } from './components/Home';
import { Assessment } from './components/Assessment';
import { Results } from './components/Results';
import { PhoneRecommendation } from './services/geminiService';

enum Screen {
  Home,
  Assessment,
  Results
}

export default function App() {
  const [screen, setScreen] = useState<Screen>(Screen.Home);
  const [result, setResult] = useState<PhoneRecommendation | null>(null);

  const handleStart = () => {
    setScreen(Screen.Assessment);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleComplete = (recommendation: PhoneRecommendation) => {
    setResult(recommendation);
    setScreen(Screen.Results);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setResult(null);
    setScreen(Screen.Home);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-fixed">
      <Navbar onStart={handleStart} />
      
      <main>
        {screen === Screen.Home && (
          <>
            <Hero onStart={handleStart} />
            <Features />
            <BentoGrid onStart={handleStart} />
            <CTA onStart={handleStart} />
          </>
        )}

        {screen === Screen.Assessment && (
          <Assessment onComplete={handleComplete} />
        )}

        {screen === Screen.Results && result && (
          <Results result={result} onRestart={handleRestart} />
        )}
      </main>

      <Footer />
    </div>
  );
}
