import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from './UI/Card';

const certificates = [
  {
    id: 1,
    title: "From Zero to Hero - Digital Product Development from Scratch",
    organization: "Technical University of Munich",
    date: "2024",
    description: "Formation complète sur le développement de produits numériques depuis les bases jusqu'à la mise en production.",
    image: "/assets/certificates/cert1.jpg"
  },
  {
    id: 2,
    title: "Google Data Analytics Professional Certificate",
    organization: "Google",
    date: "2024",
    description: "Certification professionnelle en analyse de données avec Google, couvrant les outils et techniques d'analyse avancée.",
    image: "/assets/certificates/cert2.jpg"
  },
  {
    id: 3,
    title: "UN Volunteers in Community Communication and Administration Support",
    organization: "Nations Unies",
    date: "2023",
    description: "Certificat de volontariat des Nations Unies en communication communautaire et support administratif.",
    image: "/assets/certificates/cert3.jpg"
  },
  {
    id: 4,
    title: "Generative AI Overview for Project Managers",
    organization: "Project Management Institute",
    date: "2024",
    description: "Aperçu de l'intelligence artificielle générative pour les chefs de projet et managers.",
    image: "/assets/certificates/cert4.jpg"
  },
  {
    id: 5,
    title: "Hands-on Training on Developing Artificial Intelligence",
    organization: "Microsoft & Zindi Community",
    date: "2024",
    description: "Formation pratique sur le développement de l'IA avec Responsible AI Dashboard et Azure Content Security pour Azure Open AI.",
    image: "/assets/certificates/cert5.jpg"
  },
  {
    id: 6,
    title: "Online Security Specialist",
    organization: "Internet Society Burkina Faso Chapter",
    date: "2023",
    description: "Spécialisation en sécurité en ligne et protection des données sur Internet.",
    image: "/assets/certificates/cert6.jpg"
  },
  {
    id: 7,
    title: "Introduction to Artificial Intelligence",
    organization: "Institute De Montaigne",
    date: "2023",
    description: "Introduction aux concepts fondamentaux de l'intelligence artificielle et ses applications.",
    image: "/assets/certificates/cert7.jpg"
  },
  {
    id: 8,
    title: "10000 Coders Digital Passport Certificate",
    organization: "10000 Coders",
    date: "2024",
    description: "Certificat numérique attestant des compétences en codage et développement logiciel.",
    image: "/assets/certificates/cert8.jpg"
  },
  {
    id: 9,
    title: "Introduction to Responsible AI, LLM, Generative AI",
    organization: "Google Cloud",
    date: "2024",
    description: "Introduction à l'IA responsable, aux grands modèles linguistiques (LLM) et à l'IA générative avec Google Cloud.",
    image: "/assets/certificates/cert9.jpg"
  },
  {
    id: 10,
    title: "Training on How to Present Your Project in a Persuasive Way",
    organization: "Organisation Inconnue",
    date: "2023",
    description: "Formation sur les techniques de présentation persuasive de projets pour convaincre les parties prenantes.",
    image: "/assets/certificates/cert10.jpg"
  },
  {
    id: 11,
    title: "Certification in Digital Marketing with Artificial Intelligence",
    organization: "Organisation Inconnue",
    date: "2024",
    description: "Certification en marketing digital utilisant l'intelligence artificielle pour optimiser les résultats commerciaux.",
    image: "/assets/certificates/cert11.jpg"
  },
  {
    id: 12,
    title: "Canva Design Certificate",
    organization: "Canva",
    date: "2023",
    description: "Certificat de compétence en design graphique avec l'outil Canva pour la création visuelle.",
    image: "/assets/certificates/cert12.jpg"
  },
  {
    id: 13,
    title: "Training in Associative Leadership and Holding Effective Meetings",
    organization: "Organisation Inconnue",
    date: "2023",
    description: "Formation au leadership associatif et à l'organisation de réunions efficaces dans un contexte associatif.",
    image: "/assets/certificates/cert13.jpg"
  },
  {
    id: 14,
    title: "Social Media Manager Certificate",
    organization: "Organisation Inconnue",
    date: "2024",
    description: "Certification en gestion de médias sociaux pour le marketing digital et l'engagement communautaire.",
    image: "/assets/certificates/cert14.jpg"
  },
  {
    id: 15,
    title: "Success Mindset",
    organization: "Organisation Inconnue",
    date: "2024",
    description: "Formation sur le développement d'un mindset gagnant pour atteindre ses objectifs personnels et professionnels.",
    image: "/assets/certificates/cert15.jpg"
  },
  {
    id: 16,
    title: "Effective Leadership",
    organization: "Organisation Inconnue",
    date: "2024",
    description: "Certification en leadership efficace pour manager des équipes et diriger des projets.",
    image: "/assets/certificates/cert16.jpg"
  },
  {
    id: 17,
    title: "Certified as UPG Sustainability Leader 2024 for Positive Citizen Leadership",
    organization: "UPG",
    date: "2024",
    description: "Certification en leadership durable et citoyen pour un impact positif dans la communauté.",
    image: "/assets/certificates/cert17.jpg"
  },
  {
    id: 18,
    title: "HP Life : Basics of Finance",
    organization: "HP Life",
    date: "2024",
    description: "Formation aux bases de la finance pour entrepreneurs et petites entreprises.",
    image: "/assets/certificates/cert18.jpg"
  },
  {
    id: 19,
    title: "Design Thinking",
    organization: "Organisation Inconnue",
    date: "2024",
    description: "Certification en Design Thinking pour l'innovation et la résolution créative de problèmes.",
    image: "/assets/certificates/cert19.jpg"
  },
  {
    id: 20,
    title: "Finding Funding",
    organization: "Organisation Inconnue",
    date: "2024",
    description: "Formation sur les stratégies pour trouver des financements pour projets et entreprises.",
    image: "/assets/certificates/cert20.jpg"
  },
  {
    id: 21,
    title: "Introduction to Digital Business Skills",
    organization: "Organisation Inconnue",
    date: "2024",
    description: "Introduction aux compétences numériques essentielles pour les affaires modernes.",
    image: "/assets/certificates/cert21.jpg"
  },
  {
    id: 22,
    title: "Setting Prices",
    organization: "Organisation Inconnue",
    date: "2024",
    description: "Formation sur la stratégie de fixation des prix pour maximiser la rentabilité.",
    image: "/assets/certificates/cert22.jpg"
  },
  {
    id: 23,
    title: "Social Entrepreneurship",
    organization: "Organisation Inconnue",
    date: "2024",
    description: "Certification en entrepreneuriat social pour créer un impact positif tout en générant des revenus.",
    image: "/assets/certificates/cert23.jpg"
  },
  {
    id: 24,
    title: "Starting a Small Business",
    organization: "Organisation Inconnue",
    date: "2024",
    description: "Formation complète pour démarrer et gérer une petite entreprise avec succès.",
    image: "/assets/certificates/cert24.jpg"
  },
  {
    id: 25,
    title: "Unique Value Proposition",
    organization: "Organisation Inconnue",
    date: "2024",
    description: "Formation sur la création d'une proposition de valeur unique pour se démarquer sur le marché.",
    image: "/assets/certificates/cert25.jpg"
  }
];

const Certificates = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="certificates" className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-blue-400"
        >
          Mes Certificats
        </motion.h2>
        {/* Certificats en Développement et Technologie */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400 border-b-2 border-blue-400 pb-2">
            Développement et Technologie
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates
              .filter(cert => [
                "From Zero to Hero - Digital Product Development from Scratch",
                "Google Data Analytics Professional Certificate",
                "10000 Coders Digital Passport Certificate",
                "Introduction to Digital Business Skills"
              ].includes(cert.title))
              .map((certificate) => (
                <motion.div
                  key={certificate.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: certificate.id * 0.1 }}
                >
                  <Card className="h-full flex flex-col bg-white">
                    <div className="flex-grow">
                      {certificate.image && (
                        <div className="mb-4">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center">
                            <span className="text-gray-500">Image du certificat</span>
                          </div>
                        </div>
                      )}
                      <h3 className="text-xl font-semibold mb-2 text-blue-600">{certificate.title}</h3>
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold">Organisation:</span> {certificate.organization}
                      </p>
                      <p className="text-gray-600 mb-3">
                        <span className="font-semibold">Date:</span> {certificate.date}
                      </p>
                      <p className="text-gray-700 mb-4">{certificate.description}</p>
                    </div>
                    <div className="mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                      >
                        Voir le Certificat
                      </motion.button>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
        
        {/* Certificats en Intelligence Artificielle */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400 border-b-2 border-blue-400 pb-2">
            Intelligence Artificielle
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates
              .filter(cert => [
                "Generative AI Overview for Project Managers",
                "Hands-on Training on Developing Artificial Intelligence",
                "Introduction to Artificial Intelligence",
                "Introduction to Responsible AI, LLM, Generative AI"
              ].includes(cert.title))
              .map((certificate) => (
                <motion.div
                  key={certificate.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: certificate.id * 0.1 }}
                >
                  <Card className="h-full flex flex-col bg-white">
                    <div className="flex-grow">
                      {certificate.image && (
                        <div className="mb-4">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center">
                            <span className="text-gray-500">Image du certificat</span>
                          </div>
                        </div>
                      )}
                      <h3 className="text-xl font-semibold mb-2 text-blue-600">{certificate.title}</h3>
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold">Organisation:</span> {certificate.organization}
                      </p>
                      <p className="text-gray-600 mb-3">
                        <span className="font-semibold">Date:</span> {certificate.date}
                      </p>
                      <p className="text-gray-700 mb-4">{certificate.description}</p>
                    </div>
                    <div className="mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                      >
                        Voir le Certificat
                      </motion.button>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
        
        {/* Certificats en Communication, Leadership et Design */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400 border-b-2 border-blue-400 pb-2">
            Communication, Leadership et Design
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates
              .filter(cert => [
                "UN Volunteers in Community Communication and Administration Support",
                "Training on How to Present Your Project in a Persuasive Way",
                "Training in Associative Leadership and Holding Effective Meetings",
                "Canva Design Certificate"
              ].includes(cert.title))
              .map((certificate) => (
                <motion.div
                  key={certificate.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: certificate.id * 0.1 }}
                >
                  <Card className="h-full flex flex-col bg-white">
                    <div className="flex-grow">
                      {certificate.image && (
                        <div className="mb-4">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center">
                            <span className="text-gray-500">Image du certificat</span>
                          </div>
                        </div>
                      )}
                      <h3 className="text-xl font-semibold mb-2 text-blue-600">{certificate.title}</h3>
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold">Organisation:</span> {certificate.organization}
                      </p>
                      <p className="text-gray-600 mb-3">
                        <span className="font-semibold">Date:</span> {certificate.date}
                      </p>
                      <p className="text-gray-700 mb-4">{certificate.description}</p>
                    </div>
                    <div className="mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                      >
                        Voir le Certificat
                      </motion.button>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
        
        {/* Certificats en Marketing Digital et Sécurité */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400 border-b-2 border-blue-400 pb-2">
            Marketing Digital et Sécurité
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates
              .filter(cert => [
                "Certification in Digital Marketing with Artificial Intelligence",
                "Online Security Specialist"
              ].includes(cert.title))
              .map((certificate) => (
                <motion.div
                  key={certificate.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: certificate.id * 0.1 }}
                >
                  <Card className="h-full flex flex-col bg-white">
                    <div className="flex-grow">
                      {certificate.image && (
                        <div className="mb-4">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center">
                            <span className="text-gray-500">Image du certificat</span>
                          </div>
                        </div>
                      )}
                      <h3 className="text-xl font-semibold mb-2 text-blue-600">{certificate.title}</h3>
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold">Organisation:</span> {certificate.organization}
                      </p>
                      <p className="text-gray-600 mb-3">
                        <span className="font-semibold">Date:</span> {certificate.date}
                      </p>
                      <p className="text-gray-700 mb-4">{certificate.description}</p>
                    </div>
                    <div className="mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                      >
                        Voir le Certificat
                      </motion.button>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
        
        {/* Certificats en Marketing Digital et Réseaux Sociaux */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400 border-b-2 border-blue-400 pb-2">
            Marketing Digital et Réseaux Sociaux
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates
              .filter(cert => [
                "Certification in Digital Marketing with Artificial Intelligence",
                "Social Media Manager Certificate"
              ].includes(cert.title))
              .map((certificate) => (
                <motion.div
                  key={certificate.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: certificate.id * 0.1 }}
                >
                  <Card className="h-full flex flex-col bg-white">
                    <div className="flex-grow">
                      {certificate.image && (
                        <div className="mb-4">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center">
                            <span className="text-gray-500">Image du certificat</span>
                          </div>
                        </div>
                      )}
                      <h3 className="text-xl font-semibold mb-2 text-blue-600">{certificate.title}</h3>
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold">Organisation:</span> {certificate.organization}
                      </p>
                      <p className="text-gray-600 mb-3">
                        <span className="font-semibold">Date:</span> {certificate.date}
                      </p>
                      <p className="text-gray-700 mb-4">{certificate.description}</p>
                    </div>
                    <div className="mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                      >
                        Voir le Certificat
                      </motion.button>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
        
        {/* Certificats en Leadership */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400 border-b-2 border-blue-400 pb-2">
            Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates
              .filter(cert => [
                "Training on How to Present Your Project in a Persuasive Way",
                "Training in Associative Leadership and Holding Effective Meetings",
                "Success Mindset",
                "Effective Leadership",
                "Certified as UPG Sustainability Leader 2024 for Positive Citizen Leadership"
              ].includes(cert.title))
              .map((certificate) => (
                <motion.div
                  key={certificate.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: certificate.id * 0.1 }}
                >
                  <Card className="h-full flex flex-col bg-white">
                    <div className="flex-grow">
                      {certificate.image && (
                        <div className="mb-4">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center">
                            <span className="text-gray-500">Image du certificat</span>
                          </div>
                        </div>
                      )}
                      <h3 className="text-xl font-semibold mb-2 text-blue-600">{certificate.title}</h3>
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold">Organisation:</span> {certificate.organization}
                      </p>
                      <p className="text-gray-600 mb-3">
                        <span className="font-semibold">Date:</span> {certificate.date}
                      </p>
                      <p className="text-gray-700 mb-4">{certificate.description}</p>
                    </div>
                    <div className="mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                      >
                        Voir le Certificat
                      </motion.button>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
        
        {/* Certificats en Entrepreneuriat */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400 border-b-2 border-blue-400 pb-2">
            Entrepreneuriat
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates
              .filter(cert => [
                "HP Life : Basics of Finance",
                "Design Thinking",
                "Finding Funding",
                "Setting Prices",
                "Social Entrepreneurship",
                "Starting a Small Business",
                "Unique Value Proposition"
              ].includes(cert.title))
              .map((certificate) => (
                <motion.div
                  key={certificate.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: certificate.id * 0.1 }}
                >
                  <Card className="h-full flex flex-col bg-white">
                    <div className="flex-grow">
                      {certificate.image && (
                        <div className="mb-4">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center">
                            <span className="text-gray-500">Image du certificat</span>
                          </div>
                        </div>
                      )}
                      <h3 className="text-xl font-semibold mb-2 text-blue-600">{certificate.title}</h3>
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold">Organisation:</span> {certificate.organization}
                      </p>
                      <p className="text-gray-600 mb-3">
                        <span className="font-semibold">Date:</span> {certificate.date}
                      </p>
                      <p className="text-gray-700 mb-4">{certificate.description}</p>
                    </div>
                    <div className="mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                      >
                        Voir le Certificat
                      </motion.button>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;