import SectionTitle from "../ui/SectionTitle";
import { certificatesData } from "../data/certificatesData";

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Certifications</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificatesData.map((cert) => {
            const Icon = cert.icon;
            return (
              <div key={cert.id} className="card-base text-center group">
                <div className="text-5xl text-primary mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
                  <Icon />
                </div>

                <h3 className="text-base font-semibold text-white mb-2 leading-tight min-h-[3rem]">
                  {cert.title}
                </h3>

                <p className="text-secondary font-medium text-sm mb-1">
                  {cert.issuer}
                </p>

                {cert.date && (
                  <p className="text-gray-400 text-xs mb-2">{cert.date}</p>
                )}

                {cert.credentialId && (
                  <p className="text-gray-500 text-xs font-mono">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
