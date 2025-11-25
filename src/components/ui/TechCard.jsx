const TechCard = ({ tech }) => {
  const Icon = tech.icon;

  return (
    <div className="card-base text-center min-h-[220px] flex flex-col items-center justify-center group">
      <div className="text-6xl mb-4 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-secondary">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
    </div>
  );
};

export default TechCard;
