import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SingleMovie } from "../components";
import { useGlobalContext } from "../context/context";
import { END_POINT } from "../utils/constant";

// REACT_APP_MOVIE_API_KEY

const SingleMoviePage = () => {
  const { id: movieId } = useParams();
  const {
    singleMovie,
    setSingleMovie,
    isLoading,
    setIsLoading,
    page,
    setPage,
  } = useGlobalContext();

  useEffect(() => {
    setIsLoading(true);
    const fetchSingleMovie = async () => {
      try {
        const response = await fetch(
          `${END_POINT}${movieId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
        );
        const {
          id,
          title,
          overview: desc,
          genres,
          backdrop_path: backdrop,
          poster_path: image,
          vote_average: vote,
          release_date: date,
          vote_count: count,
        } = await response.json();

        setSingleMovie({
          id,
          title,
          desc,
          genres,
          image,
          vote,
          date,
          backdrop,
          count,
        });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleMovie();
  }, [movieId]);

  if (isLoading || !singleMovie) return <h1>Loading....</h1>;

  return (
    <div>
      <SingleMovie singleMovie={singleMovie} />
    </div>
  );
};

export default SingleMoviePage;
