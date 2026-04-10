import { motion } from 'framer-motion';

export default function Button({ children, onClick, variant = 'primary', className = '', icon: Icon }) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2';
  
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white',
    ghost: 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </motion.button>
  );
}