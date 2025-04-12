import "./App.css";
import Header from "./Header-Section/Header";
import Home from "./Home_Section/Home";
import About from "./About_Section/About";
import Skills from "./Skills_Section/Skills";
import Portfolio from "./Portfolio_Section/Portfolio";
import Contact from "./Contact_Section/Contact";
import BackToHomeButton from "./Components/Arrow-Back/BackToHomeButton";
import { AnimatedSection } from "./Imports/ImportCenter";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Skills />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Portfolio />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <Contact />
      </AnimatedSection>
      <BackToHomeButton />
    </div>
  );
}

export default App;
