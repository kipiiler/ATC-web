import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

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
        className={`hidden lg:flex w-full px-6 bg-[#242140] py-6 items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-lg bg-opacity-95' : 'bg-opacity-100'
        }`}
      >
        <div className="font-['Orbitron'] font-bold text-3xl text-white">
          ATC @UW
        </div>
        
        <div className="flex items-center space-x-12">
          <Link 
            to="/" 
            className="text-white hover:text-blue-400 transition-colors font-medium text-lg"
          >
            HOME
          </Link>
          <Link 
            to="/" 
            className="text-gray-400 hover:text-gray-300 transition-colors font-medium text-lg cursor-not-allowed"
          >
            RESEARCH
          </Link>
          <Link 
            to="/" 
            className="text-gray-400 hover:text-gray-300 transition-colors font-medium text-lg cursor-not-allowed"
          >
            PORTFOLIO
          </Link>
        </div>
        
        <a 
          href="https://forms.gle/8q9HuCxqLMCAFeo26" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border-2 border-white hover:border-blue-400 hover:text-blue-400 text-white transition-colors py-2 px-6 font-['Orbitron'] font-medium"
        >
          APPLY
        </a>
      </div>

      {/* Mobile Header */}
      <div className={`w-full bg-[#242140] lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg bg-opacity-95' : 'bg-opacity-100'
      }`}>
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <span className="font-['Orbitron'] font-bold text-2xl md:text-3xl text-white">
                ATC @UW
              </span>
            </div>
            
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
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
          <div className="px-4 py-3 space-y-4 bg-[#1e1c36] shadow-lg">
            <Link
              to="/"
              className="block py-2 text-white hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/"
              className="block py-2 text-gray-400 cursor-not-allowed"
            >
              RESEARCH
            </Link>
            <Link
              to="/"
              className="block py-2 text-gray-400 cursor-not-allowed"
            >
              PORTFOLIO
            </Link>
            <div className="pt-4 border-t border-gray-700">
              <a
                href="https://forms.gle/8q9HuCxqLMCAFeo26"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-['Orbitron'] py-3 rounded-sm transition-colors"
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