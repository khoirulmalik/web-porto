import { FaExternalLinkAlt } from "react-icons/fa";

const CertificateCard = ({ cert }) => {
  const Icon = cert.icon;

  const handleClick = () => {
    if (cert.credentialUrl) {
      window.open(cert.credentialUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={`card-base text-center h-full flex flex-col group ${
        cert.credentialUrl ? "cursor-pointer" : ""
      }`}
      onClick={handleClick}
    >
      <div className="text-5xl text-primary mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
        <Icon />
      </div>

      <h3 className="text-base font-semibold text-white mb-2 leading-tight flex-grow">
        {cert.title}
      </h3>

      <p className="text-secondary font-medium text-sm mb-1">{cert.issuer}</p>

      {cert.date && <p className="text-gray-400 text-xs mb-2">{cert.date}</p>}

      {cert.credentialId && (
        <p className="text-gray-500 text-xs font-mono mb-3">
          ID: {cert.credentialId}
        </p>
      )}

      {cert.credentialUrl && (
        <div className="mt-auto pt-3 border-t border-white/10">
          <button className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:text-secondary transition-colors">
            <span>View Credential</span>
            <FaExternalLinkAlt className="text-xs" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CertificateCard;
