import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations/translations';
import { useState } from 'react';

const certificates = [
  {
    id: 1,
    title: "From Zero to Hero - Digital Product Development from Scratch",
    organization: "Technical University of Munich",
    date: "2024",
    category: "Développement / Product Management",
    description: {
      fr: "Formation complète sur le développement de produits numériques depuis les bases jusqu'à la mise en production.",
      en: "Comprehensive training on digital product development from basics to production deployment."
    },
    image: "/assets/certificates/cert1.jpg"
  },
  {
    id: 2,
    title: "Google Data Analytics Professional Certificate",
    organization: "Google",
    date: "2024",
    category: "Data / IA",
    description: {
      fr: "Certification professionnelle en analyse de données avec Google, couvrant les outils et techniques d'analyse avancée.",
      en: "Professional certification in data analytics with Google, covering advanced analysis tools and techniques."
    },
    image: "/assets/certificates/cert2.jpg"
  },
  {
    id: 3,
    title: "UN Volunteers in Community Communication and Administration Support",
    organization: {
      fr: "Nations Unies",
      en: "United Nations"
    },
    date: "2023",
    category: "Engagement / Communication",
    description: {
      fr: "Certificat de volontariat des Nations Unies en communication communautaire et support administratif.",
      en: "United Nations volunteer certificate in community communication and administrative support."
    },
    image: "/assets/certificates/cert3.jpg"
  },
  {
    id: 4,
    title: "Generative AI Overview for Project Managers",
    organization: "Project Management Institute",
    date: "2024",
    category: "Data / IA",
    description: {
      fr: "Aperçu de l'intelligence artificielle générative pour les chefs de projet et managers.",
      en: "Overview of generative artificial intelligence for project managers and team leaders."
    },
    image: "/assets/certificates/cert4.jpg"
  },
  {
    id: 5,
    title: "Hands-on Training on Developing Artificial Intelligence",
    organization: "Microsoft & Zindi Community",
    date: "2024",
    category: "Data / IA",
    description: {
      fr: "Formation pratique sur le développement de l'IA avec Responsible AI Dashboard et Azure Content Security pour Azure Open AI.",
      en: "Practical training on AI development with Responsible AI Dashboard and Azure Content Security for Azure Open AI."
    },
    image: "/assets/certificates/cert5.jpg"
  },
  {
    id: 6,
    title: "Online Security Specialist",
    organization: "Internet Society Burkina Faso Chapter",
    date: "2023",
    category: "Sécurité / Web",
    description: {
      fr: "Spécialisation en sécurité en ligne et protection des données sur Internet.",
      en: "Specialization in online security and Internet data protection."
    },
    image: "/assets/certificates/cert6.jpg"
  },
  {
    id: 7,
    title: "Introduction to Artificial Intelligence",
    organization: "Institute De Montaigne",
    date: "2023",
    category: "Data / IA",
    description: {
      fr: "Introduction aux concepts fondamentaux de l'intelligence artificielle et ses applications.",
      en: "Introduction to fundamental concepts of artificial intelligence and its applications."
    },
    image: "/assets/certificates/cert7.jpg"
  },
  {
    id: 8,
    title: "10000 Coders Digital Passport Certificate",
    organization: "10000 Coders",
    date: "2024",
    category: "Développement / Product Management",
    description: {
      fr: "Certificat numérique attestant des compétences en codage et développement logiciel.",
      en: "Digital certificate attesting to coding and software development skills."
    },
    image: "/assets/certificates/cert8.jpg"
  },
  {
    id: 9,
    title: "Introduction to Responsible AI, LLM, Generative AI",
    organization: "Google Cloud",
    date: "2024",
    category: "Data / IA",
    description: {
      fr: "Introduction à l'IA responsable, aux grands modèles linguistiques (LLM) et à l'IA générative avec Google Cloud.",
      en: "Introduction to responsible AI, large language models (LLM) and generative AI with Google Cloud."
    },
    image: "/assets/certificates/cert9.jpg"
  },
  {
    id: 10,
    title: "Training on How to Present Your Project in a Persuasive Way",
    organization: {
      fr: "Formation Professionnelle",
      en: "Professional Training"
    },
    date: "2023",
    category: "Soft Skills / Communication",
    description: {
      fr: "Formation sur les techniques de présentation persuasive de projets pour convaincre les parties prenantes.",
      en: "Training on persuasive project presentation techniques to convince stakeholders."
    },
    image: "/assets/certificates/cert10.jpg"
  },
  {
    id: 11,
    title: "Certification in Digital Marketing with Artificial Intelligence",
    organization: {
      fr: "Formation Spécialisée",
      en: "Specialized Training"
    },
    date: "2024",
    category: "Marketing / Communication",
    description: {
      fr: "Certification en marketing digital utilisant l'intelligence artificielle pour optimiser les résultats commerciaux.",
      en: "Certification in digital marketing using artificial intelligence to optimize business results."
    },
    image: "/assets/certificates/cert11.jpg"
  },
  {
    id: 12,
    title: "Canva Design Certificate",
    organization: "Canva",
    date: "2023",
    category: "Design / Créativité",
    description: {
      fr: "Certification en design graphique et création de contenu visuel avec Canva.",
      en: "Certification in graphic design and visual content creation with Canva."
    },
    image: "/assets/certificates/cert12.jpg"
  },
  {
    id: 13,
    title: "How to Write a CV and Cover Letter",
    organization: {
      fr: "Formation Professionnelle",
      en: "Professional Training"
    },
    date: "2023",
    category: "Soft Skills / Communication",
    description: {
      fr: "Formation sur la rédaction efficace de CV et lettres de motivation pour optimiser les candidatures.",
      en: "Training on effective CV and cover letter writing to optimize job applications."
    },
    image: "/assets/certificates/cert13.jpg"
  },
  {
    id: 14,
    title: "Leadership Certificate",
    organization: {
      fr: "Institut de Leadership",
      en: "Leadership Institute"
    },
    date: "2024",
    category: "Leadership / Management",
    description: {
      fr: "Certification en leadership et gestion d'équipe pour développer les compétences managériales.",
      en: "Certification in leadership and team management to develop managerial skills."
    },
    image: "/assets/certificates/cert14.jpg"
  },
  {
    id: 15,
    title: "Entrepreneurship and Innovation Certificate",
    organization: {
      fr: "Centre d'Entrepreneuriat",
      en: "Entrepreneurship Center"
    },
    date: "2024",
    category: "Entrepreneuriat / Innovation",
    description: {
      fr: "Certification en entrepreneuriat et innovation pour développer l'esprit d'entreprise et créer des solutions innovantes.",
      en: "Certification in entrepreneurship and innovation to develop entrepreneurial spirit and create innovative solutions."
    },
    image: "/assets/certificates/cert15.jpg"
  },
  {
    id: 16,
    title: "Social Media Manager Certificate",
    organization: {
      fr: "Formation Marketing",
      en: "Marketing Training"
    },
    date: "2024",
    category: "Marketing / Communication",
    description: {
      fr: "Certification en gestion de médias sociaux pour le marketing digital et l'engagement communautaire.",
      en: "Certification in social media management for digital marketing and community engagement."
    },
    image: "/assets/certificates/cert16.jpg"
  },
  {
    id: 17,
    title: "Certified as UPG Sustainability Leader 2024 for Positive Citizen Leadership",
    organization: "UPG",
    date: "2024",
    category: "Leadership / Management",
    description: {
      fr: "Certification en leadership durable et citoyen pour un impact positif dans la communauté.",
      en: "Certification in sustainable and citizen leadership for positive impact in the community."
    },
    image: "/assets/certificates/cert17.jpg"
  },
  {
    id: 18,
    title: "HP Life : Basics of Finance",
    organization: "HP Life",
    date: "2024",
    category: "Entrepreneuriat / Innovation",
    description: {
      fr: "Formation aux bases de la finance pour entrepreneurs et petites entreprises.",
      en: "Training in finance basics for entrepreneurs and small businesses."
    },
    image: "/assets/certificates/cert18.jpg"
  },
  {
    id: 19,
    title: "Design Thinking",
    organization: {
      fr: "Formation Innovation",
      en: "Innovation Training"
    },
    date: "2024",
    category: "Design / Créativité",
    description: {
      fr: "Certification en Design Thinking pour l'innovation et la résolution créative de problèmes.",
      en: "Certification in Design Thinking for innovation and creative problem solving."
    },
    image: "/assets/certificates/cert19.jpg"
  },
  {
    id: 20,
    title: "Finding Funding",
    organization: {
      fr: "Formation Entrepreneuriale",
      en: "Entrepreneurial Training"
    },
    date: "2024",
    category: "Entrepreneuriat / Innovation",
    description: {
      fr: "Formation sur les stratégies pour trouver des financements pour projets et entreprises.",
      en: "Training on strategies to find funding for projects and businesses."
    },
    image: "/assets/certificates/cert20.jpg"
  },
  {
    id: 21,
    title: "Pricing Strategy",
    organization: {
      fr: "Formation Business",
      en: "Business Training"
    },
    date: "2024",
    category: "Entrepreneuriat / Innovation",
    description: {
      fr: "Formation sur la stratégie de fixation des prix pour maximiser la rentabilité.",
      en: "Training on pricing strategy to maximize profitability."
    },
    image: "/assets/certificates/cert21.jpg"
  },
  {
    id: 22,
    title: "Social Entrepreneurship",
    organization: {
      fr: "Formation Sociale",
      en: "Social Training"
    },
    date: "2024",
    category: "Entrepreneuriat / Innovation",
    description: {
      fr: "Certification en entrepreneuriat social pour créer un impact positif tout en générant des revenus.",
      en: "Certification in social entrepreneurship to create positive impact while generating revenue."
    },
    image: "/assets/certificates/cert22.jpg"
  },
  {
    id: 23,
    title: "Starting a Small Business",
    organization: {
      fr: "Formation PME",
      en: "SME Training"
    },
    date: "2024",
    category: "Entrepreneuriat / Innovation",
    description: {
      fr: "Formation complète pour démarrer et gérer une petite entreprise avec succès.",
      en: "Complete training to start and manage a small business successfully."
    },
    image: "/assets/certificates/cert23.jpg"
  },
  {
    id: 24,
    title: "Unique Value Proposition",
    organization: {
      fr: "Formation Marketing",
      en: "Marketing Training"
    },
    date: "2024",
    category: "Marketing / Communication",
    description: {
      fr: "Formation sur la création d'une proposition de valeur unique pour se démarquer sur le marché.",
      en: "Training on creating a unique value proposition to stand out in the market."
    },
    image: "/assets/certificates/cert24.jpg"
  },
  {
    id: 25,
    title: "Frontier Tech Leaders Programme Machine Learning Bootcamp",
    organization: "Frontier Tech Leaders",
    date: "2024",
    category: "Data / IA",
    description: {
      fr: "Bootcamp intensif en Machine Learning couvrant les algorithmes d'apprentissage automatique, l'analyse de données et l'intelligence artificielle appliquée.",
      en: "Intensive Machine Learning bootcamp covering machine learning algorithms, data analysis and applied artificial intelligence."
    },
    image: "/assets/certificates/cert25.jpg"
  },
  {
    id: 26,
    title: "FORCE N Senegal: AI & Data",
    organization: "FORCE N Senegal",
    date: "2025",
    category: "Data / IA",
    description: {
      fr: "FORCE N Senegal : AI & Data (Intelligence artificielle, collecte et pré-traitement des données, NLP & Computer Vision, ML/DL, déploiement & monitoring)",
      en: "FORCE N Senegal: AI & Data (Artificial Intelligence, Data Collection and pre-processing, Natural Language Processing (NLP) & Computer Vision, ML/DL, Deployment & Monitoring)"
    },
    image: "/assets/certificates/cert26.jpg"
  },
];

const groupByCategory = (certs) => {
  return certs.reduce((acc, cert) => {
    if (!acc[cert.category]) acc[cert.category] = [];
    acc[cert.category].push(cert);
    return acc;
  }, {});
};

const Certificates = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { language } = useLanguage();

  const getLocalizedText = (text) => {
    if (typeof text === 'object' && text !== null) {
      return text[language] || text.fr || text.en || '';
    }
    return text || '';
  };

  const grouped = groupByCategory(certificates);
  const categories = Object.keys(grouped);

  return (
    <section id="certificates" className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-blue-400"
        >
          {getTranslation(language, 'certificates.title')}
        </motion.h2>

        {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <h3 className="text-2xl font-bold text-blue-300 mb-6">{cat}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {grouped[cat].map((certificate, index) => (
                <div
                  key={certificate.id}
                  className="p-6 rounded-lg shadow-lg h-full flex flex-col"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    transform: 'translateZ(0)'
                  }}
                >
                  <CertificateImage image={certificate.image} title={certificate.title} />

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">
                      {certificate.title}
                    </h3>

                    <div className="mb-2 text-sm text-gray-300">
                      <p><strong>{getTranslation(language, 'certificates.organization')}:</strong> {getLocalizedText(certificate.organization)}</p>
                      <p><strong>{getTranslation(language, 'certificates.date')}:</strong> {certificate.date}</p>
                    </div>

                    <p className="mb-4 flex-1 text-sm text-gray-400">
                      {getLocalizedText(certificate.description)}
                    </p>

                    <button
                      onClick={() => {
                        window.open(certificate.image, '_blank');
                      }}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
                      </svg>
                      {getTranslation(language, 'certificates.viewCertificate')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Fallback image component
const CertificateImage = ({ image, title }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="w-full h-48 flex items-center justify-center bg-gray-700 rounded-lg">
        <span className="text-white text-center px-2 text-sm font-semibold opacity-80">{title}</span>
      </div>
    );
  }
  return (
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover rounded-lg"
      onError={() => setImgError(true)}
    />
  );
};

export default Certificates;
