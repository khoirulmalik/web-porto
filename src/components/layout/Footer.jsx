import SocialLinks from "../ui/SocialLinks";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="py-12 bg-[#0f0f23]/80 backdrop-blur-lg mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Get In Touch
        </h2>

        <p className="text-gray-400 max-w-lg mx-auto mb-8">
          I'm currently seeking new opportunities. Feel free to reach out via
          email or connect with me on social media.
        </p>

        <SocialLinks className="mb-8" />

        <p className="text-gray-500 text-sm">
          &copy; 2025 Khoirul Malik. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
