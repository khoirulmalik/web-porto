import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SectionTitle from "../ui/SectionTitle";
import CertificateCard from "../ui/CertificateCard";
import { certificatesData } from "../data/certificatesData";

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Certifications</SectionTitle>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          grabCursor={true}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="pb-16"
        >
          {certificatesData.map((cert) => (
            <SwiperSlide key={cert.id} className="h-auto">
              <CertificateCard cert={cert} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;
