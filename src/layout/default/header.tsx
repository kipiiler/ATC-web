import { Link } from "react-router-dom";
import "./header.css";

const DefaultHeader = () => {
  return (
    <div className="w-auto bg-[#3E329F] grid grid-cols-10 gap-4">
      <div
        style={{
          fontFamily: "Orbitron",
          fontWeight: "bold",
          fontSize: "32px",
          color: "#FFFFFF",
        }}
        className="items-center justify-center flex col-span-2 p-4 ml-4"
      >
        ATC@ UW
      </div>
      <div className="col-span-1"> </div>
      <div className="col-span-4 relative bg-[#242140] rounded-full">
        <div className="flex justify-center items-center h-full nav-link">
          <div className="flex items-center">
            <div
              style={{ fontSize: 18 }}
              className="text-white text-sm mr-16 ml-16"
            >
              <Link to="/">HOME</Link>
            </div>
            <div style={{ fontSize: 18 }} className="text-white text-sm mr-16">
              <Link to="/blogs">BLOGS</Link>
            </div>
            <div
              style={{ fontSize: 18, fontWeight: 400 }}
              className="text-white text-sm mr-16"
            >
              <Link to="/portfolio">PORTFOLIO</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1"> </div>
      <div className="col-span-2 h-full items-center flex justify-center">
        <button
          className="bg-lime-400 text-indigo-500 font-bold py-2 px-4 rounded"
          style={{ fontFamily: "Orbitron", fontWeight: 100 }}
        >
          JOIN DISCORD
        </button>
      </div>
    </div>
  );
};
export default DefaultHeader;
