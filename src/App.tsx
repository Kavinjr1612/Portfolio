import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
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
      <div className="bg-blob"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <AwsProjects />
        <AppProjects />
        <UtilityProjects />
        <Experience />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} Kavinesh S R. Built with React & Vite.</p>
      </footer>
    </>
  );
}

export default App;
