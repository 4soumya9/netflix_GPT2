import  { useEffect } from "react";

import { useDispatch } from "react-redux";
// import { addMovieCast } from "../redux/movieSlice";
import { addMovieCast } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieCredit = (movieId) => {
    const dispatch = useDispatch();
  useEffect(() => {
    getMovieCredit();
  }, []);

  const getMovieCredit = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/credits?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMovieCast(json.cast));
  };
};

export default useMovieCredit;