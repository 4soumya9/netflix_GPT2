import { useSelector } from "react-redux";
import MovieList from "./MovieList";  

const SecondaryContainer = () => {
  const { nowPlayingMovies, popularMovies, upcomingMovies, topRatedMovies } = useSelector((store) => store.movies);
  // const watchHistory = useSelector((store) => store.movieHistory); // Accessing movie history from the store

  // console.log("Watch History:", watchHistory);
 
  return (
    nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          
         
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
          <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;