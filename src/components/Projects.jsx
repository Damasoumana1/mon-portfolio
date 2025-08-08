import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from './UI/Button';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations/translations';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { language } = useLanguage();

  const projects = projectsData[language] || projectsData.fr;

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-blue-400"
        >
          {getTranslation(language, 'projects.title')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`rounded-lg shadow-lg overflow-hidden ${project.featured ? 'ring-2 ring-blue-400' : ''}`} style={{ backgroundColor: 'var(--bg-primary)' }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    {getTranslation(language, 'projects.mainProject')}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
                <div className="mb-3">
                  <p className="text-xs text-gray-400 mb-1">
                    <span className="font-semibold">{getTranslation(language, 'projects.company')}:</span> {project.company}
                  </p>
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold">{getTranslation(language, 'projects.location')}:</span> {project.location}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button
                    variant="primary"
                    onClick={() => window.open(project.url, '_blank')}
                    className="text-sm flex-1 min-w-0"
                  >
                    {getTranslation(language, 'projects.viewProject')}
                  </Button>
                  {project.videoUrl && (
                    <Button
                      variant="secondary"
                      onClick={() => window.open(project.videoUrl, '_blank')}
                      className="text-sm flex-1 min-w-0 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      {getTranslation(language, 'projects.viewVideo')}
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;