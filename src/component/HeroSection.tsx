import tetris from "../assets/images/tetris.png";
import TetrisGame from './TetrisGame';

const HeroSection = () => {
  return (
    <div className="flex justify-center mb-20">
      <div className="grid grid-cols-5 w-full mt-16 container">
        <div className="col-span-5 lg:col-span-3 pt-60 pl-20">
          <div style={{ fontFamily: "Orbitron", fontSize: 48 }}>
            Decode markets
          </div>
          <div style={{ fontFamily: "Orbitron", fontSize: 48 }}>
            UNLEASH ALGORITHMS
          </div>
          <div className="w-3/5 mt-8" style={{ fontSize: 20, fontWeight: 400 }}>
            Explore the dynamic intersection of finance and technology with UW’s
            Algorithmic Trading Club.
          </div>
        </div>
        {/* <div
          className="hidden lg:block col-auto lg:col-span-2"
          style={{ height: 600, width: "100%" }}
        >
          <div
            style={{
              background: `url("${tetris}")`,
              width: "100%",
              height: 600,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div> */}

        <div
          className="hidden lg:block col-auto lg:col-span-2"
          style={{ height: 600, width: '100%' }}
        >
          <TetrisGame />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
