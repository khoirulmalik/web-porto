import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 group"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-xl group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
