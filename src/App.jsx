import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills/>
      <About />
      <Projects/>
      <Certificates/>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
