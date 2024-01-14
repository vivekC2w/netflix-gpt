import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import useVideoPlayback from "../hooks/useVideoPlayback";

const VideoPlayback = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const videoPlayback = useSelector((store) => store.movies?.videoPlayback);

  const { loading } = useVideoPlayback(movieId);

  if (loading)
    return (
      <div className="h-screen w-full grid place-items-center">
        <div className="loader"></div>
      </div>
    );

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-screen overflow-hidden ">
      <button
        onClick={handleBack}
        className="fixed text-white p-3 bg-black/50 top-0 left-0 z-10 "
      >
        <IoArrowBackOutline className=" h-9 w-9" />
      </button>
      <iframe
        className="w-full h-full object-contain"
        src={
          "https://www.youtube.com/embed/" + videoPlayback?.key + "?&autoplay=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen="allowfullscreen"
      ></iframe>
    </div>
  );
};

export default VideoPlayback;
