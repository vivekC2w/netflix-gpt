import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addVideoPlayback } from "../store/slices/movieSlice";
import { useEffect, useState } from "react";

const useVideoPlayback = (movieId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  //Fetch Trailer video & updating the store with trailer video data
  const getMovieVideos = async () => {
    try {
      setLoading(true);
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();

      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];

      dispatch(addVideoPlayback(trailer));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
  return { loading };
};

export default useVideoPlayback;
