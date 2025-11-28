import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import SectionTitle from "../ui/SectionTitle";
import CertificateCard from "../ui/CertificateCard";
import { certificatesData } from "../data/certificatesData";
import {
  FaChevronLeft,
  FaChevronRight,
  FaMedal,
  FaTrophy,
  FaAward,
} from "react-icons/fa";

const Certificates = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Group certificates by issuer for stats
  const certsByIssuer = certificatesData.reduce((acc, cert) => {
    acc[cert.issuer] = (acc[cert.issuer] || 0) + 1;
    return acc;
  }, {});

  const totalProviders = Object.keys(certsByIssuer).length;

  return (
    <section
      id="certificates"
      className="py-24 relative px-4 bg-dark-900 overflow-hidden"
    >
      {/* Enhanced Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Decorative Icons */}
      <div className="absolute top-20 left-10 text-primary/5 text-6xl pointer-events-none animate-bounce-slow">
        <FaTrophy />
      </div>
      <div
        className="absolute bottom-32 right-16 text-primary/5 text-5xl pointer-events-none animate-bounce-slow"
        style={{ animationDelay: "1s" }}
      >
        <FaAward />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header with Stats */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="relative">
            <SectionTitle>Certifications</SectionTitle>
            <p className="text-gray-400 mt-4 max-w-xl">
              Continuous learning and professional development achievements
              across{" "}
              <span className="text-primary font-semibold">
                {totalProviders} organizations
              </span>
            </p>

            {/* Stats Pills */}
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-full px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <FaMedal className="text-primary text-sm" />
                <span className="text-sm font-semibold text-white">
                  {certificatesData.length} Certificates
                </span>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-full px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <FaTrophy className="text-purple-400 text-sm" />
                <span className="text-sm font-semibold text-white">
                  {totalProviders} Providers
                </span>
              </div>
            </div>

            {/* Decorative Icon */}
            <div className="absolute -left-10 -top-8 text-primary/5 text-8xl pointer-events-none rotate-12 animate-pulse">
              <FaMedal />
            </div>
          </div>

          {/* Enhanced Navigation with Counter */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-12 h-12 rounded-xl border border-white/10 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/25 active:scale-95 group"
                aria-label="Previous slide"
              >
                <FaChevronLeft
                  size={16}
                  className="group-hover:animate-pulse"
                />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-12 h-12 rounded-xl border border-white/10 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/25 active:scale-95 group"
                aria-label="Next slide"
              >
                <FaChevronRight
                  size={16}
                  className="group-hover:animate-pulse"
                />
              </button>
            </div>

            {/* Progress Indicator */}
            <div className="text-center text-sm text-gray-400 font-mono">
              <span className="text-primary font-bold">{activeIndex + 1}</span>{" "}
              / {certificatesData.length}
            </div>
          </div>
        </div>

        {/* Enhanced Swiper with Hover Effects */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            navigation={false}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              renderBullet: (index, className) => {
                return `<span class="${className} !bg-primary !w-3 !h-3"></span>`;
              },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
                effect: "slide",
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
                effect: "slide",
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                effect: "slide",
              },
            }}
            className="pb-16 px-2"
          >
            {certificatesData.map((cert) => (
              <SwiperSlide key={cert.id} className="h-auto pt-2 pb-6">
                <CertificateCard cert={cert} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Hover Overlay Effect */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5 rounded-3xl" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Certificates;
