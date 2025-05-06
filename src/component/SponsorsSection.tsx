import JaneStreetImage from "../assets/images/janeStreetLogo.png";
import MorganStanleyImage from "../assets/images/morganStanleyLogo.png";
import QuantConnectImage from "../assets/images/quantConnectLogo.png";

const SponsorsSection = () => {
  return (
    <div className="bg-[#111827] flex justify-center pt-20 md:pt-40 pb-10 md:pb-20">
      <div className="container px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="text-xl md:text-2xl mb-2">_SPONSORS</div>
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
        <div className="flex justify-center items-center gap-8">
          <div className="flex justify-center items-center">
            <img
              src={JaneStreetImage}
              alt="Jane Street"
              className="h-28 object-contain invert pt-[25px]"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={MorganStanleyImage}
              alt="Morgan Stanley"
              className="h-24 object-contain invert pt-[28px]"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={QuantConnectImage}
              alt="QuantConnect"
              className="h-14 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;