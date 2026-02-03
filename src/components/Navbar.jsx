import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-[110] backdrop-blur-md bg-slate-900/90 border-b border-white/10 px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 cursor-pointer"
        >
          MOVIE<span className="text-white">FLIX</span>
        </div>
        <ul className="hidden md:flex space-x-8 text-sm font-semibold text-gray-400">
          <li
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-white cursor-pointer transition-colors"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("trending")}
            className="hover:text-white cursor-pointer transition-colors"
          >
            Trending
          </li>
          <li
            onClick={() => scrollToSection("top-rated")}
            className="hover:text-white cursor-pointer transition-colors"
          >
            Top Rated
          </li>
        </ul>

        <div
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <button className="text-white outline-none">
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Hamburger DropDown! */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 border-b border-white/10 py-6 px-6 animate-fade-in-down">
          <ul className="flex flex-col space-y-6 text-lg font-medium text-gray-300">
            <li
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsOpen(false);
              }}
              className="hover:text-blue-400"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("trending")}
              className="hover:text-blue-400"
            >
              Trending
            </li>
            <li
              onClick={() => scrollToSection("top-rated")}
              className="hover:text-blue-400"
            >
              Top Rated
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
