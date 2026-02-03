import React, { useState } from "react";

const MovieRow = ({ title, movies }) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const API_KEY = import.meta.env.VITE_TMDB_KEY;
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

  const fetchTrailer = async (id) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`,
      );
      const data = await res.json();

      const trailer = data.results.find(
        (vid) =>
          vid.site === "YouTube" &&
          (vid.type === "Trailer" || vid.type === "Teaser"),
      );

      if (trailer) {
        setTrailerUrl(trailer.key);
      } else {
        alert("Trailer not available!");
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  return (
    <div className="my-12 px-6 md:px-12">
      {/* Section Title */}
      <div className="flex items-center mb-6">
        <div className="h-8 w-1 bg-blue-600 mr-4 rounded-full"></div>
        <h2 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">
          {title}
        </h2>
      </div>

      {/* Vertical Grid*/}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {movies?.map((movie) => (
          <div
            key={movie.id}
            onClick={() => fetchTrailer(movie.id)}
            className="group relative flex flex-col cursor-pointer"
          >
            {/* Poster Card */}
            <div className="relative overflow-hidden rounded-xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <img
                src={
                  movie.poster_path
                    ? `${IMAGE_PATH}${movie.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                className="w-full h-auto object-cover"
                alt={movie.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <button className="bg-white text-black text-xs font-bold py-2 px-4 rounded-full shadow-lg">
                  Watch Trailer
                </button>
              </div>
            </div>

            <h3 className="text-gray-200 mt-3 text-sm font-semibold truncate group-hover:text-blue-400 transition-colors">
              {movie.title}
            </h3>
            <p className="text-gray-500 text-xs mt-1">
              {movie.release_date?.split("-")[0]} • ⭐{" "}
              {movie.vote_average.toFixed(1)}
            </p>
          </div>
        ))}
      </div>

      {/* Trailer Modal */}
      {trailerUrl && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-md p-4">
          <div className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl rounded-2xl overflow-hidden border border-white/10">
            <button
              onClick={() => setTrailerUrl("")}
              className="absolute top-4 right-4 z-[1001] bg-white/10 hover:bg-red-600 text-white w-10 h-10 rounded-full font-bold transition-all flex items-center justify-center"
            >
              ✕
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailerUrl}?autoplay=1&rel=0`}
              title="YouTube trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieRow;
