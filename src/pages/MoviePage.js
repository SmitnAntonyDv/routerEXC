import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Movies from "../components/Movies";

function MoviePage() {
  const [movieData, set_movieData] = useState([]);
  const route_parameters = useParams(); //tt0080684 (hardcode)

  const urlMovie = `http://www.omdbapi.com/?apikey=8ead5bf8&i=${route_parameters.imdb_id}`;

  async function getMovieData(url) {
    try {
      console.log("getting data from specific movie inside ASYNC from", url);

      const response = await Axios.get(url);
      console.log("what is the response? | inside await axios", response);
      // console.log("can I do this? reponse.data", response.data); // yes I can !

      set_movieData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // console.log("useEffect of the movies page");
    getMovieData(urlMovie);
  }, [movieData.imdbID]);

  console.log("what is movieData.imdbID?", movieData.imdbID);
  //console.log("response.data", movieData);
  if (!movieData) return "Loading Page";
  return (
    <div>
      some specific movie here
      <h2>
        Movie Title: {movieData.Title}
        {movieData.imdbID}
      </h2>
      <p>
        Year: {movieData.Year}
        <br />
        Duration: {movieData.Runtime}
      </p>
      <div>Movie Genre: {movieData.Genre}</div>
      <p>imdb Rating : {movieData.imdbRating}</p>
      <img src={movieData.Poster} alt=""></img>
    </div>
  );
}

export default MoviePage;
