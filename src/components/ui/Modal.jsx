import { useEffect } from "react";
import { createPortal } from "react-dom";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaUserTie,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Modal = ({ isOpen, onClose, data }) => {
  // Lock body scroll
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

  const imageList = data.images || (data.image ? [data.image] : []);
  const hasImages = imageList.length > 0;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* CONTAINER MODAL (DYNAMIC WIDTH & LAYOUT)
          - Jika ada gambar: Lebar 95vw, Flex Row (Desktop)
          - Jika TIDAK ada gambar: Max-width 4xl (lebih kecil), Flex Column biasa
      */}
      <div
        className={`
            bg-gray-900 border border-white/10 rounded-2xl shadow-2xl 
            flex flex-col overflow-hidden animate-fadeInUp relative
            ${
              hasImages
                ? "w-[95vw] h-[90vh] lg:flex-row"
                : "w-full max-w-4xl max-h-[85vh]"
            }
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* --- AREA GAMBAR (Hanya dirender jika ada gambar) --- */}
        {hasImages && (
          <div className="w-full lg:w-[75%] h-[40vh] lg:h-full bg-black relative flex-shrink-0">
            {/* Close Button Mobile (Hanya muncul jika ada gambar) */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-[60] p-2 bg-black/60 backdrop-blur-md text-white rounded-full lg:hidden border border-white/10"
            >
              <HiX size={24} />
            </button>

            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              loop={imageList.length > 1}
              className="h-full w-full modal-swiper"
            >
              {imageList.map((img, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center bg-black"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={img}
                      alt={`${data.title} screenshot ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {imageList.length > 1 && (
              <>
                <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 backdrop-blur-md text-white rounded-full cursor-pointer hover:bg-primary/80 transition-all border border-white/10">
                  <HiChevronLeft size={24} />
                </div>
                <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 backdrop-blur-md text-white rounded-full cursor-pointer hover:bg-primary/80 transition-all border border-white/10">
                  <HiChevronRight size={24} />
                </div>
              </>
            )}
          </div>
        )}

        {/* --- AREA KONTEN (SIDEBAR / MAIN CONTENT) --- */}
        <div
          className={`
            w-full h-full flex flex-col bg-gray-900 relative
            ${hasImages ? "lg:w-[25%] border-l border-white/10" : "p-0"}
        `}
        >
          {/* Close Button Desktop (Atau Main Close jika tidak ada gambar) */}
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 z-50 text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full
                    ${hasImages ? "hidden lg:block" : "block"}
                `}
          >
            <HiX size={28} />
          </button>

          {/* Scrollable Content Area */}
          <div
            className={`flex-1 overflow-y-auto custom-scrollbar space-y-8 ${
              hasImages ? "p-6 lg:p-8" : "p-8 md:p-10"
            }`}
          >
            {/* Header Info */}
            <div className={`${!hasImages ? "pr-12" : ""}`}>
              {" "}
              {/* Padding right extra jika tidak ada gambar agar tidak nabrak close button */}
              {data.category && (
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20 uppercase tracking-wider mb-4">
                  {data.category}
                </span>
              )}
              <h2
                className={`font-bold text-white mb-4 leading-snug ${
                  hasImages ? "text-2xl" : "text-3xl md:text-4xl"
                }`}
              >
                {data.title}
              </h2>
              {/* Meta Tags */}
              <div className="flex flex-wrap gap-3 text-sm">
                {data.role && (
                  <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <FaUserTie className="text-primary w-4" />
                    <span>{data.role}</span>
                  </div>
                )}
                {data.duration && (
                  <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <FaCalendarAlt className="text-primary w-4" />
                    <span>{data.duration}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Overview */}
            {data.modalDescription && (
              <div>
                <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-2 text-gray-500">
                  Overview
                </h3>
                <p
                  className={`text-gray-300 leading-relaxed whitespace-pre-line ${
                    hasImages ? "text-sm" : "text-base"
                  }`}
                >
                  {data.modalDescription}
                </p>
              </div>
            )}

            {/* Features / features */}
            {data.features && data.features.length > 0 && (
              <div>
                <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {data.features.map((item, index) => (
                    <li
                      key={index}
                      className={`flex gap-3 text-gray-300 ${
                        hasImages ? "text-sm" : "text-base"
                      }`}
                    >
                      <span className="text-primary mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-primary block"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {data.techStack && data.techStack.length > 0 && (
              <div>
                <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">
                  Built With
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded ${
                        hasImages ? "text-xs" : "text-sm"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions (Sticky Bottom) */}
          {(data.demoUrl || data.githubUrl) && (
            <div
              className={`p-6 border-t border-white/10 bg-gray-900 mt-auto ${
                !hasImages ? "flex justify-end gap-4" : ""
              }`}
            >
              <div
                className={`flex gap-3 ${
                  hasImages ? "flex-col" : "flex-row w-full md:w-auto"
                }`}
              >
                {data.demoUrl && (
                  <a
                    href={data.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex justify-center items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all duration-300 text-sm ${
                      !hasImages ? "flex-1 md:flex-none" : ""
                    }`}
                  >
                    <FaExternalLinkAlt /> Visit Live Site
                  </a>
                )}
                {data.githubUrl && (
                  <a
                    href={data.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex justify-center items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all duration-300 border border-white/10 text-sm ${
                      !hasImages ? "flex-1 md:flex-none" : ""
                    }`}
                  >
                    <FaGithub size={16} /> View Code
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CSS Styles sama seperti sebelumnya */}
      <style>{`
        .modal-swiper .swiper-pagination-bullet {
            background: white;
            opacity: 0.5;
            width: 8px;
            height: 8px;
        }
        .modal-swiper .swiper-pagination-bullet-active {
            background: #3b82f6; 
            opacity: 1;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </div>,
    document.body
  );
};

export default Modal;
