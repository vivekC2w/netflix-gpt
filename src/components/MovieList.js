import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 my-2">
      <h1 className="text-lg md:text-3xl py-2 px-4 text-white">{title}</h1>

      <div className="flex overflow-x-auto p-4 horizontalScrollbar">
        {movies?.map((movie) => (
          <MovieCard key={movie?.id} posterPath={movie?.poster_path} movieId={movie?.id}/>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
