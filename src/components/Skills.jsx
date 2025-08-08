import { motion } from 'framer-motion';
import Card from './UI/Card.jsx';
import ProgressBar from './UI/ProgressBar.jsx';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations/translations';

const Skills = () => {
  const { language } = useLanguage();
  const technicalSkills = [
    { name: 'Python', level: 85 },
    { name: 'Flutter', level: 80 },
    { name: 'React.js', level: 75 },
    { name: 'JavaScript/TypeScript', level: 70 },
    { name: 'Node.js', level: 70 },
    { name: 'Angular', level: 65 },
    { name: 'Django', level: 75 },
    { name: 'Laravel', level: 60 },

  ];

  const aiDataSkills = [
    { name: 'Développement IA', level: 80 },
    { name: 'TensorFlow/PyTorch', level: 75 },
    { name: 'OpenCV', level: 70 },
    { name: 'Pandas/NumPy', level: 85 },
    { name: 'Scikit-learn', level: 75 },
    { name: 'Matplotlib/Seaborn', level: 80 },
    { name: 'R', level: 65 },
    { name: 'Tableau', level: 70 },
  ];

  const apiDatabaseSkills = [
    { name: 'FastAPI', level: 80 },
    { name: 'Flask', level: 75 },
    { name: 'RESTful API', level: 85 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MySQL', level: 70 },
    { name: 'MongoDB', level: 65 },
    { name: 'SQLite', level: 80 },
    { name: 'Swagger', level: 75 },
  ];

  const toolsSkills = [
    { name: 'GitHub', level: 80 },
    { name: 'Figma/Canvas', level: 70 },
    { name: 'Microsoft Office', level: 85 },
    { name: 'VBA', level: 65 },
    { name: 'Streamlit', level: 75 },
    { name: 'Weight & Biases', level: 70 },
  ];

  const personalSkills = getTranslation(language, 'skills.personalSkillsList');

  const interests = getTranslation(language, 'skills.interestsList');

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-blue-400"
        >
          {getTranslation(language, 'skills.title')}
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              {getTranslation(language, 'skills.webMobile')}
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <ProgressBar key={skill.name} label={skill.name} value={skill.level} />
              ))}
            </div>
            <h3 className="text-2xl font-semibold mt-8 mb-6 text-blue-600 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              {getTranslation(language, 'skills.aiDataScience')}
            </h3>
            <div className="space-y-4">
              {aiDataSkills.map((skill, index) => (
                <ProgressBar key={skill.name} label={skill.name} value={skill.level} />
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              {getTranslation(language, 'skills.apiDatabase')}
            </h3>
            <div className="space-y-4">
              {apiDatabaseSkills.map((skill, index) => (
                <ProgressBar key={skill.name} label={skill.name} value={skill.level} />
              ))}
            </div>
            <h3 className="text-2xl font-semibold mt-8 mb-6 text-blue-600 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              {getTranslation(language, 'skills.tools')}
            </h3>
            <div className="space-y-4">
              {toolsSkills.map((skill, index) => (
                <ProgressBar key={skill.name} label={skill.name} value={skill.level} />
              ))}
            </div>
          </Card>
        </div>

        {/* Compétences personnelles et centres d'intérêt */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              {getTranslation(language, 'skills.personalSkills')}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {personalSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center text-white"
                >
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v6a1 1 0 102 0V5z" clipRule="evenodd" />
                  </svg>
                  {skill}
                </motion.div>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              {getTranslation(language, 'skills.interests')}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center text-white"
                >
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v6a1 1 0 102 0V5z" clipRule="evenodd" />
                  </svg>
                  {interest}
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;