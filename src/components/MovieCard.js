import React from "react";
import { IMG_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";


const MovieCard = ({ posterPath, title, rating, id }) => {
  const dispatch = useDispatch();  

  // Handle adding a movie to history when it's clicked


  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 pr-4" >
      <img src={IMG_CDN + posterPath} alt={title} />
      {title && <h3 className="text-sm text-white mt-2"> {title}</h3>}
      {rating && <p className="text-xs text-gray-400">Rating: {rating}</p>}
    </div>
  );
};

export default MovieCard;
