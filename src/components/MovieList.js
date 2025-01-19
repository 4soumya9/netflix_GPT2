
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";


const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className=" ">
      <h1 className="text-lg md:text-3xl py-6 text-white ">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <Link key={movie.id} to={"/overview/"+movie.id}>
            <MovieCard
              // key={movie.id}
              posterPath={movie.poster_path}
              // id={movie.id}
              title={movie.title}
              rating= {movie.vote_average}
            />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
