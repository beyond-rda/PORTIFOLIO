import { motion } from 'framer-motion';
import Section from './Section';
import profileImg from '../assets/bm.jpeg';

const stats = [
  { value: '2+', label: 'Years Learning' },
  { value: '15+', label: 'Projects Completed' },
  { value: '5+', label: 'Technologies' },
  { value: '100%', label: 'Dedication' },
];

export default function About() {
  return (
    <Section id="about" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get to know me better - my journey, goals, and passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-emerald-500 rotate-6"></div>
              <div className="absolute inset-0 rounded-2xl bg-slate-800 overflow-hidden flex items-center justify-center">
                <img 
                  src={profileImg} 
                  alt="Muhire Jackson" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 glass px-6 py-4 rounded-xl"
            >
              <p className="font-bold text-lg">IT Student</p>
              <p className="text-sm text-slate-500">Rwanda</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Building the Future with Technology</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I'm an IT student passionate about emerging technologies, particularly 
              <span className="text-indigo-500 font-semibold"> IoT (Internet of Things)</span> and 
              <span className="text-emerald-500 font-semibold"> Artificial Intelligence</span>. 
              I'm currently pursuing my studies in Information Technology while working on 
              exciting projects that combine hardware and software.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              My journey started with electronics (TVET background in Electronics Services), 
              which gave me a strong foundation in hardware. Now I'm bridging that knowledge 
              with software development to create smart, connected solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center glass p-4 rounded-xl"
                >
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h4 className="text-xl font-semibold mb-6 text-center">My Focus Areas</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📡', title: 'IoT Development', desc: 'Building smart connected devices and systems' },
              { icon: '🤖', title: 'AI & Machine Learning', desc: 'Creating intelligent applications and models' },
              { icon: '💻', title: 'Full-Stack Development', desc: 'Building complete web applications' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h5 className="font-semibold mb-2">{item.title}</h5>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}