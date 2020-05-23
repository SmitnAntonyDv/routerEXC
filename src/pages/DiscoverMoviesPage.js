import React, { useState, useEffect } from "react";
import axios from "axios";
import { hydrate } from "react-dom";
import Movies from "../components/Movies";
import { useHistory, useParams } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [status, set_status] = useState("idle");
  const [movieData, set_movieData] = useState([]);
  const history = useHistory();
  const params = useParams();
  const url = `https://omdbapi.com/?apikey=8ead5bf8&s=`;

  const navigateToSearch = () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
  };

  const search = async () => {
    set_status("Loading");
    // console.log(status);
    try {
      console.log("TODO search movies for:", searchText);

      const queryParam = encodeURIComponent(params.query);

      const data = await axios.get(`${url}${queryParam}`);

      //API key = 8ead5bf8

      // console.log("what is data?", data);
      // console.log("success!", data);
      // const dataLowerCase = movieData.map((movies)=> {
      //   movies.dataLowerCase(data.data.Search)
      // })
      // console.log("what is this?", data.data);
      set_movieData(data.data.Search);

      set_status("complete");
    } catch (error) {
      console.log("error message", error);
    }
  };
  // const dataLowerCase = movieData.map((movies)=> {
  //   movies.dataLowerCase()
  // })

  // console.log("movie data?", movieData);
  // console.log("typeof", typeof movieData); // this stores the const movieData inside the new state movieData

  useEffect(() => {
    if (params.query) search();
  }, [params.query]);

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>status: {status}</p>
      <ul>
        {movieData.map((movies, i) => {
          const {
            Title: title,
            Year: year,
            Poster: poster,
            imdbID: imdbid,
          } = movies; //

          return (
            <li key={i} className="movies">
              <Movies title={title} year={year} poster={poster} id={imdbid} />
            </li>
          );
        })}
      </ul>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={navigateToSearch}>Search</button>
      </p>
    </div>
  );
}
