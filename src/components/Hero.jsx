import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Button from './UI/Button.jsx';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations/translations';

const Hero = () => {
  const { language } = useLanguage();

  const handleDownloadCV = () => {
    // Créer un lien temporaire pour télécharger le CV
    const link = document.createElement('a');
    // Le fichier s'appelle "Soumana DAMA__CV.pdf" dans `public/assets`
    link.href = '/assets/Soumana%20DAMA__CV.pdf';
    link.download = 'Soumana DAMA__CV.pdf';
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
              className="text-5xl md:text-6xl font-bold text-blue-400 mb-4"
            >
              {getTranslation(language, 'hero.name')}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-3xl md:text-4xl font-semibold text-gray-300 mb-6"
            >
              {getTranslation(language, 'hero.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg text-gray-400 mb-8 max-w-md mx-auto lg:mx-0"
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
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
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
                  src="/assets/pro Dama.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
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
          className="mt-8 text-center overflow-hidden"
        >
          <motion.div
            className="inline-block"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          >
            <p className="text-lg text-blue-400 font-semibold whitespace-nowrap inline-block">
              {getTranslation(language, 'hero.welcomeMessage')}
            </p>
          </motion.div>
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