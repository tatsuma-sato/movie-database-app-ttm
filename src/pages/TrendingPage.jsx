import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MovieList } from "../components";
import Pagination from "../components/pagination/Pagination";
import { useGlobalContext } from "../context/context";
import useFetch from "../utils/useFetch";
import qs from "query-string";

const END_POINT = "https://api.themoviedb.org/3/movie/popular?api_key=";

const TrendingPage = () => {
  const { movies, setMovies, isLoading, setIsLoading, page, setPage } =
    useGlobalContext();
  const location = useLocation();

  // const data = useFetch(
  //   `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`
  // );
  useEffect(() => {
    setIsLoading(true);
    const fetchMovies = async () => {
      const response = await fetch(
        `${END_POINT}${process.env.REACT_APP_MOVIE_API_KEY}&page=${page}&total_pages=20`
      );
      // const { results } = await response.json();
      // console.log(results);
      const data = await response.json();
      console.log(data);
      const movieData = [];
      await data.results.forEach((item) => {
        const {
          id,
          original_title,
          overview: desc,
          popularity,
          poster_path,
          title,
          vote_average: vote,
          vote_count: count,
          release_date: date,
          genre_ids,
        } = item;
        movieData.push({
          id,
          original_title,
          overview: desc,
          popularity,
          poster_path,
          title,
          vote,
          date,
          genre_ids,
          count,
        });
      });
      setMovies(movieData);
      setIsLoading(false);
    };
    fetchMovies();
  }, [page]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <MovieList movies={movies} />
      <Pagination />
    </div>
  );
};

export default TrendingPage;
