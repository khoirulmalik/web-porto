import SectionTitle from "../ui/SectionTitle";
import { certificatesData } from "../data/certificatesData";

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Certifications</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert) => {
            const Icon = cert.icon;
            return (
              <div key={cert.id} className="card-base text-center">
                <div className="text-5xl text-primary mb-4 flex justify-center">
                  <Icon />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                  {cert.title}
                </h3>

                <p className="text-secondary font-medium">{cert.issuer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
