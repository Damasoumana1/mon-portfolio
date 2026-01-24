import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { useEffect, lazy, Suspense } from 'react';
import { useLanguage } from './contexts/LanguageContext';
import { getTranslation } from './translations/translations';

// Lazy load heavy components for better performance
const About = lazy(() => import('./components/About'));
const Formation = lazy(() => import('./components/Formation'));
const Certificates = lazy(() => import('./components/Certificates'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

// Loading component
const LoadingFallback = () => (
  <div style={{
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-primary)'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid var(--accent)',
        borderTopColor: 'transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 10px'
      }}></div>
      <p>Chargement...</p>
    </div>
  </div>
);

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
      <Suspense fallback={<LoadingFallback />}>
        <About />
        <Formation />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </Suspense>
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