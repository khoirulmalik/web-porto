import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import Modal from "../ui/Modal";
import { experienceData } from "../data/experienceData";

const Experience = () => {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSeeMore = (experience) => {
    setModalData(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalData(null), 300);
  };

  return (
    <section id="experience" className="py-20 relative px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Work Experience</SectionTitle>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          grabCursor={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="pb-16"
        >
          {experienceData.map((experience) => (
            <SwiperSlide key={experience.id} className="h-auto">
              <ProjectCard
                project={experience}
                onSeeMore={() => handleSeeMore(experience)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} data={modalData} />
    </section>
  );
};

export default Experience;
