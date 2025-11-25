import SectionTitle from "../ui/SectionTitle";

const Education = () => {
  return (
    <section id="education" className="py-20 relative px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Education Background</SectionTitle>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2 hidden md:block"></div>

          {/* Education Item */}
          <div className="relative mb-12 md:mb-0">
            {/* Year Badge */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-[#1a1a3a] px-4 py-2 rounded-full font-bold text-sm z-10 whitespace-nowrap hidden md:block">
              2021-Present
            </div>

            {/* Education Card */}
            <div className="md:ml-[calc(50%+2.5rem)] card-base">
              <div className="md:hidden bg-primary text-[#1a1a3a] px-4 py-2 rounded-full font-bold text-sm inline-block mb-4">
                2021-Present
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Bachelor of Applied Engineering, Internet Engineering Technology
              </h3>

              <p className="text-primary font-medium mb-4">
                Gadjah Mada University, Yogyakarta
              </p>

              <div className="text-gray-300 space-y-2">
                <p>
                  Current GPA:{" "}
                  <strong className="text-white">3.63 / 4.00</strong>
                </p>

                <ul className="list-disc list-inside space-y-1 mt-3">
                  <li>UGM Delegate, Programming Division at GEMASTIK 2023</li>
                  <li>Finalist, LIGA KOMATIK UGM 2023 (Programming)</li>
                  <li>Best Committee, National Networking Competition 2.0</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
