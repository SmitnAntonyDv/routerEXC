import React from "react";
import { NavLink } from "react-router-dom";
//import MoviePage from ""

function Movies(props) {
  console.log("what are my props?", props);

  //tt0076759 -> hardcoded data

  console.log("what are my props.id?", props.id);

  return (
    <div>
      <NavLink to={`/movie/${props.id}`}>
        <p>
          {props.title}
          {props.year}
        </p>
        <img src={props.poster} alt=""></img>
      </NavLink>
    </div>
  );
}

export default Movies;
