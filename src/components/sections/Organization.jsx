import SectionTitle from "../ui/SectionTitle";
import { organizationData } from "../data/organizationData";

const Organization = () => {
  return (
    <section id="organization" className="py-20 relative px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Leadership & Organization</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizationData.map((org) => {
            const Icon = org.icon;
            return (
              <div key={org.id} className="card-base text-center">
                <div className="text-5xl text-primary mb-4 flex justify-center">
                  <Icon />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {org.title}
                </h3>

                <p className="text-secondary font-medium mb-4">{org.role}</p>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {org.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Organization;
