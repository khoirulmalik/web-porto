import SocialLinks from "../ui/SocialLinks";

const Hero = () => {
  const handleCTAClick = (e) => {
    e.preventDefault();
    const element = document.querySelector("#experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fadeInUp">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          KHOIRUL MALIK
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-300">
          Full-Stack Developer | Backend & Cloud Engineer
        </p>

        <p className="text-sm sm:text-base md:text-lg mb-8 text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
          Final-year Internet Engineering student at Universitas Gadjah Mada
          (GPA 3.63) with proven experience in software development, full-stack
          web engineering, cloud computing, and project management. Skilled in
          designing and delivering scalable applications, and in managing
          cross-functional teams to ensure project success. Recognized for
          strong leadership, problem-solving, and the ability to drive
          measurable impact.
        </p>

        <SocialLinks className="mb-12" />

        <a
          href="#experience"
          onClick={handleCTAClick}
          className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
