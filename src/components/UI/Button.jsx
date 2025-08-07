import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = '', variant = 'primary', ...props }) => {
  const variants = {
    primary: { backgroundColor: 'var(--accent)', color: 'white' },
    secondary: { backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${className}`}
      style={variants[variant]}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;