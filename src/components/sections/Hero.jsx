import SocialLinks from "../ui/SocialLinks";
import {
  FaDownload,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const Hero = () => {
  const handleCTAClick = (e) => {
    e.preventDefault();
    const element = document.querySelector("#work-experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    const cvPath = "../../../public/assets/hero/cv/CV_Khoirul Malik.pdf";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Khoirul_Malik_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-900 px-6 lg:px-12 pt-20"
    >
      {/* --- BACKGROUND EFFECTS --- */}
      {/* 1. Tech Grid Background */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" /> */}

      {/* 2. Gradient Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm text-gray-300 font-medium">Available</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-[1.1]">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent">
              Khoirul Malik
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-6 flex flex-col sm:flex-row gap-2">
            <span>Software Enginner</span>
            <span className="hidden sm:block text-gray-600">|</span>
            <span className="text-primary">Cloud & DevOps Engineer</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Final-year Internet Engineering student at <strong>UGM</strong>.
            Passionate about building scalable web applications and managing
            cloud infrastructure. Let's build something impactful together.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#work-experience"
              onClick={handleCTAClick}
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-1 text-center"
            >
              View My Work
            </a>

            <button
              onClick={handleDownloadCV}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            >
              <FaDownload className="group-hover:translate-y-1 transition-transform" />
              <span>Download CV</span>
            </button>
          </div>

          <div className="mt-10">
            <SocialLinks />
          </div>
        </div>

        {/* --- RIGHT SIDE: VISUAL / ANIMATED TECH STACK --- */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          {/* Abstract Container Circle */}
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
            {/* Center Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gray-900 rounded-full border border-white/10 flex items-center justify-center shadow-2xl z-10">
              <span className="text-4xl">🚀</span>
            </div>

            {/* Orbiting Icons (Posisi diatur manual agar aesthetic) */}

            {/* Icon 1: React */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-float-slow">
              <div className="w-16 h-16 bg-gray-800/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 hover:rotate-0 transition-all cursor-pointer hover:scale-110">
                <FaReact className="text-3xl text-[#61DAFB]" />
              </div>
            </div>

            {/* Icon 2: AWS */}
            <div className="absolute top-1/4 right-0 animate-float-medium">
              <div className="w-20 h-20 bg-gray-800/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-all cursor-pointer hover:scale-110">
                <FaAws className="text-4xl text-[#FF9900]" />
              </div>
            </div>

            {/* Icon 3: TypeScript */}
            <div className="absolute bottom-1/4 right-4 animate-float-fast">
              <div className="w-14 h-14 bg-gray-800/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 hover:rotate-0 transition-all cursor-pointer hover:scale-110">
                <SiTypescript className="text-2xl text-[#3178C6]" />
              </div>
            </div>

            {/* Icon 4: Docker */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-float-slow">
              <div className="w-18 h-18 bg-gray-800/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6 hover:rotate-0 transition-all cursor-pointer hover:scale-110">
                <FaDocker className="text-4xl text-[#2496ED]" />
              </div>
            </div>

            {/* Icon 5: Node */}
            <div className="absolute bottom-1/4 left-4 animate-float-medium">
              <div className="w-16 h-16 bg-gray-800/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 hover:rotate-0 transition-all cursor-pointer hover:scale-110">
                <FaNodeJs className="text-3xl text-[#339933]" />
              </div>
            </div>

            {/* Icon 6: NextJS */}
            <div className="absolute top-1/4 left-0 animate-float-fast">
              <div className="w-14 h-14 bg-gray-800/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-all cursor-pointer hover:scale-110">
                <SiNextdotjs className="text-2xl text-white" />
              </div>
            </div>

            {/* Connecting Lines (Optional decorative) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
                className="text-primary animate-spin-slow-reverse"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
                className="text-white animate-spin-slow"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Custom Animations in styles (if not in tailwind.config) */}
      <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          .animate-float-slow { animation: float 6s ease-in-out infinite; }
          .animate-float-medium { animation: float 5s ease-in-out infinite; animation-delay: 1s; }
          .animate-float-fast { animation: float 4s ease-in-out infinite; animation-delay: 2s; }
          
          @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes spin-slow-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
          
          .animate-spin-slow { animation: spin-slow 20s linear infinite; }
          .animate-spin-slow-reverse { animation: spin-slow-reverse 25s linear infinite; }
          
          .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        `}</style>
    </section>
  );
};

export default Hero;
