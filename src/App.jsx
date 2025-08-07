import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Formation from './components/Formation';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <Navbar />
        <Hero />
        <About />
        <Formation />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;