import { useState, useRef } from "react";
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
import ProjectCard from "../ui/ProjectCard";
import Modal from "../ui/Modal";
import { industryProjectsData } from "../data/industryProjectsData.js";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const IndustryProjects = () => {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const swiperRef = useRef(null);

  const handleSeeMore = (experience) => {
    setModalData(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalData(null), 300);
  };

  return (
    <section
      id="industry-projects"
      className="py-24 relative px-4 overflow-hidden bg-dark-900"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <SectionTitle>Industry Projects</SectionTitle>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real-world solutions delivered for clients and companies. Swipe to
            explore.
          </p>
        </div>

        <div className="relative px-2">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0, // Rotasi kartu samping (0 biar rapi flat, 50 kalau mau miring bgt)
              stretch: 0,
              depth: 100, // Kedalaman efek 3D
              modifier: 2.5, // Seberapa kuat efeknya
              slideShadows: false, // Matikan bayangan default swiper yg kadang jelek
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="industry-swiper py-10"
          >
            {industryProjectsData.map((experience) => (
              // Width di set manual disini agar efek centered slides jalan bagus
              <SwiperSlide
                key={experience.id}
                className="w-[85%] md:w-[600px] lg:w-[450px]"
              >
                {/* Tambahkan efek opacity/scale biar yang tidak aktif agak redup */}
                {({ isActive }) => (
                  <div
                    className={`transition-all duration-500 ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-50 blur-[2px]"
                    }`}
                  >
                    <ProjectCard
                      project={experience}
                      onSeeMore={() => handleSeeMore(experience)}
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons (Dibawah slider) */}
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:border-primary text-white transition-all duration-300 hover:scale-110 active:scale-95 group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:border-primary text-white transition-all duration-300 hover:scale-110 active:scale-95 group"
            >
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} data={modalData} />
    </section>
  );
};

export default IndustryProjects;
