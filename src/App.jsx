import { ThemeProvider, useTheme } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Analytics } from "@vercel/analytics/react"

function AppContent() {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen bg-animated grid-pattern ${theme}`}>
      <Sidebar>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Sidebar>
      <MobileNav />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
      <Analytics />
    </ThemeProvider>
  );
}

export default App;