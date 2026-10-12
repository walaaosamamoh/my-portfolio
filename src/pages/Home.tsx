import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";

export default function Home() {
  return (
    <div className="bg-background w-full min-h-screen mt-0">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
