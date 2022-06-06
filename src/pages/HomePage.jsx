import React, { useEffect } from "react";
import { MovieList } from "../components";
import { useGlobalContext } from "../context/context";
import { END_POINT } from "../utils/constant";

const HomePage = () => {
  const { movies, setMovies, isLoading, setIsLoading } = useGlobalContext();

  useEffect(() => {
    const getLatestMovie = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            process.env.REACT_APP_MOVIE_API_KEY
          }&language=en-US&sort_by=release_date.dec&include_adult=false&include_video=false&page=1&primary_release_date.lte=${new Date()
            .toISOString()
            .slice(0, 10)}&with_watch_monetization_types=flatrate`
        );

        const { results } = await response.json();
        const movieData = [];
        await results.forEach((item) => {
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
      } catch (error) {
        console.log(error);
      }
    };
    getLatestMovie();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Movie database app</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
