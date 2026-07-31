import ClickSpark from './components/reactbits/ClickSpark';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <ClickSpark sparkColor="#EAB308" sparkSize={8} sparkRadius={18} sparkCount={7} duration={450}>
      <div className="min-h-screen bg-base text-ink font-body overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </ClickSpark>
  );
}

export default App;
