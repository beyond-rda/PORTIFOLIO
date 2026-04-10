import { motion } from 'framer-motion';

export default function Button({ children, onClick, variant = 'primary', className = '', icon: Icon }) {
  const baseStyles = 'px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40',
    secondary: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25',
    outline: 'border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white',
    ghost: 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </motion.button>
  );
}