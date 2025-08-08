import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations/translations';
import { useEffect, useState } from 'react';

const Footer = () => {
  const { language } = useLanguage();
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/soumanadama-portfolio/visits')
      .then(res => res.json())
      .then(data => setVisits(data.value))
      .catch(() => setVisits('—'));
  }, []);

  return (
    <footer className="py-8" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 sm:mb-0"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-bold text-blue-400 mb-2"
            >
              Soumana Dama
            </motion.div>
            <p className="text-gray-300">{getTranslation(language, 'footer.tagline')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex space-x-4"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 15 }}
              href="https://github.com/Damasoumana1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400"
              title={getTranslation(language, 'footer.socialLinks.github')}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21 .69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 15 }}
              href="https://www.linkedin.com/in/soumana-dama-445096253/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400"
              title={getTranslation(language, 'footer.socialLinks.linkedin')}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V9h3v10zM6.5 8C5.671 8 5 7.329 5 6.5S5.671 5 6.5 5 8 5.671 8 6.5 7.329 8 6.5 8zM19 19h-3v-5.344c0-1.329-.027-3.038-1.853-3.038-1.853 0-2.137 1.447-2.137 2.941V19h-3V9h2.882v1.225c.4-.768 1.36-1.588 2.798-1.588 2.99 0 3.347 1.964 3.347 4.792V19z" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 15 }}
              href="https://www.facebook.com/soumana.dama.58"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400"
              title={getTranslation(language, 'footer.socialLinks.facebook')}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 15 }}
              href="mailto:soumanadama93@gmail.com"
              className="text-gray-300 hover:text-blue-400"
              title={getTranslation(language, 'footer.socialLinks.email')}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h8v2H6v-2zm0 4h8v2H6v-2zm10 0h2v2h-2v-2zm0-4h2v2h-2v-2z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <div className="flex flex-col items-center mb-4 sm:mb-0">
            <p className="text-gray-400 text-sm">© 2025 Soumana DAMA. {getTranslation(language, 'footer.rights')}</p>
            <p className="text-xs text-blue-300 mt-1">{visits !== null ? `👁️ ${visits} visiteurs` : '...'}</p>
          </div>
          <div className="flex space-x-6">
            <motion.a
              whileHover={{ scale: 1.1, color: '#3b82f6' }}
              href="#about"
              className="text-gray-300 hover:text-blue-400"
            >
              {getTranslation(language, 'nav.about')}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: '#3b82f6' }}
              href="#projects"
              className="text-gray-300 hover:text-blue-400"
            >
              {getTranslation(language, 'nav.projects')}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: '#3b82f6' }}
              href="#contact"
              className="text-gray-300 hover:text-blue-400"
            >
              {getTranslation(language, 'nav.contact')}
            </motion.a>
          </div>
        </div>
        {/* Ajout d'un bouton "Retour en haut" */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 text-center"
        >
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-blue-400 cursor-pointer flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l-8 8h6v12h4V10h6l-8-8z" />
            </svg>
            {getTranslation(language, 'footer.backToTop')}
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;