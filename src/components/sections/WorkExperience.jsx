import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import WorkExperienceModal from "../ui/WorkExperienceModal";
import { experiencesData } from "../data/experiencesData";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const WorkExperience = () => {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (exp) => {
    setModalData(exp);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalData(null), 300);
  };

  return (
    <section
      id="work-experience"
      className="py-24 relative px-4 bg-dark-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle>Work Experience</SectionTitle>

        <div className="relative mt-16">
          {/* --- CENTRAL LINE (The Spine) --- */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-secondary md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-20">
            {experiencesData.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* --- 1. THE DATE (Opposite Side) --- */}
                  <div className="hidden md:flex w-1/2 justify-center mb-0 px-10">
                    <div
                      className={`flex items-center gap-2 text-primary font-mono font-bold text-lg ${
                        isEven ? "justify-start" : "justify-end w-full"
                      }`}
                    >
                      <FaCalendarAlt />
                      {exp.period}
                    </div>
                  </div>

                  {/* --- 2. CENTRAL NODE (The Icon) --- */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 border-2 border-primary shadow-[0_0_15px_rgba(37,99,235,0.5)] z-20">
                    <FaBriefcase className="text-primary text-sm" />
                  </div>

                  {/* --- 3. THE CARD (Content) --- */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10">
                    {/* Connector Line (Mobile only - horizontal short line) */}
                    <div className="absolute left-4 top-5 w-8 h-0.5 bg-primary md:hidden"></div>

                    <div className="group relative bg-gray-900/80 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                      {/* Mobile Date (Visible only on mobile) */}
                      <div className="md:hidden flex items-center gap-2 text-primary text-sm font-bold mb-3 font-mono">
                        <FaCalendarAlt /> {exp.period}
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-gray-300 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-2 sm:mt-0 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                          <FaMapMarkerAlt /> {exp.location} · {exp.type}
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {exp.description}
                      </p>

                      {/* Achievements Preview (Limited) */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mb-6 space-y-2">
                          {exp.achievements.slice(0, 2).map((ach, i) => (
                            <div
                              key={i}
                              className="flex gap-3 text-sm text-gray-400"
                            >
                              <span className="text-primary min-w-[4px] mt-1.5 h-1 w-1 rounded-full bg-primary block"></span>
                              <span className="line-clamp-1">{ach}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <button
                        onClick={() => handleViewDetails(exp)}
                        className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors group/btn"
                      >
                        Read More
                        <FaArrowRight className="transform transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <WorkExperienceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={modalData}
      />
    </section>
  );
};

export default WorkExperience;
