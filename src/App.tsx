import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Values from './components/Values';
import CTA from './components/CTA';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans">
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <Values />
      <CTA />
      <Contact />
    </div>
  );
}

export default App;