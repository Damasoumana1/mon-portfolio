import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations/translations';

const Formation = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { language } = useLanguage();

  return (
    <section id="formation" className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-blue-400"
        >
          {getTranslation(language, 'formation.title')}
        </motion.h2>
        <div className="relative">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center mb-8 w-full justify-end">
              <div className="w-5/12 bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600">{getTranslation(language, 'formation.degree1')}</h3>
                <p className="text-gray-600">{getTranslation(language, 'formation.school1')}</p>
                <p className="text-gray-600">{getTranslation(language, 'formation.years1')}</p>
              </div>
              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm0-8a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                </div>
              </div>
              <div className="w-5/12"></div>
            </div>
            <div className="flex items-center mb-8 w-full">
              <div className="w-5/12"></div>
              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              </div>
              <div className="w-5/12 bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600">{getTranslation(language, 'formation.degree2')}</h3>
                <p className="text-gray-600">{getTranslation(language, 'formation.school2')}</p>
                <p className="text-gray-600">{getTranslation(language, 'formation.years2')}</p>
              </div>
            </div>
          </motion.div>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-400" style={{ top: '-20px' }}>
            {/* tyle={{ top: '-20px' }} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;