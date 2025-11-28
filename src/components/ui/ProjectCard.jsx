import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, onSeeMore }) => {
  return (
    <div className="group relative h-full flex flex-col bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:-translate-y-2">
      {/* --- Image Section --- */}
      <div className="relative h-48 w-full overflow-hidden">
        {/* Overlay saat hover */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}

        {/* Floating Category Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
            {project.category || "Project"}
          </span>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack (Limited to 3) */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.techStack?.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="text-xs text-gray-300 bg-gray-800 border border-white/5 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack?.length > 3 && (
            <span className="text-xs text-gray-500 px-1 py-1">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          {/* Links (Github/Live) */}
          <div className="flex gap-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub size={18} />
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaExternalLinkAlt size={16} />
              </a>
            )}
          </div>

          {/* Detail Button */}
          <button
            onClick={onSeeMore}
            className="flex items-center gap-2 text-primary text-sm font-semibold group/btn"
          >
            Details
            <FaArrowRight className="transform transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
