import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Button from './UI/Button.jsx';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations/translations';
import { trackCVDownload } from '../utils/analytics';

const Hero = () => {
  const { language } = useLanguage();

  const handleDownloadCV = () => {
    // Track the CV download event
    trackCVDownload();

    // Adapter le CV selon la langue (FR ou EN)
    const isFr = language === 'fr';
    const fileName = isFr ? 'Soumana_DAMA_CV.pdf' : 'Soumana_Dama_Resume.pdf';

    const link = document.createElement('a');
    link.href = `/assets/${fileName}`;
    link.download = fileName;
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne de gauche : Texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-lg text-gray-400 mb-2"
            >
              {getTranslation(language, 'hero.greeting')}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 mb-3"
            >
              {getTranslation(language, 'hero.name')}
            </motion.h1>

            {/* Badges d'élite : PyTorch Ambassador & Founder */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-2.5 justify-center lg:justify-start mb-4"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/30 shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-orange-400 mr-2 animate-pulse"></span>
                {getTranslation(language, 'hero.ambassadorBadge')}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30 shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                {getTranslation(language, 'hero.founderBadge')}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {getTranslation(language, 'hero.title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm sm:text-base font-semibold text-blue-400 tracking-wide mb-6 uppercase"
            >
              {getTranslation(language, 'hero.specialization')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {getTranslation(language, 'hero.description')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="contact" smooth={true} duration={500}>
                <Button className="w-full sm:flex-1">{getTranslation(language, 'hero.contactMe')}</Button>
              </Link>
              <Button
                onClick={handleDownloadCV}
                variant="secondary"
                className="w-full sm:flex-1 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3" />
                </svg>
                {getTranslation(language, 'hero.downloadCV')}
              </Button>
            </motion.div>
          </motion.div>
          {/* Colonne de droite : Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                    '0 0 40px rgba(59, 130, 246, 0.3)',
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400"
              >
                {/* Remplacez cette image par votre photo de profil */}
                <img
                  src="/assets/pro_dama.jpg"
                  alt="Soumana DAMA"
                  className="w-full h-full object-cover"
                  fetchpriority="high"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* Message de bienvenue avec effet de défilement amélioré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 text-center"
        >
          <p className="text-lg text-blue-400/80 font-medium italic">
            {getTranslation(language, 'hero.welcomeMessage')}
          </p>
        </motion.div>
        {/* Flèche animée */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link to="about" smooth={true} duration={500}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="cursor-pointer"
            >
              <svg className="w-10 h-10 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a1 1 0 00-1 1v12.586l-4.293-4.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 00-1.414-1.414L13 15.586V3a1 1 0 00-1-1z" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;