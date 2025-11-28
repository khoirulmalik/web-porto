import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { projectsData } from "../data/projectsData";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaDocker,
  FaChevronRight,
  FaArrowLeft,
  FaArrowRight,
  FaCode,
  FaReact,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaAws,
  FaJava,
  FaPython,
  FaJenkins,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
  SiMongodb,
  SiGo,
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiGrafana,
  SiPrometheus,
  SiNginx,
  SiSocketdotio,
  SiChartdotjs,
  SiBootstrap,
  SiFlask,
  SiSwagger,
  SiGit,
} from "react-icons/si";

const getTechIcon = (techName) => {
  const normalizedName = techName.toLowerCase();

  const iconMap = {
    react: <FaReact className="text-[#61DAFB]" />,
    "tailwind css": <SiTailwindcss className="text-[#06B6D4]" />,
    javascript: <SiJavascript className="text-[#F7DF1E]" />,
    "node.js": <FaNodeJs className="text-[#339933]" />,
    "hapi.js": <FaServer className="text-gray-300" />,
    postgresql: <SiPostgresql className="text-[#4169E1]" />,
    redis: <SiRedis className="text-[#DC382D]" />,
    rabbitmq: <SiRabbitmq className="text-[#FF6600]" />,
    docker: <FaDocker className="text-[#2496ED]" />,
    "docker compose": <FaDocker className="text-[#2496ED]" />,
    mongodb: <SiMongodb className="text-[#47A248]" />,
    go: <SiGo className="text-[#00ADD8]" />,
    "express.js": <SiExpress className="text-white" />,
    mongoose: <SiMongodb className="text-[#47A248]" />, // Mongoose pakai logo Mongo
    jenkins: <FaJenkins className="text-[#D24939]" />,
    prometheus: <SiPrometheus className="text-[#E6522C]" />,
    grafana: <SiGrafana className="text-[#F46800]" />,
    nginx: <SiNginx className="text-[#009639]" />,
    "websocket (ws)": <SiSocketdotio className="text-white" />, // Representasi socket
    "chart.js": <SiChartdotjs className="text-[#FF6384]" />,
    "bootstrap 5": <SiBootstrap className="text-[#7952B3]" />,
    "python/flask": <SiFlask className="text-white" />,
    swagger: <SiSwagger className="text-[#85EA2D]" />,
    git: <SiGit className="text-[#F05032]" />,
  };

  const key = Object.keys(iconMap).find((k) => normalizedName.includes(k));

  return key ? iconMap[key] : <FaCode className="text-gray-400" />;
};

const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentProject = projectsData[activeIndex];
  const ProjectIcon = currentProject.icon || FaCode;

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  return (
    <section
      id="featured-projects"
      className="py-20 px-4 bg-dark-900 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle>Featured Projects</SectionTitle>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 h-[700px]">
          {/* --- LEFT COLUMN: List --- */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-3 h-full overflow-hidden">
            <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2 px-2 flex-shrink-0">
              Project List
            </h3>
            {/* List Scrollable */}
            <div className="space-y-2 overflow-y-auto custom-scrollbar pr-2 flex-1">
              {projectsData.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border group flex items-center justify-between
                    ${
                      activeIndex === index
                        ? "bg-white/10 border-primary/50 shadow-lg shadow-primary/10 translate-x-2"
                        : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10 text-gray-400"
                    }`}
                >
                  <div className="flex-1 min-w-0">
                    <h4
                      className={`font-bold text-lg truncate transition-colors ${
                        activeIndex === index
                          ? "text-white"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {project.title}
                    </h4>
                    <p className="text-xs text-primary mt-1 truncate">
                      {project.category}
                    </p>
                  </div>
                  {activeIndex === index && (
                    <FaChevronRight className="text-primary animate-pulse ml-2" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: Content --- */}
          <div className="lg:col-span-8 h-full">
            {/* Wrapper Kartu Utama (Full Height Fixed) */}
            <div className="bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl h-full flex flex-col relative">
              {/* IMAGE HEADER (Fixed Height) */}
              <div className="relative h-64 w-full overflow-hidden group bg-black flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />

                {currentProject.images && currentProject.images.length > 0 ? (
                  <img
                    key={currentProject.images[0]}
                    src={currentProject.images[0]}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-105 animate-fadeIn"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                    <ProjectIcon className="text-[12rem] text-white/5 absolute -right-10 -bottom-10 rotate-12" />
                    <div className="z-10 flex flex-col items-center animate-fadeIn">
                      <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-4 backdrop-blur-sm shadow-lg">
                        <ProjectIcon className="text-5xl text-primary" />
                      </div>
                      <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">
                        Backend / System Project
                      </span>
                    </div>
                  </div>
                )}

                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                    {currentProject.role}
                  </span>
                </div>
              </div>

              {/* CONTENT BODY (Scrollable Area) */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 flex flex-col">
                {/* Mobile Header: Angka */}
                <div className="flex justify-between items-center mb-4 lg:hidden flex-shrink-0">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                    {activeIndex + 1} / {projectsData.length}
                  </span>
                </div>

                {/* Title & Tech Stack */}
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-4 leading-tight animate-fadeIn">
                    {currentProject.title}
                  </h2>

                  {/* 3. TECH STACK WITH ICONS */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {currentProject.techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300 hover:bg-white/10 hover:border-primary/50 transition-colors cursor-default"
                        title={tech}
                      >
                        {/* Render Icon here */}
                        <span className="text-lg">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-300 leading-relaxed text-base animate-fadeIn">
                    {currentProject.description}
                  </p>
                </div>

                {/* Features List */}
                {currentProject.features &&
                  currentProject.features.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                        <FaCode className="text-primary" /> Key Features
                      </h4>
                      <ul className="space-y-2">
                        {currentProject.features
                          .slice(0, 3)
                          .map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex gap-3 text-sm text-gray-400"
                            >
                              <span className="text-primary mt-1.5 min-w-[4px] h-1 w-1 rounded-full bg-primary block"></span>
                              <span className="line-clamp-1">
                                {feature.replace(/\*\*/g, "")}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
              </div>

              {/* FOOTER ACTIONS (Fixed at Bottom) */}
              <div className="p-6 border-t border-white/10 bg-gray-900/50 backdrop-blur-md flex-shrink-0 flex flex-wrap gap-4">
                {currentProject.demoUrl && (
                  <a
                    href={currentProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-primary/30 text-sm"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {currentProject.githubUrl && (
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all border border-white/10 text-sm"
                  >
                    <FaGithub size={18} /> Source Code
                  </a>
                )}
                {currentProject.dockerHub && (
                  <a
                    href={currentProject.dockerHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-900/40 hover:bg-blue-800/60 text-white rounded-xl font-semibold transition-all border border-blue-500/30 text-sm"
                  >
                    <FaDocker size={18} className="text-blue-400" /> Docker Hub
                  </a>
                )}

                {/* Mobile Navigation */}
                <div className="flex gap-2 ml-auto lg:hidden">
                  <button
                    onClick={handlePrev}
                    className="p-3 bg-gray-800 rounded-lg text-white hover:bg-gray-700"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 bg-primary rounded-lg text-white hover:bg-primary-dark"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;
