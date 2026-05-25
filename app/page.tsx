import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Domains from "./components/Domains";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Quotes from "./components/Quotes";
import Recognition from "./components/Recognition";
import ScrollProgress from "./components/ScrollProgress";
import Skills from "./components/Skills";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="relative" role="main">
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Quotes />
        <Skills />
        <Domains />
        <Education />
        <Recognition />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
