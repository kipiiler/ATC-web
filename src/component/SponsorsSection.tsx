import JaneStreetImage from "../assets/images/janeStreetLogo.png";
import MorganStanleyImage from "../assets/images/morganStanleyLogo.png";
import QuantConnectImage from "../assets/images/quantConnectLogo.png";

const SponsorsSection = () => {
  return (
    // <div className="absolute top-[-200px] left-[-200px] w-[900px] h-[900px] bg-[#BC9D5D] rounded-full opacity-10 blur-3xl animate-pulse-slow pointer-events-none z-0" />
    <div className="relative w-full text-white py-28 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
        <div className="text-center mb-14">
          <div className="text-xl md:text-2xl text-[#BC9D5D] mb-2 font-semibold tracking-wide">
            _SPONSORS_
          </div>
          <h2 className="text-4xl md:text-5xl font-['Orbitron'] mb-2">
            OUR SUPPORTERS
          </h2>
          <h2 className="text-4xl md:text-5xl font-['Orbitron'] border-b-4 border-[#BC9D5D] inline-block pb-1">
            AND PARTNERS
          </h2>
        </div>

        <p className="text-sm md:text-base text-gray-200 max-w-3xl mx-auto text-center mb-16">
          Our sponsors empower us to bridge academic theory with real-world finance.
          With their support, we host industry-focused workshops, competitions, and mentorship that shape the future of quantitative technology.
        </p>

        <div className="flex justify-center flex-wrap gap-16 items-center">
          <img
            src={JaneStreetImage}
            alt="Jane Street"
            className="h-20 object-contain filter invert hover:scale-105 transition-transform duration-300"
          />
          <img
            src={MorganStanleyImage}
            alt="Morgan Stanley"
            className="h-16 object-contain filter invert hover:scale-105 transition-transform duration-300"
          />
          <img
            src={QuantConnectImage}
            alt="QuantConnect"
            className="h-14 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;