import React, { useState, useEffect, useRef } from "react";
import Hero from "./Hero";
import MovieRow from "./MovieRow";

const Movie = () => {
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const searchRef = useRef(null);

  const API_KEY = import.meta.env.VITE_TMDB_KEY;

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const resTrending = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
        );
        const dataTrending = await resTrending.json();
        setTrending(dataTrending.results);

        const resTop = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
        );
        const dataTop = await resTop.json();
        setTopRated(dataTop.results);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchAll();
  }, [API_KEY]);

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    if (query.length > 2) {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
      );
      const data = await res.json();
      setSearchResults(data.results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="bg-[#0f172a] min-h-screen pb-20 overflow-x-hidden">
      <div
        ref={searchRef}
        className="top-24 right-6 md:right-12 z-[100] flex justify-end"
        onClick={() => setIsSearchOpen(true)}
      >
        <div
          className={`p-3 overflow-hidden h-[50px] bg-blue-600 shadow-2xl rounded-full flex items-center transition-all duration-300 ease-in-out border border-white/20 
          ${isSearchOpen || searchTerm.length > 0 ? "w-[240px] md:w-[280px]" : "w-[50px] md:hover:w-[280px]"}`}
        >
          <div className="flex items-center justify-center min-w-[30px] fill-white cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={22}
              height={22}
            >
              <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearch}
            className={`outline-none text-[16px] bg-transparent w-full text-white font-medium px-3 transition-opacity duration-300 
            ${isSearchOpen || searchTerm.length > 0 ? "opacity-100 pointer-events-auto" : "opacity-0 md:group-hover:opacity-100 pointer-events-none md:pointer-events-auto"}`}
          />
        </div>
      </div>

      {/* Main Content */}
      {searchTerm.length > 2 ? (
        <div className="pt-28">
          <MovieRow
            title={`Results for: ${searchTerm}`}
            movies={searchResults}
          />
        </div>
      ) : (
        <div className="flex flex-col">
          {trending.length > 0 && <Hero movie={trending[0]} />}
          <div className="relative z-10 -mt-10 md:-mt-20">
            <div id="trending" className="scroll-mt-28">
              <MovieRow title="Weekly Trending" movies={trending} />
            </div>
            <div id="top-rated" className="scroll-mt-28">
              <MovieRow title="Top Rated Classics" movies={topRated} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
