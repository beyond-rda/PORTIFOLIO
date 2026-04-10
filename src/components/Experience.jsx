import { motion } from 'framer-motion';
import { FiBriefcase, FiAward } from 'react-icons/fi';
import Section from './Section';

const experiences = [
  {
    type: 'education',
    title: 'TVET Certification - Electronics Services',
    organization: 'Technical Institute',
    period: '2020 - 2023',
    description: 'Foundation in electronics, circuit design, and hardware maintenance. Learned to work with various electronic components and systems.',
    icon: '🔌',
  },
  {
    type: 'education',
    title: 'IT Studies - Software Development',
    organization: 'Higher Learning Institution',
    period: '2023 - Present',
    description: 'Currently studying Information Technology with focus on software development, web technologies, and emerging tech like IoT and AI.',
    icon: '💻',
  },
  {
    type: 'experience',
    title: 'Web Development Projects',
    organization: 'Self-directed Learning',
    period: '2022 - Present',
    description: 'Built multiple web applications and IoT projects for learning and practice. Focus on full-stack development and smart device integration.',
    icon: '⚡',
  },
  {
    type: 'experience',
    title: 'IoT & AI Exploration',
    organization: 'Personal Projects',
    period: '2023 - Present',
    description: 'Working on smart home systems, weather monitoring stations, and experimenting with machine learning models.',
    icon: '🤖',
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My educational background and professional journey in technology
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-emerald-500 to-amber-500"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900 dark:border-slate-100 transform -translate-x-1/2 z-10"></div>
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{exp.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg">{exp.title}</h3>
                        <p className="text-indigo-500 font-medium">{exp.organization}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                      <FiBriefcase className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <FiAward className="w-6 h-6 text-indigo-500" />
                </div>
                <div>
                  <h4 className="font-bold">Certifications</h4>
                  <p className="text-sm text-slate-500">TVET Electronics Services</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Completed vocational training in electronics services with focus on practical skills and hardware maintenance.
              </p>
            </div>
            
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <FiBriefcase className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-bold">Current Focus</h4>
                  <p className="text-sm text-slate-500">IT & Software Development</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Actively learning web development, IoT systems, and AI/ML fundamentals through projects and self-study.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}