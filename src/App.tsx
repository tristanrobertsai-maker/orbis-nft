import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import CTA from './components/CTA';

function App() {
  return (
    <>
      <div className="texture-overlay"></div>
      <Hero />
      <About />
      <Collection />
      <CTA />
    </>
  );
}

export default App;
