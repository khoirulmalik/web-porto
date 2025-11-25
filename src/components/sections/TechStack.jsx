import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SectionTitle from "../ui/SectionTitle";
import TechCard from "../ui/TechCard";
import { techStackData } from "../data/techStackData";

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 relative px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Technical Skills</SectionTitle>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="pb-16"
        >
          {techStackData.map((tech) => (
            <SwiperSlide key={tech.id} className="h-auto">
              <TechCard tech={tech} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TechStack;
