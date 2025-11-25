import { useEffect } from "react";

const BackgroundEffects = () => {
  useEffect(() => {
    const createParticles = () => {
      const hero = document.body;
      const particleCount = 50; 

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.cssText = `
          position: fixed;
          width: 2px;
          height: 2px;
          background: rgba(0, 212, 255, 0.5);
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          pointer-events: none;
          z-index: 0;
        `;

        const duration = Math.random() * 6 + 4;
        const delay = Math.random() * 2;

        particle.style.animation = `float ${duration}s ease-in-out infinite`;
        particle.style.animationDelay = `${delay}s`;

        hero.appendChild(particle);
      }
    };

    createParticles();

    // Cleanup function
    return () => {
      const particles = document.querySelectorAll(".particle");
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  return (
    <>
      {/* Static stars background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(white, rgba(255, 255, 255, 0.2) 2px, transparent 5px),
              radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 3px),
              radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 4px)
            `,
            backgroundSize: "550px 550px, 350px 350px, 250px 250px",
            backgroundPosition: "0 0, 40px 60px, 130px 270px",
          }}
        />
      </div>
    </>
  );
};

export default BackgroundEffects;
