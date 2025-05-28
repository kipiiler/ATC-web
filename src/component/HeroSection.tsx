import TetrisGame from "./TetrisGame";
// import BlackJackGame from "./BlackJackGame";

const HeroSection = () => {
  return (
    <div className="relative flex justify-center items-center w-full min-h-screen text-white overflow-hidden">
      
      {/* White translucent radial box - hidden on mobile */}
      <div className="absolute inset-12 rounded-xl z-0 pointer-events-none overflow-hidden shadow-md hidden lg:block">
        <div
          className="w-full h-full rounded-xl border border-white/10 backdrop-blur-[6px] bg-white/5"
          style={{
            maskImage: 'radial-gradient(circle at center, transparent 40%, black 100%)',
            WebkitMaskImage: 'radial-gradient(circle at center, transparent 40%, black 100%)'
          }}
        />
      </div>

      <div className="z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full max-w-7xl px-6 py-16 lg:py-32 gap-0 lg:gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-['Orbitron'] font-bold leading-tight drop-shadow-xl tracking-tight">
            Decode Markets<br />
            <span className="text-[#BC9D5D]">Unleash Algorithms</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl leading-relaxed text-white">
            Explore the intersection of finance and technology with UW’s Algorithmic Trading Club. Challenge the markets. Build the future.
          </p>
        </div>

        <div className="relative items-center justify-center hidden lg:flex">
          <div className="relative w-full h-0 lg:h-[600px] rounded-xl overflow-visible">
            <div className="relative flex items-center justify-center">
              <div className="relative z-10 w-full h-full">
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