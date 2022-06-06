import React from "react";
import { Link } from "react-router-dom";
import { movieData } from "../../constant/movies";
import { useGlobalContext } from "../../context/context";
import { Wrapper } from "./styles";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

const MovieList = ({ movies }) => {

  return (
    <Wrapper>
      <div className="container page">
        {movies.map((movie, i) => {
          return (
            <div key={i} className="movie-item">
              <Link to={`/movie/${movie.id}`}>
                <div className="vote-container">
                  <span className="vote">{movie.vote}</span>
                </div>
                <div to={`/movie/${movie.id}`} className="image-container">
                  <img
                    className="movie-img"
                    src={IMAGE_PATH + movie.poster_path}
                    alt={movie.name}
                  />
                </div>
              </Link>
              <p className="movie-info">{movie.date.slice(0, 4)}</p>
              <h3 className="movie-title">{movie.title}</h3>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default MovieList;
