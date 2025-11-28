import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import SectionTitle from "../ui/SectionTitle";
import TechCard from "../ui/TechCard";
import { techStackData } from "../data/techStackData";
import {
  FaCode,
  FaServer,
  FaCloud,
  FaTools,
  FaRocket,
  FaLayerGroup,
  FaCog,
} from "react-icons/fa";

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const halfLength = Math.ceil(techStackData.length / 2);
  const firstRow = techStackData.slice(0, halfLength);
  const secondRow = techStackData.slice(halfLength);

  const marqueeSettings = {
    modules: [Autoplay],
    spaceBetween: 30,
    slidesPerView: "auto",
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  };

  const skillPillars = [
    {
      title: "Frontend Mastery",
      icon: FaCode,
      color: "blue",
      gradient: "from-blue-500/10 to-blue-600/5",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/10",
      iconBgHover: "group-hover:bg-blue-500/20",
      iconColor: "text-blue-400",
      skills: ["React", "Next.js", "Tailwind", "TypeScript", "Vite"],
      description:
        "Building beautiful, responsive, and performant user interfaces",
    },
    {
      title: "Backend & API",
      icon: FaServer,
      color: "green",
      gradient: "from-green-500/10 to-green-600/5",
      borderColor: "border-green-500/30",
      iconBg: "bg-green-500/10",
      iconBgHover: "group-hover:bg-green-500/20",
      iconColor: "text-green-400",
      skills: ["Node.js", "NestJS", "PostgreSQL", "Redis", "REST API"],
      description: "Crafting robust and scalable server-side solutions",
    },
    {
      title: "DevOps & Cloud",
      icon: FaCloud,
      color: "orange",
      gradient: "from-orange-500/10 to-orange-600/5",
      borderColor: "border-orange-500/30",
      iconBg: "bg-orange-500/10",
      iconBgHover: "group-hover:bg-orange-500/20",
      iconColor: "text-orange-400",
      skills: ["AWS", "Docker", "CI/CD", "Terraform", "Kubernetes"],
      description: "Deploying and managing cloud infrastructure efficiently",
    },
  ];

  const stats = [
    { label: "Technologies", value: techStackData.length, icon: FaLayerGroup },
    { label: "Years Experience", value: "3+", icon: FaRocket },
    { label: "Projects Built", value: "50+", icon: FaCog },
  ];

  return (
    <section
      id="tech-stack"
      className="py-24 relative px-4 bg-dark-900 overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Decorative Icons */}
      <div className="absolute top-20 left-10 text-primary/5 text-5xl pointer-events-none animate-float">
        <FaCode />
      </div>
      <div
        className="absolute bottom-20 right-16 text-primary/5 text-4xl pointer-events-none animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <FaTools />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <SectionTitle>Technical Arsenal</SectionTitle>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My weapon of choice for building scalable and robust applications
          </p>

          {/* Stats Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full px-5 py-2.5 flex items-center gap-3 hover:scale-105 transition-transform duration-300"
              >
                <stat.icon className="text-primary text-lg" />
                <div className="text-left">
                  <div className="text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Section */}
        <div className="space-y-8 mb-20">
          {/* Row 1: Left to Right */}
          <div className="relative group">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />

            <Swiper
              {...marqueeSettings}
              className="tech-marquee-swiper"
              dir="ltr"
            >
              {firstRow.map((tech) => (
                <SwiperSlide key={tech.id} className="!w-auto">
                  <div className="opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110">
                    <div className="w-40">
                      <TechCard tech={tech} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Row 2: Right to Left */}
          <div className="relative group">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />

            <Swiper
              {...marqueeSettings}
              className="tech-marquee-swiper"
              dir="rtl"
            >
              {secondRow.map((tech) => (
                <SwiperSlide key={tech.id} className="!w-auto">
                  <div className="opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110">
                    <div className="w-40">
                      <TechCard tech={tech} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Skills Pillars Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">
            Core Expertise
          </h3>
          <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
            Specialized skills across the full development lifecycle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skillPillars.map((pillar, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${pillar.gradient} backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-gray-900 hover:${pillar.borderColor} transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden`}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${pillar.iconBg} ${pillar.iconBgHover} rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <pillar.icon className={`text-3xl ${pillar.iconColor}`} />
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {pillar.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800/80 text-gray-300 px-3 py-1.5 rounded-lg border border-white/5 hover:border-primary/30 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${pillar.color}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .tech-marquee-swiper .swiper-wrapper {
          transition-timing-function: linear;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
