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
            {/* Item 1 - Bachelor (right on desktop, stacked on mobile) */}
            <div className="flex flex-col md:flex-row items-center mb-8 w-full">
              <div className="md:w-5/12 w-full"></div>
              <div className="md:w-2/12 w-full flex md:justify-center justify-start my-3 md:my-0">
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm0-8a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-5/12 w-full bg-white p-4 md:p-6 rounded-lg shadow-md break-words whitespace-normal">
                <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">{getTranslation(language, 'formation.bachelorSchool')}</h3>
                <ul className="list-disc pl-5 text-sm md:text-base text-gray-600 space-y-1 mb-3">
                  <li><strong>{getTranslation(language, 'formation.bachelorDegree')}</strong></li>
                  <li>{getTranslation(language, 'formation.bachelorSpecialization')}</li>
                  <li>{getTranslation(language, 'formation.bachelorCGPA')}</li>
                </ul>

                <div className="text-sm md:text-base text-gray-600 mb-3">
                  <p className="font-semibold">{getTranslation(language, 'formation.bachelorThesis')}</p>
                  <p className="mt-2">"{getTranslation(language, 'formation.bachelorThesisTitle')}"</p>
                  <p className="mt-2">{getTranslation(language, 'formation.bachelorThesisSupervisor')}</p>
                </div>

                <div className="text-sm md:text-base text-gray-600 mb-3">
                  <p className="font-semibold mb-1">{getTranslation(language, 'formation.bachelorProject')}</p>
                  <p className="mb-1">{getTranslation(language, 'formation.bachelorProjectDesc')}</p>
                  <p>{getTranslation(language, 'formation.bachelorProjectDetails')}</p>
                </div>

                <p className="text-sm md:text-base text-gray-600 font-semibold">2022 - 2025</p>
              </div>
            </div>

            {/* Item 2 - High School (left on desktop, stacked on mobile) */}
            <div className="flex flex-col md:flex-row items-center mb-8 w-full">
              <div className="md:w-5/12 w-full bg-white p-4 rounded-lg shadow-md order-3 md:order-1 break-words whitespace-normal">
                <h3 className="text-lg md:text-xl font-semibold text-blue-600">{getTranslation(language, 'formation.degree2')}</h3>
                <p className="text-sm md:text-base text-gray-600">{getTranslation(language, 'formation.school2')}</p>
                <p className="text-sm md:text-base text-gray-600">{getTranslation(language, 'formation.years2')}</p>
              </div>
              <div className="md:w-2/12 w-full flex md:justify-center justify-start my-3 md:my-0 order-2">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              </div>
              <div className="md:w-5/12 w-full order-1 md:order-3"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Formation;
