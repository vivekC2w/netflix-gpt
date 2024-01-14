import React, { useState } from "react";
import { FaPlus, FaPlay, FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const [isFav, setIsFav] = useState();

  const handleWatchlist = () => {
    setIsFav(!isFav);
  }; 
  return (
    <div className="w-full aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0 flex items-center">
        <Link to={`/play/${movieId}`}>
          <button className="flex items-center bg-gray-500 hover:bg-white text-white hover:text-black font-medium py-1 md:py-4 px-2 md:px-8 text-xl rounded-lg bg-opacity-50">
            <FaPlay className="mr-2" />
            Play
          </button>
        </Link>
        <button onClick={handleWatchlist} className="items-center hidden md:flex gap-2 mx-2 bg-gray-500 hover:bg-white text-white hover:text-black font-medium py-4 px-8 text-xl bg-opacity-50 rounded-lg">
        {isFav ? (
            <FaCheck className="w-6 h-6" />
          ) : (
            <FaPlus className="w-6 h-6" />
          )}
          My List
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
