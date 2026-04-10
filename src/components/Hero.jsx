import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import Button from './Button';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-500 text-sm font-medium mb-6"
            >
              Hello, I'm
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">Muhire Jackson</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-6">
              IT Student & Future <span className="text-indigo-500 font-semibold">IoT & AI Developer</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
              Passionate about building innovative solutions that bridge the physical and digital worlds. 
              Currently learning and creating projects in IoT, AI, and full-stack development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" icon={FiArrowRight} onClick={() => scrollToSection('#projects')}>
                View Projects
              </Button>
              <Button variant="outline" icon={FiMail} onClick={() => scrollToSection('#contact')}>
                Contact Me
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-emerald-500 to-amber-500 animate-pulse-glow opacity-20"></div>
              <div className="absolute inset-4 rounded-full bg-slate-900 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Building the<br />future with code
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-emerald-500 flex items-center justify-center text-3xl shadow-lg"
              >
                🤖
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-indigo-500 flex items-center justify-center text-2xl shadow-lg"
              >
                📡
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex justify-center gap-8"
        >
          {[
            { icon: '⚡', label: 'Fast Learner' },
            { icon: '🎯', label: 'Problem Solver' },
            { icon: '🚀', label: 'Innovative' },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 glass px-4 py-2 rounded-full">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}