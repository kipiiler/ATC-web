import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const DefaultHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="hidden lg:grid w-auto bg-[#3E329F] grid-cols-10 gap-4">
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
              <div
                style={{ fontSize: 18 }}
                className="text-gray-400 text-sm mr-16"
              >
                <Link to="/" className="cursor-not-allowed">
                  BLOGS
                </Link>
              </div>
              <div
                style={{ fontSize: 18, fontWeight: 400 }}
                className="text-gray-400 text-sm mr-16"
              >
                <Link to="/" className="cursor-not-allowed">
                  PORTFOLIO
                </Link>
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
            <a href="https://forms.gle/8q9HuCxqLMCAFeo26">APPLY</a>
          </button>
        </div>
      </div>
      <div className="w-full bg-[#3E329F] block lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="font-['Orbitron'] font-bold text-2xl md:text-3xl text-white">
                  ATC@ UW
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-white hover:bg-[#242140] px-3 py-2 rounded-md text-sm font-medium"
                >
                  HOME
                </Link>
                {/* <Link
                  to="/blogs"
                  className="text-white hover:bg-[#242140] px-3 py-2 rounded-md text-sm font-medium"
                > */}
                <Link
                  to="/"
                  className="text-gray-500 block px-3 py-2 rounded-md text-base font-medium cursor-not-allowed"
                >
                  BLOGS
                </Link>
                {/* <Link
                  to="/portfolio"
                  className="text-white hover:bg-[#242140] px-3 py-2 rounded-md text-sm font-medium"
                              > */}
                <Link
                  to="/"
                  className="text-gray-500 block px-3 py-2 rounded-md text-base font-medium cursor-not-allowed"
                >
                  PORTFOLIO
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <button className="bg-lime-400 text-indigo-500 font-['Orbitron'] font-bold py-2 px-4 rounded">
                <a href="https://forms.gle/8q9HuCxqLMCAFeo26">APPLY</a>
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#242140] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-white hover:bg-[#242140] block px-3 py-2 rounded-md text-base font-medium"
              >
                HOME
              </Link>
              {/* <Link
                to="/blogs"
                className="text-white hover:bg-[#242140] block px-3 py-2 rounded-md text-base font-medium"
              > */}
              <Link
                to="/"
                className="text-gray-500 block px-3 py-2 rounded-md text-base font-medium cursor-not-allowed"
              >
                BLOGS
              </Link>
              {/* <Link
                to="/portfolio"
                className="text-white hover:bg-[#242140] block px-3 py-2 rounded-md text-base font-medium"
              > */}
              <Link
                to="/"
                className="text-gray-500 block px-3 py-2 rounded-md text-base font-medium cursor-not-allowed"
              >
                PORTFOLIO
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-[#242140]">
              <div className="px-2">
                <button className="w-full bg-lime-400 text-indigo-500 font-['Orbitron'] font-bold py-2 px-4 rounded">
                  <a href="https://forms.gle/8q9HuCxqLMCAFeo26">APPLY</a>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DefaultHeader;
