import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['JavaScript', 'Python', 'C/C++', 'HTML/CSS'],
    levels: [85, 70, 65, 90],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Node.js', 'Express'],
    levels: [80, 75, 70],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'Linux', 'Figma'],
    levels: [80, 60, 70, 65],
  },
];

const tools = ['VS Code', 'Postman', 'Arduino', 'Raspberry Pi', 'MySQL'];

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-block px-3 py-1 rounded-full badge text-xs mb-2">Skills</span>
          <h2 className="text-2xl md:text-3xl font-bold">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass rounded-xl p-4"
            >
              <h3 className="font-semibold text-sm mb-3">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, index) => (
                  <div key={skill}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{skill}</span>
                      <span className="text-indigo-500">{category.levels[index]}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${category.levels[index]}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: catIndex * 0.1 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <h4 className="text-sm font-semibold mb-3 text-center">Tools</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-2.5 py-1 glass rounded-full text-xs"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}