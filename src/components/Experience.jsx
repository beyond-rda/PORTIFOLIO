import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'TVET - Electronics',
    organization: 'Technical Institute',
    period: '2020 - 2023',
    description: 'Foundation in electronics and hardware.',
    icon: '🔌',
  },
  {
    title: 'IT Studies',
    organization: 'Higher Learning',
    period: '2023 - Present',
    description: 'Web, IoT, and AI technologies.',
    icon: '💻',
  },
  {
    title: 'Web Projects',
    organization: 'Self-directed',
    period: '2022 - Present',
    description: 'Built multiple web applications.',
    icon: '⚡',
  },
  {
    title: 'IoT & AI',
    organization: 'Personal',
    period: '2023 - Present',
    description: 'Smart systems and ML experiments.',
    icon: '🤖',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-block px-3 py-1 rounded-full badge text-xs mb-2">Journey</span>
          <h2 className="text-2xl md:text-3xl font-bold">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-emerald-500 to-amber-500"></div>
          
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8"
              >
                <div className="absolute left-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500"></div>
                <motion.div className="glass rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{exp.icon}</span>
                    <div>
                      <h3 className="font-bold text-sm">{exp.title}</h3>
                      <p className="text-xs text-indigo-500">{exp.organization}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mb-1">{exp.period}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 grid grid-cols-2 gap-3"
        >
          <div className="glass p-3 rounded-xl text-center">
            <h4 className="font-bold text-sm">📜 Certifications</h4>
            <p className="text-xs text-slate-500">TVET Electronics</p>
          </div>
          <div className="glass p-3 rounded-xl text-center">
            <h4 className="font-bold text-sm">🎯 Current Focus</h4>
            <p className="text-xs text-slate-500">IT & Development</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}