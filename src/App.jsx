import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackgroundEffects from "./components/layout/BackgroundEffects";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import PersonalProjects from "./components/sections/PersonalProjects";
import TechStack from "./components/sections/TechStack";
import Education from "./components/sections/Education";
import Organization from "./components/sections/Organization";
import Certificates from "./components/sections/Certificates";

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />
      <Navbar />

      <main className="relative z-10 pt-16">
        <Hero />
        <Experience />
        <PersonalProjects />
        <TechStack />
        <Education />
        <Organization />
        <Certificates />
      </main>

      <Footer />
    </div>
  );
}

export default App;
