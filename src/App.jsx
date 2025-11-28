import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackgroundEffects from "./components/layout/BackgroundEffects";
import Hero from "./components/sections/Hero";
import WorkExperience from "./components/sections/WorkExperience";
import IndustryProjects from "./components/sections/IndustryProjects";
import PersonalProjects from "./components/sections/PersonalProjects";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import Events from "./components/sections/Events";
import TechStack from "./components/sections/TechStack";
import Education from "./components/sections/Education";
import Organization from "./components/sections/Organization";
import Certificates from "./components/sections/Certificates";
import BackToTop from "./components/layout/BackToTop";

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />
      <Navbar />

      <main className="relative z-10 pt-16">
        <Hero />
        <WorkExperience />
        <IndustryProjects />
        <FeaturedProjects />
        <TechStack />
        <Education />
        <Certificates />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
