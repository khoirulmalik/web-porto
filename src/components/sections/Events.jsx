import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { eventsData } from "../data/eventsData";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaArrowLeft,
  FaTrophy,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";

const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentEvent = eventsData[activeIndex];

  // Handler navigasi mobile
  const handleNext = () => {
    setActiveIndex((prev) => (prev === eventsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? eventsData.length - 1 : prev - 1));
  };

  return (
    <section
      id="events"
      className="py-20 px-4 bg-dark-900 relative overflow-hidden"
    >
      {/* Background Glow yang halus */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle>Experience Journey</SectionTitle>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 h-full">
          {/* --- LEFT COLUMN: Navigation List (Desktop Only) --- */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-3 h-full">
            <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2 px-2">
              Timeline List
            </h3>
            <div className="space-y-2">
              {eventsData.map((event, index) => (
                <button
                  key={event.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border group flex items-center justify-between
                    ${
                      activeIndex === index
                        ? "bg-white/10 border-primary/50 shadow-lg shadow-primary/10 translate-x-2"
                        : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10 text-gray-400"
                    }`}
                >
                  <div>
                    <h4
                      className={`font-bold text-lg transition-colors ${
                        activeIndex === index
                          ? "text-white"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {event.eventName}
                    </h4>
                    <p className="text-xs text-primary mt-1">{event.period}</p>
                  </div>
                  {activeIndex === index && (
                    <FaChevronRight className="text-primary animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: Content Display (No Image Version) --- */}
          <div className="lg:col-span-8">
            {/* Wrapper Kartu Utama */}
            <div className="relative bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl h-full flex flex-col justify-center min-h-[400px]">
              {/* Decorative Watermark Icon (Background) */}
              <div className="absolute top-[-20px] right-[-20px] text-white/5 text-[200px] rotate-12 pointer-events-none select-none transition-all duration-500">
                <FaTrophy />
              </div>

              <div className="absolute bottom-[10%] left-[5%] w-32 h-32 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>

              {/* Konten Teks */}
              <div className="p-8 lg:p-12 relative z-10 flex flex-col h-full">
                {/* Header Mobile: Navigasi Angka */}
                <div className="flex justify-between items-center mb-6 lg:hidden">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {activeIndex + 1} / {eventsData.length}
                  </span>
                </div>

                {/* Main Content Header */}
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wide mb-4 shadow-lg shadow-primary/20">
                    {currentEvent.role}
                  </span>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    {currentEvent.eventName}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-400 border-b border-white/10 pb-6">
                    <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg">
                      <FaCalendarAlt className="text-primary" />
                      {currentEvent.period}
                    </span>
                    <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg">
                      <FaMapMarkerAlt className="text-primary" />
                      {currentEvent.organizer}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-grow">
                  <div className="flex gap-4 mb-4">
                    <FaQuoteRight className="text-4xl text-white/10 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {currentEvent.description}
                    </p>
                  </div>

                  {/* Achievements Tags */}
                  {currentEvent.achievements &&
                    currentEvent.achievements.length > 0 && (
                      <div className="mt-8">
                        <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2 uppercase tracking-wider opacity-80">
                          Key Takeaways
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {currentEvent.achievements.map((item, idx) => (
                            <span
                              key={idx}
                              className="text-sm bg-[#0f0f23] border border-white/10 px-4 py-2 rounded-xl text-gray-300 hover:border-primary/50 transition-colors"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                </div>

                {/* Mobile Navigation Buttons (Hanya muncul di mobile/tablet) */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10 lg:hidden">
                  <button
                    onClick={handlePrev}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                  >
                    <FaArrowLeft /> Previous
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 text-sm text-primary font-semibold hover:text-primary-light transition-colors px-4 py-2 rounded-lg hover:bg-primary/10"
                  >
                    Next <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
