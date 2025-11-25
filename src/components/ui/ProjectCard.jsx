const ProjectCard = ({ project, onSeeMore }) => {
  return (
    <div className="card-base h-full flex flex-col">
      {/* Project Image */}
      <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : project.icon ? (
          <div className="text-5xl text-primary opacity-80">
            <project.icon />
          </div>
        ) : null}
      </div>

      {/* Project Info */}
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>

      {project.role && (
        <p className="text-secondary font-semibold mb-2">{project.role}</p>
      )}

      {project.duration && (
        <p className="text-sm text-gray-400 mb-4">{project.duration}</p>
      )}

      <p className="text-gray-300 mb-4 flex-grow leading-relaxed text-sm">
        {project.description}
      </p>

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* See More Button */}
      <button
        onClick={onSeeMore}
        className="mt-auto self-start px-6 py-2 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40"
      >
        See More
      </button>
    </div>
  );
};

export default ProjectCard;
