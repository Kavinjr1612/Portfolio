import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import AwsProjects from './components/sections/AwsProjects';
import AppProjects from './components/sections/AppProjects';
import UtilityProjects from './components/sections/UtilityProjects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <div className="aurora-bg">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <AwsProjects />
        <AppProjects />
        <UtilityProjects />
        <Experience />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem', position: 'relative', zIndex: 10 }}>
        <p>© {new Date().getFullYear()} Kavinesh S R. Built with React & Vite.</p>
      </footer>
    </>
  );
}

export default App;
