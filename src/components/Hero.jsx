import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import Button from './Button';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-8 px-4 relative overflow-hidden">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4 text-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-600 dark:text-slate-400">Available for opportunities</span>
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-slate-800 dark:text-white">I'm </span>
            <span className="gradient-text">BMuhire</span>
          </h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-4"
          >
            <span className="text-indigo-500 font-semibold">IT Student</span> at <span className="text-emerald-500 font-semibold">RP Karongi</span> & 
            {' '}<span className="text-emerald-500 font-semibold">Future IoT & AI Developer</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto leading-relaxed"
          >
            Passionate about building innovative solutions that bridge the physical and digital worlds.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Button variant="primary" icon={FiArrowRight} onClick={() => scrollToSection('#projects')}>
              View Projects
            </Button>
            <Button variant="outline" icon={FiMail} onClick={() => scrollToSection('#contact')}>
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {[
            { icon: '⚡', label: 'Fast' },
            { icon: '🎯', label: 'Problem Solver' },
            { icon: '🚀', label: 'Innovative' },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-lg cursor-default"
            >
              <span className="text-sm">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}