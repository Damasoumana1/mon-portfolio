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
            {/* Bachelor (detailed, responsive) */}
            <div className="w-full mb-8">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md break-words whitespace-normal">
                <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">Burkina Institute of Technology, Koudougou, Burkina Faso</h3>
                <ul className="list-disc pl-5 text-sm md:text-base text-gray-600 space-y-1 mb-3">
                  <li><strong>B.Sc. in computer science</strong></li>
                  <li>Specialization: Programing and Entrepreneurship</li>
                  <li>CGPA Equivalent: 3.7/4.0</li>
                </ul>

                <div className="text-sm md:text-base text-gray-600 mb-3">
                  <p className="font-semibold">Third year Bachelor’s thesis defense: Grade 19/20 (equivalent to an A grade 4.0/4.0) — Excellent distinction</p>
                  <p className="mt-2">“Development of an Intelligent Mobile Application for Automated Detection of Onion Diseases Using Computer Vision – Case of Burkina Faso.”</p>
                  <p className="mt-2">Supervised by Dr Rachid Gaetan NABOLLE of BIT.</p>
                </div>

                <div className="text-sm md:text-base text-gray-600 mb-3">
                  <p className="font-semibold mb-1">Project — OnionScan</p>
                  <p className="mb-1">Built <strong>OnionScan</strong>, a deep learning–based application using <strong>YOLOv10-X</strong> for real-time disease detection on onion crops.</p>
                  <p>Integrated smartphone &amp; drone imagery for sustainable agriculture.</p>
                </div>

                <p className="text-sm md:text-base text-gray-600 font-semibold">2022 - 2025</p>
              </div>
            </div>

            {/* Item 1 (right on desktop, stacked on mobile) */}
            <div className="flex flex-col md:flex-row items-center mb-8 w-full">
              <div className="md:w-5/12 w-full"></div>
              <div className="md:w-2/12 w-full flex md:justify-center justify-start my-3 md:my-0">
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm0-8a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-5/12 w-full bg-white p-4 rounded-lg shadow-md break-words whitespace-normal">
                <h3 className="text-lg md:text-xl font-semibold text-blue-600">{getTranslation(language, 'formation.degree1')}</h3>
                <p className="text-sm md:text-base text-gray-600">{getTranslation(language, 'formation.school1')}</p>
                <p className="text-sm md:text-base text-gray-600">{getTranslation(language, 'formation.years1')}</p>
              </div>
            </div>

            {/* Item 2 (left on desktop, stacked on mobile) */}
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