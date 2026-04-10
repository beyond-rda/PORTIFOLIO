import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiHome, FiUser, FiCode, FiFolder, FiBriefcase, FiMail, 
  FiMenu, FiX, FiGithub, FiLinkedin, FiInstagram 
} from 'react-icons/fi';
import profileImg from '../assets/new.jpeg';

const navItems = [
  { name: 'Home', href: '#home', icon: FiHome },
  { name: 'About', href: '#about', icon: FiUser },
  { name: 'Skills', href: '#skills', icon: FiCode },
  { name: 'Projects', href: '#projects', icon: FiFolder },
  { name: 'Experience', href: '#experience', icon: FiBriefcase },
  { name: 'Contact', href: '#contact', icon: FiMail },
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/beyond-rda', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/jacksonmuhire', label: 'LinkedIn' },
  { icon: FiInstagram, href: 'https://instagram.com/b_muhire', label: 'Instagram' },
];

export default function Sidebar({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Mobile Toggle Button */}
      <button
        className="mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`sidebar bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 ${mobileOpen ? 'mobile-open' : ''}`}>
        {/* Close Button for Mobile */}
        <button
          className="md:hidden absolute top-4 right-4 p-2"
          onClick={() => setMobileOpen(false)}
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* Profile Section */}
        <div className="p-6 text-center border-b border-slate-200 dark:border-slate-800">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-500 blur-sm opacity-70"></div>
            <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-500"></div>
            <div className="absolute inset-0.5 rounded-full overflow-hidden border-2 border-white/50">
              <img src={profileImg} alt="Muhire Jackson" className="w-full h-full object-contain" />
            </div>
          </div>
          <h2 className="font-bold text-lg gradient-text">Muhire Jackson</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Studying at RP Karongi</p>
          <p className="text-xs text-indigo-500 mt-1">Future IoT & AI Developer</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
              className="nav-link text-slate-600 dark:text-slate-300"
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-indigo-500/20 transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="p-4 text-center">
          <p className="text-xs text-slate-500">© 2026 Muhire Jackson</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}