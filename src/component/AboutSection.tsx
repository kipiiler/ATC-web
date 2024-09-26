const AboutSection = () => {
  return (
    <div className="bg-[#242140] flex justify-center pt-20 md:pt-40 pb-10 md:pb-20">
      <div className="container px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="text-xl md:text-2xl mb-2">_ABOUT</div>
            <div className="text-3xl md:text-5xl font-['Orbitron'] mb-2">
              THE ALGORITHMIC
            </div>
            <div className="text-3xl md:text-5xl font-['Orbitron']">
              TRADING CLUB
            </div>
          </div>
          <div>
            <div className="text-sm md:text-base">
              <p className="mb-4 md:mb-10">
                Established in 2019, the Algorithmic Trading Club, previously
                known as the Financial Engineering Club, ardently steers
                students through the dynamic realm of quantitative finance and
                financial engineering.
              </p>
              <p>
                Our unwavering dedication is centered on equipping members with
                practical proficiency, encompassing fundamental Python
                programming to sophisticated data science methodologies.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 md:my-16">
          <div
            className="bg-pink-300 pt-16 md:pt-32 text-gray-950 p-6 md:p-10 text-2xl md:text-3xl min-h-[200px] md:min-h-[320px]"
            style={{ fontFamily: "Orbitron" }}
          >
            QUANTITATIVE FINANCE EXPERTISE
          </div>
          <div
            className="bg-lime-300 pt-16 md:pt-32 text-gray-950 p-6 md:p-10 text-2xl md:text-3xl min-h-[200px] md:min-h-[320px]"
            style={{ fontFamily: "Orbitron" }}
          >
            INDUSTRY READY
          </div>
          <div
            className="bg-cyan-300 pt-16 md:pt-32 text-gray-950 p-6 md:p-10 text-2xl md:text-3xl min-h-[200px] md:min-h-[320px]"
            style={{ fontFamily: "Orbitron" }}
          >
            EDUCATIONAL WORKSHOPS
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
