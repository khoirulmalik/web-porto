import { useEffect } from "react";
import { createPortal } from "react-dom";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaBuilding,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaDocker,
  FaJenkins,
  FaPython,
  FaCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
  SiMongodb,
  SiGo,
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiGithub,
  SiTerraform,
  SiAngular,
  SiChartdotjs,
} from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// HELPER FUNCTION UNTUK MENGAMBIL IKON TEKNOLOGI
const getTechIcon = (techName) => {
  const normalizedName = techName
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s/g, "");

  const iconMap = {
    react: <FaReact className="text-[#61DAFB]" />,
    angular: <SiAngular className="text-[#DD0031]" />,
    tailwindcss: <SiTailwindcss className="text-[#06B6D4]" />,
    typescript: <SiTypescript className="text-[#3178C6]" />,
    "node.js": <FaNodeJs className="text-[#339933]" />,
    nestjs: <SiNestjs className="text-[#E0234E]" />,
    expressjs: <SiExpress className="text-white" />,
    postgresql: <SiPostgresql className="text-[#4169E1]" />,
    prismaorm: <SiPostgresql className="text-gray-300" />,
    jwt: <FaCode className="text-purple-400" />,
    githubactions: <SiGithub className="text-gray-300" />,
    terraform: <SiTerraform className="text-[#623CE4]" />,
    aws: <FaAws className="text-[#FF9900]" />,
    docker: <FaDocker className="text-[#2496ED]" />,
    redis: <SiRedis className="text-[#DC382D]" />,
    rabbitmq: <SiRabbitmq className="text-[#FF6600]" />,
    mongodb: <SiMongodb className="text-[#47A248]" />,
    go: <SiGo className="text-[#00ADD8]" />,
    jest: <SiTypescript className="text-[#C21325]" />,
    jenkins: <FaJenkins className="text-[#D24939]" />,
    python: <FaPython className="text-[#3776AB]" />,
    gorm: <FaDatabase className="text-gray-400" />,
    "chart.js": <SiChartdotjs className="text-[#FF6384]" />,
  };

  const key = Object.keys(iconMap).find((k) =>
    normalizedName.includes(k.replace(/\./g, "").replace(/\s/g, ""))
  );
  return key ? iconMap[key] : <FaCode className="text-gray-400" />;
};

const WorkExperienceModal = ({ isOpen, onClose, data }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !data) return null;

  const imageList = data.images || [];

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#0f0f23] border border-white/10 rounded-2xl shadow-2xl w-[95vw] max-w-7xl max-h-[90vh] flex flex-col overflow-hidden animate-fadeInUp relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Sticky Top) */}
        <div className="flex justify-between items-start p-6 border-b border-white/10 bg-[#0f0f23] z-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
              {data.position}
            </h2>
            <div className="flex items-center gap-2 text-primary font-semibold text-lg">
              <FaBuilding />
              <span>{data.company}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-full transition-colors"
            aria-label="Close modal"
          >
            <HiX size={28} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {/* --- 1. CINEMATIC GALLERY SECTION (Dengan penanganan ukuran gambar baru) --- */}
          {imageList.length > 0 && (
            <div className="relative w-full aspect-video md:aspect-[16/7] h-auto bg-black group">
              {" "}
              {/* Menggunakan aspect-video */}
              <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect="fade"
                navigation={{
                  nextEl: ".swiper-btn-next",
                  prevEl: ".swiper-btn-prev",
                }}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={imageList.length > 1}
                className="h-full w-full work-swiper"
              >
                {imageList.map((img, index) => (
                  <SwiperSlide key={index} className="relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-110"
                      style={{ backgroundImage: `url(${img})` }}
                    />
                    <div className="relative z-10 w-full h-full flex items-center justify-center backdrop-brightness-75">
                      <img
                        src={img}
                        alt={`${data.company} moment ${index + 1}`}
                        // PENTING: object-cover akan memenuhi container, memotong jika perlu.
                        // Jika Anda ingin seluruh gambar terlihat (dengan padding hitam jika perlu), gunakan object-contain
                        // Saya sarankan object-cover untuk estetika modern, tetapi sesuaikan jika ada logo penting
                        className="w-full h-full object-cover shadow-2xl"
                        // Jika ingin seluruh gambar terlihat tanpa terpotong, ganti menjadi:
                        // className="w-full h-full object-contain shadow-2xl"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Navigation Buttons (Hanya muncul jika hover & gambar > 1) */}
              {imageList.length > 1 && (
                <>
                  <button className="swiper-btn-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-black/40 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-primary border border-white/10 hover:scale-110">
                    <HiChevronLeft size={28} />
                  </button>
                  <button className="swiper-btn-next absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-black/40 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-primary border border-white/10 hover:scale-110">
                    <HiChevronRight size={28} />
                  </button>
                </>
              )}
            </div>
          )}

          {/* --- 2. DETAILS SECTION --- */}
          <div className="p-6 md:p-10 grid lg:grid-cols-4 gap-10">
            {/* Left Column (Main Content) - Takes 3 columns */}
            <div className="lg:col-span-3 space-y-10">
              {/* Meta Info Bar */}
              <div className="flex flex-wrap gap-4 md:gap-8 text-sm text-gray-400 border-b border-white/10 pb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                  <FaCalendarAlt className="text-primary" />
                  <span>{data.period}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                  <FaBriefcase className="text-primary" />
                  <span>{data.duration}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                  <FaMapMarkerAlt className="text-primary" />
                  <span>{data.location}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span>{data.type}</span>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  📝 Overview
                </h3>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                  {data.description}
                </p>
              </div>

              {/* Achievements / Responsibilities */}
              {data.detailedAchievements &&
                data.detailedAchievements.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      🚀 Key Achievements
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {data.detailedAchievements.map((item, index) => (
                        <div
                          key={index}
                          className="flex gap-3 text-gray-300 bg-white/[0.02] p-4 rounded-xl border border-white/5 hover:bg-primary/5 transition-colors hover:border-primary/50"
                        >
                          <span className="text-primary mt-1 min-w-[8px] h-2 w-2 rounded-full bg-primary block"></span>
                          <span className="text-sm leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>

            {/* Right Column (Tech Stack & Skills) */}
            <div className="lg:col-span-1">
              {data.techStack && data.techStack.length > 0 && (
                <div className="bg-[#15152e] p-6 rounded-2xl border border-white/10 sticky top-0 shadow-xl">
                  <h3 className="text-white text-lg font-bold mb-5 flex items-center gap-2 border-b border-white/10 pb-3">
                    🛠 Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {data.techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-1.5 bg-black/20 border border-white/10 text-gray-300 rounded-lg text-xs font-medium hover:border-primary/50 hover:text-white hover:bg-primary/10 transition-colors cursor-default"
                      >
                        <span className="text-lg flex items-center">
                          {getTechIcon(tech)}
                        </span>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .work-swiper .swiper-pagination-bullet {
            background: white;
            opacity: 0.5;
            width: 8px;
            height: 8px;
        }
        .work-swiper .swiper-pagination-bullet-active {
            background: #3b82f6; 
            opacity: 1;
            width: 24px;
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            border: 2px solid rgba(0,0,0,0.2);
            background-clip: padding-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>,
    document.body
  );
};

export default WorkExperienceModal;
