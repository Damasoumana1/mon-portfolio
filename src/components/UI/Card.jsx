import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Card = ({ children, className = '' }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`p-6 rounded-lg shadow-lg ${className}`} style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {children}
    </motion.div>
  );
};

export default Card;