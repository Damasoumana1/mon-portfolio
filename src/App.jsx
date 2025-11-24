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
import { LanguageProvider } from './contexts/LanguageContext';
import { useEffect } from 'react';
import { useLanguage } from './contexts/LanguageContext';
import { getTranslation } from './translations/translations';

function AppContent() {
  const { language } = useLanguage();

  useEffect(() => {
    // Mettre à jour le titre de la page selon la langue
    const title = getTranslation(language, 'hero.pageTitle');
    document.title = title;
  }, [language]);

  return (
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
  );
}

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;