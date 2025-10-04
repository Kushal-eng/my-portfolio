import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Hero />
      <Stats />
      <Projects />
      <TechStack />
      <Publications />
      <Contact />
    </div>
  );
}

export default App;
