import { useDispatch, useSelector } from "react-redux";
import { addOverviewTrailer, addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId, flag) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  // fetch trailer video and updating the store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length !== 0 ? filterData[0] : json[0];
    // if there is no trailer , then other video of that movie will be selected.
    // console.log(trailer);
    if (flag) dispatch(addOverviewTrailer(trailer));
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    // !trailerVideo && getMovieVideos();
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
