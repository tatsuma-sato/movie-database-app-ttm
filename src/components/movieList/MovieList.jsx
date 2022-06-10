import React from "react";
import { Link } from "react-router-dom";
import { movieData } from "../../constant/movies";
import { useGlobalContext } from "../../context/context";
import { Wrapper } from "./styles";
import no_image from "../../assets/images/no-image-icon-23494.png";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

const MovieList = ({ movies }) => {
  // console.log(movies);
  return (
    <Wrapper>
      <div className="container page">
        {movies.map((movie, i) => {
          const { id, vote, poster_path, name, date, title } = movie;
          return (
            <div key={i} className="movie-item">
              <Link to={`/movie/${id}`}>
                <div className="vote-container">
                  <span className="vote">{vote}</span>
                </div>
                <div to={`/movie/${id}`} className="image-container">
                  <img
                    className="movie-img"
                    src={poster_path ? IMAGE_PATH + poster_path : no_image}
                    alt={name}
                  />
                </div>
              </Link>
              <p className="movie-info">{date?.slice(0, 4)}</p>
              <h3 className="movie-title">{title}</h3>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default MovieList;
