import React, { useState } from "react";
import { FaPlus, FaPlay, FaCheck } from "react-icons/fa6";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, movieId }) => {
  const [isFav, setIsFav] = useState();

  const handleWatchlist = () => {
    setIsFav(!isFav);
  };

  if (!posterPath) return null;

  return (
    <div className="relative md:hover:scale-110 group w-36 md:h-64 h-48 shrink-0 md:w-48 pr-4  transition-all">
      <img
        className=" object-cover w-full h-full rounded"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
      <div className="absolute flex md:hidden gap-2 text-white bottom-0 right-0 p-2 left-0 w-full group-hover:flex items-center">
        <Link to={`/play/${movieId}`}><button className="rounded-full p-2 hover:bg-white/90 hover:text-black transition bg-black/50">
          <FaPlay className="w-6 h-6 pl-1" />
        </button></Link>
        <button
          onClick={handleWatchlist}
          className="rounded-full p-2 hover:bg-white/90 hover:text-black transition bg-black/50"
        >
          {isFav ? (
            <FaCheck className="w-6 h-6" />
          ) : (
            <FaPlus className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
