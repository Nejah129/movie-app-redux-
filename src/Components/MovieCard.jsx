import React from "react";
import StarRating from "./StarRating";
import { useDispatch } from "react-redux";
import { handleDelete } from "../redux/action";
import Edit from "./Edit";

const MovieCard = ({ movie }) => {
const dispatch=useDispatch()

  return (
    <div className="movie-card">
      <h3>{movie.name}</h3>
      <img src={movie.image} alt={movie.name} />
      <StarRating rating={movie.rating} /> <p>{movie.date}</p>
      <div>
        <button className="btn" onClick={()=>dispatch(handleDelete(movie.id))}  >Delete</button>
        <Edit movie={movie} />
      </div>
    </div>
  );
};

export default MovieCard;
