import TetrisGame from "./TetrisGame";
// import BlackJackGame from "./BlackJackGame";

const HeroSection = () => {
  return (
    <div className="relative flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-[#2F1947] to-[#735D78] text-white overflow-hidden">
      
      {/* ✨ LAYER 1: Animated Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.04),_transparent_70%)]" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[conic-gradient(from_0deg,_rgba(255,255,255,0.04)_0deg,_transparent_360deg)] animate-spin-slow" />

      {/* ✨ LAYER 2: Glowing Orb Pulse */}
      <div className="absolute top-1/3 left-1/2 w-[1000px] h-[1000px] bg-[#BC9D5D] rounded-full opacity-10 blur-3xl animate-pulse-slow -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* ✨ LAYER 3: Subtle Glass UI Frame */}
      <div className="absolute inset-12 border border-white/10 backdrop-blur-md bg-white/5 rounded-xl z-0 pointer-events-none" />

      {/* CONTENT */}
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
            <TetrisGame/>
            {/* <BlackJackGame /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;