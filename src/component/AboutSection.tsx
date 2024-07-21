const AboutSection = () => {
  return (
    <div className="bg-[#242140] flex justify-center pt-40 pb-20">
      <div className="container">
        <div className="grid grid-cols-2 ml-10 mr-10">
          <div>
            <div className="text-2xl">_ABOUT</div>
            <div className="text-5xl" style={{ fontFamily: "Orbitron" }}>
              THE ALGORITHMIC
            </div>
            <div className="text-5xl" style={{ fontFamily: "Orbitron" }}>
              TRADING CLUB
            </div>
          </div>
          <div>
            <div style={{ fontSize: 16 }}>
              <p>
                Established in 2019, the Algorithmic Trading Club, previously
                known as the Financial Engineering Club, ardently steers
                students through the dynamic realm of quantitative finance and
                financial engineering.{" "}
              </p>
              <p className="mt-10">
                Our unwavering dedication is centered on equipping members with
                practical proficiency, encompassing fundamental Python
                programming to sophisticated data science methodologies.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-16 my-16">
          <div
            className="lg:min-h-80 bg-pink-300 pt-32 text-gray-950 pl-10 pb-10 text-3xl pr-10"
            style={{ fontFamily: "Orbitron  " }}
          >
            QUANTITATIVE FINANCE EXPERTISE
          </div>
          <div
            className="lg:min-h-80 bg-lime-300 pt-32 text-gray-950 pl-10 pb-10 text-3xl pr-10"
            style={{ fontFamily: "Orbitron  " }}
          >
            INDUSTRY READY
          </div>
          <div
            className="lg:min-h-80 bg-cyan-300 pt-32 text-gray-950 pl-10 pb-10 text-3xl pr-10"
            style={{ fontFamily: "Orbitron  " }}
          >
            EDUCATIONAL WORKSHOPS
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
