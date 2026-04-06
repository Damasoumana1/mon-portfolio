import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations/translations';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { language } = useLanguage();

  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-blue-400"
        >
          {getTranslation(language, 'about.title')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-gray-300"
            style={{ color: 'var(--text-secondary)' }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">{getTranslation(language, 'about.whoAmI')}</h3>
            <p className="mb-4">
              {getTranslation(language, 'about.whoAmIText1')}
            </p>
            <p>
              {getTranslation(language, 'about.whoAmIText2')}
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ color: 'var(--text-secondary)' }}
          >
            <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text-secondary)' }}>{getTranslation(language, 'about.personalInfo')}</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" style={{ color: 'var(--text-secondary)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span style={{ color: 'var(--text-secondary)' }}>{getTranslation(language, 'about.location')}: Ouagadougou, Burkina Faso</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" style={{ color: 'var(--text-secondary)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h8v2H6v-2zm0 4h8v2H6v-2zm10 0h2v2h-2v-2zm0-4h2v2h-2v-2z" />
                </svg>
                <span style={{ color: 'var(--text-secondary)' }}>{getTranslation(language, 'about.phone')}: +226 64011171</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h8v2H6v-2zm0 4h8v2H6v-2zm10 0h2v2h-2v-2zm0-4h2v2h-2v-2z" />
                </svg>
                <span style={{ color: 'var(--text-secondary)' }}>{getTranslation(language, 'about.email')}: soumanadama93@gmail.com</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ color: 'var(--text-secondary)' }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">{getTranslation(language, 'about.languages')}</h3>
            <div className="space-y-4">
              <p style={{ color: 'var(--text-secondary)' }}>{getTranslation(language, 'about.languagesList')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;