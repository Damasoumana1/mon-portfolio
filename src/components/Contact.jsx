import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from './UI/Button.jsx';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Configuration EmailJS avec les vraies clés
      const result = await emailjs.send(
        'service_c5bgp0g', // Service ID
        'template_eut75lw', // Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          title: formData.subject,
          time: new Date().toLocaleString()
        },
        'c8xdNAIpSbCbvbcNH' // Public Key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 min-h-screen flex items-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-blue-400"
        >
          Me Contacter
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-lg shadow-lg flex flex-col justify-center" style={{ backgroundColor: 'var(--bg-secondary)' }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h8v2H6v-2zm0 4h8v2H6v-2zm10 0h2v2h-2v-2zm0-4h2v2h-2v-2z" />
              </svg>
              Informations de Contact
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2zm5.38-5.38c2.76 0 5 2.24 5 5 0 .55.45 1 1 1s1-.45 1-1c0-3.86-3.14-7-7-7-.55 0-1 .45-1 1s.45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z" />
                </svg>
                <span>+226 64011171</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h8v2H6v-2zm0 4h8v2H6v-2zm10 0h2v2h-2v-2zm0-4h2v2h-2v-2z" />
                </svg>
                <span>soumanadama93@gmail.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Ouagadougou, Burkina Faso</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21 .69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <a href="https://github.com/Damasoumana1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                  GitHub
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V9h3v10zM6.5 8C5.671 8 5 7.329 5 6.5S5.671 5 6.5 5 8 5.671 8 6.5 7.329 8 6.5 8zM19 19h-3v-5.344c0-1.329-.027-3.038-1.853-3.038-1.853 0-2.137 1.447-2.137 2.941V19h-3V9h2.882v1.225c.4-.768 1.36-1.588 2.798-1.588 2.99 0 3.347 1.964 3.347 4.792V19z" />
                </svg>
                <a href="https://www.linkedin.com/in/soumana-dama-445096253/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 8V7l-3 3-3-3v1l3 3 3-3zm-5 12H3V4h13V2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-8h-2v8zM9 10H7v2h2v-2zm4 4h-2v2h2v-2zm0-4h-2v2h2v-2z" />
              </svg>
              Envoyer un Message
            </h3>

            {/* Messages de statut */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-green-500 text-white rounded-lg"
              >
                ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-red-500 text-white rounded-lg"
              >
                ❌ Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nom *
                </label>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 absolute left-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style={{ backgroundColor: 'var(--bg-secondary)' }}
                    placeholder="Votre Nom"
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email *
                </label>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 absolute left-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h8v2H6v-2zm0 4h8v2H6v-2zm10 0h2v2h-2v-2zm0-4h2v2h-2v-2z" />
                  </svg>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style={{ backgroundColor: 'var(--bg-secondary)' }}
                    placeholder="Votre Email"
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Sujet *
                </label>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 absolute left-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h10v2H7V9zm0 4h10v2H7v-2z" />
                  </svg>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style={{ backgroundColor: 'var(--bg-secondary)' }}
                    placeholder="Sujet du message"
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message *
                </label>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 absolute left-3 top-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 8V7l-3 3-3-3v1l3 3 3-3zm-5 12H3V4h13V2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-8h-2v8zM9 10H7v2h2v-2zm4 4h-2v2h2v-2zm0-4h-2v2h2v-2z" />
                  </svg>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full pl-10 pr-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style={{ backgroundColor: 'var(--bg-secondary)' }}
                    placeholder="Votre Message"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer Message'}
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/assets/CV_Soumana_DAMA.pdf';
                    link.download = 'CV_Soumana_DAMA.pdf';
                    link.click();
                  }}
                  className="flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
                  </svg>
                  Télécharger CV
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;