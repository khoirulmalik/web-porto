import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efek scroll untuk mengubah background Navbar
  useEffect(() => {
    const handleScroll = () => {
      // Navbar aktif jika discroll lebih dari 10px (sedikit lebih sensitif dari 50)
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#work-experience", label: "Experience" }, // Diperpendek
    { href: "#projects", label: "Projects" }, // Diperpendek & disatukan
    { href: "#tech-stack", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#organization", label: "Organization" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      // 1. SCROLL OFFSET FIX: Menggunakan getBoundingClientRect().top
      // Ditambah offset 80px (sesuai tinggi Navbar)
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[9000] transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f23]/98 shadow-xl border-b border-white/5 py-3"
          : "bg-[#0f0f23]/90 py-4"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand Name (Visible on Desktop, Hidden on Mobile) */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-lg font-semibold tracking-wider text-white transition-colors uppercase cursor-pointer"
          >
            <span className="hidden sm:inline">KHOIRUL MALIK</span>
            <span className="sm:hidden text-primary">KM</span>{" "}
            {/* Tetap minimalis di mobile */}
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-gray-300 font-medium hover:text-primary transition-all duration-300 
                             before:content-[''] before:absolute before:w-0 before:h-0.5 before:bottom-[-5px] before:left-0 before:bg-primary 
                             hover:before:w-full before:transition-all before:duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white text-3xl p-1 rounded hover:text-primary transition-colors border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden absolute top-16 left-0 w-full bg-[#0f0f23] shadow-lg border-t border-white/10"
          style={{ maxHeight: "calc(100vh - 64px)" }} // Agar menu tidak melebihi tinggi layar
        >
          <ul className="flex flex-col gap-2 p-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-gray-200 text-lg hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
