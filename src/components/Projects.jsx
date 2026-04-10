import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Section from './Section';

const projects = [
  {
    id: 1,
    title: 'Smart Home IoT System',
    description: 'A complete IoT-based home automation system with mobile app control, sensor integration, and real-time monitoring.',
    tech: ['React', 'Node.js', 'Arduino', 'MQTT', 'MongoDB'],
    category: 'IoT',
    github: 'https://github.com/beyond-rda',
    demo: '#',
    image: '🏠',
  },
  {
    id: 2,
    title: 'AI-Powered Chatbot',
    description: 'An intelligent chatbot powered by machine learning that can answer questions and assist users with various tasks.',
    tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    category: 'AI',
    github: 'https://github.com/beyond-rda',
    demo: '#',
    image: '🤖',
  },
  {
    id: 3,
    title: 'Insurance Management System',
    description: 'A comprehensive web application for managing insurance policies, claims, and client data with dashboard analytics.',
    tech: ['React', 'Express', 'MySQL', 'Material UI'],
    category: 'Frontend',
    github: 'https://github.com/beyond-rda',
    demo: '#',
    image: '📊',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A modern, responsive personal portfolio showcasing projects, skills, and professional information.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend',
    github: 'https://github.com/beyond-rda',
    demo: '#',
    image: '💼',
  },
  {
    id: 5,
    title: 'Weather Monitoring Station',
    description: 'IoT-based weather station that collects and displays temperature, humidity, and other weather data in real-time.',
    tech: ['Arduino', 'ESP8266', 'React', 'IoT'],
    category: 'IoT',
    github: 'https://github.com/beyond-rda',
    demo: '#',
    image: '🌤️',
  },
  {
    id: 6,
    title: 'Image Recognition System',
    description: 'A deep learning-based image classification system that can identify objects with high accuracy.',
    tech: ['Python', 'OpenCV', 'Keras', 'React'],
    category: 'AI',
    github: 'https://github.com/beyond-rda',
    demo: '#',
    image: '🖼️',
  },
];

const categories = ['All', 'Frontend', 'IoT', 'AI'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Section id="projects" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my technical projects across different domains
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'glass hover:bg-indigo-500/20'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl overflow-hidden group"
              >
                <div className="h-40 bg-gradient-to-br from-indigo-500/20 via-emerald-500/20 to-amber-500/20 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'IoT' ? 'bg-emerald-500/20 text-emerald-500' :
                      project.category === 'AI' ? 'bg-amber-500/20 text-amber-500' :
                      'bg-indigo-500/20 text-indigo-500'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium hover:text-indigo-500 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium hover:text-indigo-500 transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}