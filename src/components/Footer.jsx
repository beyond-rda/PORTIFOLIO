import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/beyond-rda', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/jacksonmuhire', label: 'LinkedIn' },
  { icon: FiInstagram, href: 'https://instagram.com/b_muhire', label: 'Instagram' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 glass border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-bold gradient-text">JM</span>
            <span className="text-slate-500">|</span>
            <span className="text-sm text-slate-500">Muhire Jackson</span>
          </motion.div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-slate-500"
          >
            © {currentYear} All rights reserved. Built with 💜
          </motion.p>
        </div>
      </div>
    </footer>
  );
}