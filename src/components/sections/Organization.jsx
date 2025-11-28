import SectionTitle from "../ui/SectionTitle";
import { organizationData } from "../data/organizationData";
import { FaQuoteRight } from "react-icons/fa";

const Organization = () => {
  return (
    <section
      id="organization"
      className="py-24 relative px-4 bg-dark-900 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <SectionTitle>Leadership & Organization</SectionTitle>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Building teams, managing projects, and driving impact through
            strategic leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {organizationData.map((org, index) => {
            const Icon = org.icon;
            return (
              <div
                key={org.id}
                className="group relative bg-gray-900 border border-white/5 rounded-2xl p-6 hover:bg-gray-800/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative Quote Icon (Watermark) */}
                <div className="absolute top-4 right-4 text-white/5 text-4xl group-hover:text-white/10 transition-colors">
                  <FaQuoteRight />
                </div>

                <div className="flex items-start gap-5">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-300">
                      <Icon className="text-2xl text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Role Badge */}
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20 mb-3 uppercase tracking-wider">
                      {org.role}
                    </span>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-light transition-colors">
                      {org.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mt-3 border-t border-white/5 pt-3">
                      {org.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Organization;
