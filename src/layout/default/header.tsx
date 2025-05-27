import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import LogoIcon from "../../assets/images/2025LogoLarge.png";

const DefaultHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for shadow and background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <div 
        className={`hidden lg:flex w-full px-6 bg-[#FFFFFF] py-2 items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)] ${
          scrolled ? 'shadow-10xl bg-opacity-100' : 'bg-opacity-100'
        }`}
      >
        <div className="flex items-center space-x-6">
          <img
            src={LogoIcon}
            alt="Logo Icon"
            className="h-16 w-auto object-contain"
          />
          <div className="font-['Judson'] font-bold text-5xl text-[#2F1947]">
            ATC@UW
          </div>
        </div>
        <div className="flex items-center space-x-12">
          <Link 
            to="/" 
            className="text-[#2F1947] hover:text-blue-400 transition-colors font-medium text-lg"
          >
            HOME
          </Link>
          <Link
            to="/people" 
            className="text-[#2F1947] hover:text-blue-400 transition-colors font-medium text-lg"
          >
            DIRECTORY
          </Link>
          {/* <Link 
            to="/" 
            className="text-[#2F1947] hover:text-gray-300 transition-colors font-medium text-lg cursor-not-allowed"
          >
            RESEARCH
          </Link>
          <Link 
            to="/" 
            className="text-[#2F1947] hover:text-gray-300 transition-colors font-medium text-lg cursor-not-allowed"
          >
            PORTFOLIO
          </Link> */}
          <Link 
            to="https://huskyholdem.atcuw.org/" 
            className="text-[#2F1947] hover:text-blue-400 transition-colors font-medium text-lg"
          >
            HUSKY HOLD EM'
          </Link>
        </div>
        
        <a 
          href="https://forms.gle/Vo1zRUPN4f5x3xc5A" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border-2 border-[#BC9D5D] hover:border-blue-400 hover:text-blue-400 text-[#BC9D5D] transition-colors py-2 px-6 font-['Orbitron'] font-medium"
        >
          APPLY
        </a>
      </div>

    {/* Mobile Header */}
    <div
      className={`w-full bg-[#FFFFFF] lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm bg-opacity-95" : "bg-opacity-100"
      }`}
    >
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo + Title Row */}
          <div className="flex items-center space-x-4">
            <img
              src={LogoIcon}
              alt="Logo Icon"
              className="h-12 w-auto object-contain"
            />
            <span className="font-['Judson'] font-bold text-3xl text-[#2F1947]">
              ATC@UW
            </span>
          </div>

          {/* Burger Menu */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-[#2F1947] hover:text-blue-400 focus:outline-none"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="px-4 py-3 space-y-4 bg-[#F5F4F9] shadow-sm">
          <Link
            to="/"
            className="block py-2 text-[#2F1947] hover:text-blue-400 transition-colors font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/people"
            className="block py-2 text-[#2F1947] hover:text-blue-400 transition-colors font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            DIRECTORY
          </Link>
          {/* <span className="block py-2 text-gray-400 cursor-not-allowed">
            RESEARCH
          </span>
          <span className="block py-2 text-gray-400 cursor-not-allowed">
            PORTFOLIO
          </span> */}
          <Link
            to="https://huskyholdem.atcuw.org/"
            className="block py-2 text-[#2F1947] hover:text-blue-400 transition-colors font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            HUSKY HOLD EM'
          </Link>
          <div className="pt-4 border-t border-gray-300">
            <a
              href="https://forms.gle/8q9HuCxqLMCAFeo26"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border-2 border-[#BC9D5D] hover:border-blue-400 hover:text-blue-400 text-[#BC9D5D] font-['Orbitron'] font-medium py-2 rounded-sm transition-colors"
            >
              APPLY
            </a>
          </div>
        </div>
      )}
    </div>
      
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default DefaultHeader;