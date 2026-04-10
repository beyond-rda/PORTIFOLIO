import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-animated grid-pattern dark">
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
    </ThemeProvider>
  );
}

export default App;