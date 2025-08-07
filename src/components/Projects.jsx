import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from './UI/Button';

const projects = [
  {
    title: 'Application Mobile de Transfert de Données Locales',
    description: 'Développement d\'une application mobile en Python pour le transfert de données locales chez Yaangre Tech.',
    technologies: ['Python', 'Mobile Development', 'Data Transfer'],
    image: '/assets/local_transfert.png',
    company: 'Yaangre Tech - Stage',
    location: 'Ouagadougou, Burkina Faso',
    url: '#',
  },
  {
    title: 'Application d\'Apprentissage des Verbes Irréguliers Anglais',
    description: 'Application mobile Flutter pour l\'apprentissage des verbes irréguliers en anglais.',
    technologies: ['Flutter', 'Dart', 'Mobile Development'],
    image: '/assets/irregular_verb.png',
    company: 'Yaangre Tech - Stage',
    location: 'Ouagadougou, Burkina Faso',
    url: '#',
  },
  {
    title: 'Interface Admin Silmas SAS',
    description: 'Développement du frontend admin pour le site web Silmas SAS avec React.js et Tailwind CSS.',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js'],
    image: '/assets/silma.png',
    company: 'Yaangre Tech - Stage',
    location: 'Ouagadougou, Burkina Faso',
    url: '#',
  },
  {
    title: 'Frontend Deep Learning - Segmentation d\'Images Médicales',
    description: 'Développement du frontend pour un modèle de deep learning de segmentation d\'images médicales de lésions de cancer du col de l\'utérus dans le programme FTL.',
    technologies: ['React.js', 'Deep Learning', 'Medical Imaging', 'Computer Vision'],
    image: '/assets/Neuronext.png',
    company: 'Projet d\'équipe',
    location: 'Programme FTL',
    url: '#',
  },
  {
    title: 'Modèle d\'Analyse de Sentiments',
    description: 'Développement d\'un modèle d\'analyse de sentiments pour l\'analyse de texte.',
    technologies: ['Python', 'Machine Learning', 'NLP', 'Scikit-learn'],
    image: '/assets/sentiment_a.png',
    company: 'Projet personnel',
    location: 'Ouagadougou, Burkina Faso',
    url: '#',
  },
  {
    title: 'Backend Bimades Web App avec Chatbot',
    description: 'Développement du backend de l\'application web Bimades incluant un chatbot intelligent.',
    technologies: ['Node.js', 'API Development', 'Chatbot', 'Database'],
    image: '/assets/Bimades.jpg',
    company: 'Projet professionnel',
    location: 'Ouagadougou, Burkina Faso',
    url: '#',
  },
  {
    title: 'Site Web Fédération Burkinabé de Football',
    description: 'Développement du site web de la Fédération Burkinabé de Football en équipe avec WordPress.',
    technologies: ['WordPress', 'PHP', 'Web Development', 'CMS'],
    image: '/assets/FBF.jpg',
    company: 'Projet d\'équipe',
    location: 'Ouagadougou, Burkina Faso',
    url: '#',
  },
  {
    title: 'Application Mobile Intelligente - Détection Automatique de Maladies d\'Oignons',
    description: 'Application mobile intelligente pour la détection automatique de maladies d\'oignons utilisant la vision par ordinateur et le modèle YOLOv10x. Projet de thèse de licence.',
    technologies: ['Flutter', 'Computer Vision', 'YOLOv10x', 'AI/ML', 'Mobile Development'],
    image: '/assets/onion (1).png',
    company: 'Projet de thèse de licence',
    location: 'Burkina Faso',
    featured: true,
    url: '#',
  },
];

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

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
          Mes Projets
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
                    Projet Principal
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
                <div className="mb-3">
                  <p className="text-xs text-gray-400 mb-1">
                    <span className="font-semibold">Entreprise:</span> {project.company}
                  </p>
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold">Lieu:</span> {project.location}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="primary"
                  onClick={() => window.open(project.url, '_blank')}
                  className="text-sm"
                >
                  Voir le Projet
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;