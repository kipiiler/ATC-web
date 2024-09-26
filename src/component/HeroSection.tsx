import TetrisGame from "./TetrisGame";

const HeroSection = () => {
  return (
    <div className="flex justify-center mb-20">
      <div className="grid grid-cols-5 w-full mt-0 md:mt-16 container">
        <div className="col-span-5 lg:col-span-3 pt-32 md:pt-60 pl-10 md:pl-20">
          <div className="font-['Orbitron'] text-3xl md:text-5xl">
            Decode markets
          </div>
          <div className="font-['Orbitron'] text-3xl md:text-5xl">
            UNLEASH ALGORITHMS
          </div>
          <div className="w-full px-8 md:px-0 md:w-3/5 mt-8 text-lg font-normal">
            Explore the dynamic intersection of finance and technology with UW’s
            Algorithmic Trading Club.
          </div>
        </div>
        <div
          className="hidden lg:block col-auto lg:col-span-2"
          style={{ height: 600, width: "100%" }}
        >
          <TetrisGame />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
