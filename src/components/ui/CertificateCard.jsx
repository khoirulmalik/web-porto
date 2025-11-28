import {
  FaExternalLinkAlt,
  FaAward,
  FaCheckCircle,
  FaCalendarAlt,
  FaCertificate,
  FaIdCard,
} from "react-icons/fa";
import { useState } from "react";

const CertificateCard = ({ cert }) => {
  const [imageError, setImageError] = useState(false);
  const IconComponent = cert.icon || FaAward;

  return (
    <div className="group relative h-full bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)] hover:-translate-y-3 hover:scale-[1.02]">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* --- Image Section --- */}
      <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-80 z-10" />

        {cert.image && !imageError ? (
          <img
            src={cert.image}
            alt={cert.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center relative">
            {/* Animated Icon Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
            </div>

            {/* Main Icon */}
            <div className="relative z-10 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
              <IconComponent className="text-7xl text-primary/30 group-hover:text-primary/50" />
            </div>

            {/* Orbiting Icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-40 h-40">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-primary/10 text-2xl animate-bounce-slow">
                  <FaCertificate />
                </div>
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 text-primary/10 text-2xl animate-bounce-slow"
                  style={{ animationDelay: "1s" }}
                >
                  <FaCertificate />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Verified Badge */}
        <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-md border border-green-500/30 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg shadow-green-500/10 group-hover:scale-110 transition-transform duration-300">
          <FaCheckCircle className="text-green-400 text-sm animate-pulse" />
          <span className="text-[11px] font-bold text-white uppercase tracking-wider">
            Verified
          </span>
        </div>

        {/* Issuer Badge */}
        <div className="absolute bottom-4 left-4 z-20 bg-primary/20 backdrop-blur-md border border-primary/30 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg group-hover:bg-primary/30 transition-all duration-300">
          <IconComponent className="text-primary text-base" />
          <span className="text-xs font-bold text-white">{cert.issuer}</span>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="p-6 relative z-20">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors duration-300">
          {cert.title}
        </h3>

        {/* Date Info */}
        <div className="flex items-center gap-2 mb-4 text-gray-400">
          <FaCalendarAlt className="text-sm text-primary/70" />
          <p className="text-sm font-mono">{cert.date}</p>
        </div>

        {/* Credential ID if available */}
        {cert.credentialId && (
          <div className="mb-4 p-3 bg-black/30 rounded-lg border border-white/5 group-hover:border-primary/20 transition-colors duration-300">
            <div className="flex items-center gap-2 mb-1">
              <FaIdCard className="text-xs text-gray-500" />
              <p className="text-xs text-gray-500 font-semibold">
                Credential ID
              </p>
            </div>
            <p className="text-xs font-mono text-gray-300 break-all">
              {cert.credentialId}
            </p>
          </div>
        )}

        {/* View Credential Link */}
        {cert.credentialUrl ? (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-center justify-between text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 border-t border-white/10 pt-4 w-full"
          >
            <span className="relative">
              View Credential
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
            </span>
            <FaExternalLinkAlt className="text-xs text-primary group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
          </a>
        ) : (
          <div className="flex items-center gap-2 text-sm text-gray-500 border-t border-white/10 pt-4">
            <FaCertificate className="text-xs" />
            <span>Certificate Issued</span>
          </div>
        )}
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CertificateCard;
