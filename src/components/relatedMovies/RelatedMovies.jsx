import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { END_POINT, IMAGE_END_PATH } from "../../utils/constant";
import { Wrapper } from "./styles";

const RelatedMovies = () => {
  const { id: movieId } = useParams();
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRelated = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${END_POINT}${movieId}/recommendations?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
        );
        const { results } = await response.json();
        setRelatedMovies(results.slice(0, 10));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getRelated();
  }, [movieId]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Wrapper>
      <h1>Similar moives</h1>
      <div className="related-movie-container">
        {relatedMovies.map((movie) => {
          const { id, title, poster_path: image } = movie;
          return (
            <div key={id} className="movie-item">
              <Link to={`/movie/${id}`}>
                <img
                  src={`${IMAGE_END_PATH}${image}`}
                  className="movie-image"
                  alt={title}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default RelatedMovies;
