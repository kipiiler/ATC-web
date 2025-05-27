import TetrisGame from "./TetrisGame";
// import BlackJackGame from "./BlackJackGame";

const HeroSection = () => {
  return (
    <div className="relative flex justify-center items-center w-full min-h-screen text-white overflow-hidden">
      
      <div className="absolute inset-12 border border-white/10 backdrop-blur-md bg-white/5 rounded-xl z-0 pointer-events-none" />

      <div className="z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full max-w-7xl px-6 py-32 gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-['Orbitron'] font-bold leading-tight drop-shadow-xl tracking-tight">
            Decode Markets<br />
            <span className="text-[#BC9D5D]">Unleash Algorithms</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl leading-relaxed text-gray-300">
            Explore the intersection of finance and technology with UW’s Algorithmic Trading Club. Challenge the markets. Build the future.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full h-[600px] rounded-xl overflow-visible">
            <div className="relative flex items-center justify-center">
              <div className="hidden lg:block relative w-full h-[600px] rounded-xl overflow-visible">
                <TetrisGame />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;