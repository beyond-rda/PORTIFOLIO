import { motion } from 'framer-motion';
import Section from './Section';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 85, icon: '🟨' },
      { name: 'Python', level: 70, icon: '🐍' },
      { name: 'C/C++', level: 65, icon: '🔧' },
      { name: 'HTML/CSS', level: 90, icon: '🌐' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 80, icon: '⚛️' },
      { name: 'Node.js', level: 75, icon: '🟢' },
      { name: 'Express', level: 70, icon: '🚀' },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 80, icon: '📚' },
      { name: 'Docker', level: 60, icon: '🐳' },
      { name: 'Linux', level: 70, icon: '🐧' },
      { name: 'Figma', level: 65, icon: '🎨' },
    ],
  },
];

const tools = ['VS Code', 'Postman', 'Arduino', 'Raspberry Pi', 'Arduino IDE', 'KiCad', 'Wireshark', 'MySQL'];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies I work with to build amazing projects
          </p>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-indigo-500 rounded-full"></span>
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex items-center gap-2 font-medium">
                        <span>{skill.icon}</span> {skill.name}
                      </span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 + 0.2 }}
                        className="h-full bg-gradient-to-r from-indigo-500 via-emerald-500 to-amber-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Tools I Use</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 glass rounded-full text-sm font-medium hover:bg-indigo-500/20 transition-colors cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}