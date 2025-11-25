import { useEffect } from "react";
import { HiX } from "react-icons/hi";

const Modal = ({ isOpen, onClose, data }) => {
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

  return (
    <div
      className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-[#0f0f23]/95 to-[#1a1a3a]/95 rounded-2xl border border-primary/30 max-w-4xl w-full max-h-[85vh] overflow-y-auto p-8 animate-fadeInUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="float-right text-gray-400 hover:text-primary transition-colors text-3xl"
          aria-label="Close modal"
        >
          <HiX />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-6 pr-12">
          {data.title}
        </h2>

        {/* Details Grid */}
        {data.role && data.duration && (
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/5 p-4 rounded-lg border-l-4 border-primary">
              <h4 className="text-white font-semibold mb-2">Role</h4>
              <p className="text-gray-300 text-sm">{data.role}</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border-l-4 border-primary">
              <h4 className="text-white font-semibold mb-2">Timeline</h4>
              <p className="text-gray-300 text-sm">{data.duration}</p>
            </div>
          </div>
        )}

        {/* Description */}
        {data.modalDescription && (
          <p className="text-gray-300 mb-6 leading-relaxed">
            {data.modalDescription}
          </p>
        )}

        {/* Key Responsibilities */}
        {data.responsibilities && data.responsibilities.length > 0 && (
          <div className="mb-6">
            <h4 className="text-primary text-xl font-semibold mb-3">
              Key Responsibilities:
            </h4>
            <ul className="space-y-2 text-gray-300">
              {data.responsibilities.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {data.techStack && data.techStack.length > 0 && (
          <div>
            <h4 className="text-primary text-xl font-semibold mb-3">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
