const SectionTitle = ({ children, className = "" }) => {
  return (
    <h2
      className={`text-center text-4xl md:text-5xl font-bold mb-12 text-white relative ${className}`}
    >
      {children}
      <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
    </h2>
  );
};

export default SectionTitle;
