import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Smart Home IoT System',
    description: 'IoT-based home automation with mobile control.',
    tech: ['React', 'Node.js', 'Arduino'],
    category: 'IoT',
  },
  {
    id: 2,
    title: 'AI Chatbot',
    description: 'ML-powered chatbot for questions.',
    tech: ['Python', 'TensorFlow', 'React'],
    category: 'AI',
  },
  {
    id: 3,
    title: 'Insurance System',
    description: 'Policy management with analytics.',
    tech: ['React', 'Express', 'MySQL'],
    category: 'Frontend',
  },
  {
    id: 4,
    title: 'Portfolio',
    description: 'Modern responsive portfolio site.',
    tech: ['React', 'Vite', 'Tailwind'],
    category: 'Frontend',
  },
  {
    id: 5,
    title: 'Weather Station',
    description: 'IoT weather data collection.',
    tech: ['Arduino', 'ESP8266', 'React'],
    category: 'IoT',
  },
  {
    id: 6,
    title: 'Image Recognition',
    description: 'Deep learning classification.',
    tech: ['Python', 'OpenCV', 'Keras'],
    category: 'AI',
  },
];

const categories = ['All', 'Frontend', 'IoT', 'AI'];

const categoryColors = {
  IoT: 'bg-emerald-500/20 text-emerald-400',
  AI: 'bg-purple-500/20 text-purple-400',
  Frontend: 'bg-indigo-500/20 text-indigo-400',
};

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-block px-3 py-1 rounded-full badge text-xs mb-2">Projects</span>
          <h2 className="text-2xl md:text-3xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                  : 'glass hover:bg-indigo-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div className="grid gap-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.01 }}
                className="glass rounded-xl overflow-hidden"
              >
                <div className="flex">
                  <div className={`w-2 ${project.category === 'IoT' ? 'bg-emerald-500' : project.category === 'AI' ? 'bg-purple-500' : 'bg-indigo-500'}`}></div>
                  <div className="flex-1 p-3">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-sm">{project.title}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${categoryColors[project.category]}`}>
                        {project.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs text-slate-700 dark:text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 text-xs">
                      <a href="#" className="flex items-center gap-1 text-indigo-500">
                        <FiGithub className="w-3 h-3" /> Code
                      </a>
                      <a href="#" className="flex items-center gap-1 text-indigo-500">
                        <FiExternalLink className="w-3 h-3" /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}