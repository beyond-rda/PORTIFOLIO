import { motion } from 'framer-motion';
import { FiHome, FiUser, FiCode, FiFolder, FiBriefcase, FiMail } from 'react-icons/fi';

const navItems = [
  { name: 'Home', href: '#home', icon: FiHome },
  { name: 'About', href: '#about', icon: FiUser },
  { name: 'Skills', href: '#skills', icon: FiCode },
  { name: 'Projects', href: '#projects', icon: FiFolder },
  { name: 'Experience', href: '#experience', icon: FiBriefcase },
  { name: 'Contact', href: '#contact', icon: FiMail },
];

export default function MobileNav() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="mobile-nav">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
        >
          <item.icon />
          <span>{item.name}</span>
        </a>
      ))}
    </nav>
  );
}