import { useState } from "react";
import SocialLinks from "../ui/SocialLinks";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaRocket,
  FaHeart,
  FaArrowUp,
  FaCode,
  FaCoffee,
} from "react-icons/fa";

const Footer = () => {
  const [email] = useState("khoirulmalik@example.com"); // Replace with actual email
  const [showScrollTop, setShowScrollTop] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
  ];

  return (
    <footer
      id="contact"
      className="relative py-16 bg-gradient-to-b from-[#0f0f23] to-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Decorative Icons */}
      <div className="absolute top-10 left-10 text-primary/5 text-4xl pointer-events-none animate-float">
        <FaRocket />
      </div>
      <div
        className="absolute bottom-20 right-10 text-primary/5 text-3xl pointer-events-none animate-float"
        style={{ animationDelay: "1s" }}
      >
        <FaCode />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2 justify-center md:justify-start">
              <FaRocket className="text-primary" />
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm currently seeking new opportunities and exciting projects.
              Let's build something amazing together!
            </p>

            {/* Contact Details */}
            <div className="space-y-3">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group justify-center md:justify-start"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FaEnvelope className="text-primary" />
                </div>
                <span className="text-sm">{email}</span>
              </a>

              <div className="flex items-center gap-3 text-gray-400 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-primary" />
                </div>
                <span className="text-sm">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-primary transition-colors relative group"
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Social & CTA */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4 text-white">Follow Me</h3>
            <p className="text-gray-400 mb-6">
              Stay updated with my latest projects and thoughts
            </p>
            <SocialLinks className="mb-6 justify-center md:justify-end" />

            {/* CTA Button */}
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group"
            >
              <span>View My Work</span>
              <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <span>&copy; {currentYear} Khoirul Malik.</span>
            <span className="hidden sm:inline">Made with</span>
            <FaHeart className="text-red-500 text-xs animate-pulse" />
            <span className="hidden sm:inline">and</span>
            <FaCoffee className="text-amber-500 text-xs" />
          </p>

          {/* Tech Stack Badge */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Built with React & Tailwind CSS</span>
          </div>

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 group"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="group-hover:animate-bounce" />
            </button>
          )}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
