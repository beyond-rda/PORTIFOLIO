import { motion } from 'framer-motion';
import profileImg from '../assets/bm.jpeg';

const stats = [
  { value: '2+', label: 'Years Learning' },
  { value: '15+', label: 'Projects' },
  { value: '8+', label: 'Technologies' },
  { value: '100%', label: 'Dedication' },
];

export default function About() {
  return (
    <section id="about" className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block px-3 py-1 rounded-full badge text-xs mb-3">About Me</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">Get to Know Me</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-500 animate-pulse"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-900 dark:border-white">
                <img src={profileImg} alt="Muhire Jackson" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-bold mb-3">
              Building the <span className="gradient-text">Future</span> with Technology
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
              I'm an IT student passionate about emerging technologies, particularly 
              <span className="text-indigo-500 font-medium"> IoT (Internet of Things)</span> and 
              <span className="text-emerald-500 font-medium"> Artificial Intelligence</span>. 
              I'm currently pursuing my studies in Information Technology while working on 
              exciting projects that combine hardware and software.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              My journey started with <span className="text-amber-500 font-medium">electronics</span> 
              (TVET background in Electronics Services), which gave me a strong foundation in hardware. 
              Now I'm bridging that knowledge with software development to create 
              <span className="text-indigo-500 font-medium"> smart, connected solutions</span>.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-2 rounded-lg text-center"
                >
                  <p className="text-lg font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <h4 className="text-base font-semibold mb-4 text-center">My Focus Areas</h4>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: '📡', title: 'IoT Development', desc: 'Smart connected devices' },
              { icon: '🤖', title: 'AI & ML', desc: 'Intelligent applications' },
              { icon: '💻', title: 'Full-Stack', desc: 'Web applications' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-3 rounded-xl text-center"
              >
                <div className="text-2xl mb-1">{item.icon}</div>
                <p className="text-xs font-semibold">{item.title}</p>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}