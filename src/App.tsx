import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import CTA from './components/CTA';
import Footer from './components/Footer';
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
          <Footer />
        </>
      ) : (
        <Terminal onExit={() => setShowTerminal(false)} />
      )}
    </>
  );
}

export default App;
