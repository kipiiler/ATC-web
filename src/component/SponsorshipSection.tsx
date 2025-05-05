const SponsorshipSection: React.FC = () => {
    return (
        <div className="bg-[#242140] flex justify-center pt-20 md:pt-40 pb-10 md:pb-20">
          <div className="container px-4 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="text-xl md:text-2xl mb-2">_ABOUT</div>
                <div className="text-3xl md:text-5xl font-['Orbitron'] mb-2">
                  OUR SUPPORTERS
                </div>
                <div className="text-3xl md:text-5xl font-['Orbitron']">
                  AND PARTNERS
                </div>
              </div>
              <div>
                <div className="text-sm md:text-base">
                  <p className="mb-4 md:mb-10">
                    Our sponsors play a pivotal role in advancing the mission of the 
                    Algorithmic Trading Club by supporting initiatives that bridge 
                    academic theory and real-world financial practice.
                  </p>
                  <p>
                    Through their generous contributions, we are able to host workshops, 
                    competitions, and research opportunities that empower students to 
                    grow as future leaders in quantitative finance and technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 md:my-16">
              <div
                  className="bg-lime-300 pt-16 md:pt-32 text-gray-950 p-6 md:p-10 text-2xl md:text-3xl min-h-[200px] md:min-h-[320px] flex flex-col"
                  style={{ fontFamily: "Orbitron" }}
              >
                  <div className="mb-4">JANE STREET</div>
                  <p className="text-sm text-gray-900 font-['Orbitron']">
                  Jane Street is a global trading firm that combines cutting-edge 
                  technology with deep research to tackle complex financial markets. 
                  Their support helps our members explore quantitative strategies, 
                  sharpen problem-solving skills, and pursue careers at the 
                  intersection of math, code, and finance.
                  </p>
              </div>

              <div
                  className="bg-cyan-300 pt-16 md:pt-32 text-gray-950 p-6 md:p-10 text-2xl md:text-3xl min-h-[200px] md:min-h-[320px] flex flex-col"
                  style={{ fontFamily: "Orbitron" }}
              >
                  <div className="mb-4">MORGAN STANLEY</div>
                  <p className="text-sm text-gray-900 font-['Orbitron']">
                  Morgan Stanley is a leading global investment bank and wealth 
                  management firm, known for empowering innovation across finance 
                  and technology. Their sponsorship supports our mission to provide 
                  hands-on learning experiences, industry mentorship, and exposure 
                  to real-world financial systems.</p>
              </div>

              <div
                  className="bg-pink-300 pt-16 md:pt-32 text-gray-950 p-6 md:p-10 text-2xl md:text-3xl min-h-[200px] md:min-h-[320px] flex flex-col"
                  style={{ fontFamily: "Orbitron" }}
              >
                  <div className="mb-4">QUANTCONNECT</div>
                  <p className="text-sm text-gray-900 font-['Orbitron']">
                  QuantConnect is a powerful open-source algorithmic trading 
                  platform that enables users to research, backtest, and deploy 
                  strategies at scale. Their partnership equips our club with 
                  professional-grade tools and resources, bridging the gap between 
                  academic learning and industry-standard quant development.</p>
              </div>
            </div>
          </div>
        </div>
      );
};

export default SponsorshipSection;