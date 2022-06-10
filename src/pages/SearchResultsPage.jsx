import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import { useGlobalContext } from "../context/context";
import { MovieList } from "../components";
import { setMovieValue } from "../utils/functions";
// import { END_POINT } from "../utils/constant";
const END_POINT = "https://api.themoviedb.org/3/search/movie?api_key=";

const SearchResultsPage = () => {
  const location = useLocation();
  const queryParams = qs.parse(location.search);
  const { movies, setMovies, isLoading, setIsLoading } = useGlobalContext();

  useEffect(() => {
    const getMoviesByQuery = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${END_POINT}${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${queryParams.q}&page=${queryParams.p}&include_adult=false`
        );
        const { results } = await response.json();
        const movieData = setMovieValue(results);
        setMovies(movieData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesByQuery();
  }, [queryParams.q, queryParams.p]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchResultsPage;
