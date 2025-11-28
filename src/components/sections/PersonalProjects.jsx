import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import Modal from "../ui/Modal";
import { projectsData } from "../data/projectsData";
import { FaChevronLeft, FaChevronRight, FaCode } from "react-icons/fa";

const Projects = () => {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const swiperRef = useRef(null);

  const handleSeeMore = (project) => {
    setModalData(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalData(null), 300);
  };

  return (
    <section
      id="projects"
      className="py-24 relative px-4 bg-dark-900 overflow-hidden"
    >
      {/* Background Decor (Subtle Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section dengan Navigasi di Kanan */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <SectionTitle>Featured Projects</SectionTitle>
            <p className="text-gray-400 mt-4 max-w-xl">
              A collection of personal, academic, and side projects that
              showcase my coding journey.
            </p>
          </div>

          {/* Custom Navigation Buttons (Top Right) */}
          <div className="flex gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full border border-white/10 bg-gray-800 flex items-center justify-center text-white transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110 active:scale-95"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full border border-white/10 bg-gray-800 flex items-center justify-center text-white transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110 active:scale-95"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* The Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="pb-12 px-2" // Padding bawah agar shadow tidak terpotong
        >
          {projectsData.map((project) => (
            <SwiperSlide key={project.id} className="h-auto">
              {/* Wrapper tambahan agar hover effect ProjectCard tidak terpotong overflow hidden swiper */}
              <div className="h-full pt-2 pb-6 px-1">
                <ProjectCard
                  project={project}
                  onSeeMore={() => handleSeeMore(project)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dekorasi Ikon Code Melayang */}
        <div className="absolute -left-12 bottom-20 text-white/5 text-9xl -rotate-12 pointer-events-none select-none">
          <FaCode />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} data={modalData} />
    </section>
  );
};

export default Projects;
