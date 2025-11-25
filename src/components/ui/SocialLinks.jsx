import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const SocialLinks = ({ className = "" }) => {
  const socialLinks = [
    {
      href: "https://bit.ly/LinkedIn_KhoirulMalik",
      icon: FaLinkedinIn,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/khoirulmalik",
      icon: FaGithub,
      label: "GitHub",
    },
    {
      href: "mailto:khoirulmalik03@gmail.com",
      icon: FaEnvelope,
      label: "Email",
    },
    {
      href: "https://wa.me/6282111360087",
      icon: FaWhatsapp,
      label: "WhatsApp",
    },
  ];

  return (
    <div className={`flex justify-center gap-6 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
            rel={link.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
            className="inline-flex items-center justify-center w-12 h-12 bg-white/10 border-2 border-white/20 rounded-full text-white text-xl transition-all duration-300 backdrop-blur-lg hover:bg-primary hover:border-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"
            aria-label={link.label}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
