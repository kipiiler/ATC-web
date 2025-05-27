const AboutSection = () => {
  return (
    <div className="relative flex justify-center pt-20 md:pt-40 pb-10 md:pb-20 overflow-hidden">
      <div className="container px-4 md:px-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="text-xl md:text-2xl mb-2 text-[#BC9D5D]">_ABOUT</div>
            <div className="text-3xl md:text-5xl font-['Orbitron'] mb-2 text-white">
              THE ALGORITHMIC
            </div>
            <div className="text-3xl md:text-5xl font-['Orbitron'] text-white border-b-4 border-[#BC9D5D] inline-block w-fit pb-1">
              TRADING CLUB
            </div>
          </div>
          <div>
            <div className="text-sm md:text-base text-gray-200">
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
          {[
            "QUANTITATIVE FINANCE EXPERTISE",
            "INDUSTRY READY",
            "EDUCATIONAL WORKSHOPS",
          ].map((text, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl min-h-[200px] md:min-h-[320px] shadow-md flex items-center justify-center text-center"
            >
              {/* Frosted radial edge background with clear center */}
              <div
                className="absolute inset-0 rounded-xl border border-white/20 backdrop-blur-[10px] bg-white/10 pointer-events-none z-0"
                style={{
                  maskImage: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 60%, black 100%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 60%, black 100%)',
                }}
              />

              {/* Centered text content */}
              <div
                className="relative z-10 px-4 md:px-6 text-2xl md:text-3xl text-white font-['Orbitron']"
                style={{
                  textShadow: "0 0 4px #BC9D5D55",
                }}
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
