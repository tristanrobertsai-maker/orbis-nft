import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import CTA from './components/CTA';
import Terminal from './components/Terminal';

function App() {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <>
      {!showTerminal ? (
        <>
          <Hero onEnterTerminal={() => setShowTerminal(true)} />
          <About />
          <Collection />
          <CTA />
        </>
      ) : (
        <Terminal onExit={() => setShowTerminal(false)} />
      )}
    </>
  );
}

export default App;
