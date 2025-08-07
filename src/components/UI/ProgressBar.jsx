import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProgressBar = ({ label, value, className = '' }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, width: 0 }}
      animate={inView ? { opacity: 1, width: '100%' } : {}}
      transition={{ duration: 1 }}
      className={`flex flex-col ${className}`}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>{label}</span>
        <span style={{ color: 'var(--accent)' }}>{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-blue-600 h-2.5 rounded-full"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default ProgressBar;