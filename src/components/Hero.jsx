import React from "react";

const Hero = ({ movie }) => {
  if (!movie) return null;
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  return (
    <div className="relative h-[60vh] w-full text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
      <img
        src={`${IMAGE_PATH}${movie.backdrop_path}`}
        className="w-full h-full object-cover"
        alt={movie.title}
      />
      <div className="absolute bottom-10 left-10 z-20 max-w-xl">
        <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
        <p className="text-lg text-gray-300 line-clamp-3">{movie.overview}</p>
      </div>
    </div>
  );
};

export default Hero;
