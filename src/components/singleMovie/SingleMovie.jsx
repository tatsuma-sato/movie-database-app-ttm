import React from "react";
import { useGlobalContext } from "../../context/context";
import { BACKDROP_PATH, IMAGE_END_PATH } from "../../utils/constant";
import Genres from "../genres/Genres";
import Vote from "../stars/Stars";
import Videos from "../videos/Videos";
import { Wrapper } from "./styles";

const SingleMovie = ({ singleMovie }) => {
  // console.log(singleMovie);

  const { id, date, genres, desc, image, title, vote, backdrop, count } =
    singleMovie;

  const newVote = (vote / 2).toFixed(1);

  return (
    <Wrapper>
      <div className="container page">
        <div className="head-image">
          <img src={BACKDROP_PATH + backdrop} className="img" alt="" />
          <div className="movie">
            <div className="movie-image">
              <img className="img" src={IMAGE_END_PATH + image} alt="" />
            </div>
            <div className="movie-info">
              {/* <h1>{id}</h1> */}
              <div className="title">
                <h1>
                  {title} <span className="date">({date.slice(0, 4)})</span>
                </h1>
              </div>
              <Vote vote={newVote} count={count} />
              <Genres genres={genres} />
              <h1 className="desc">{desc}</h1>
              <button className="fav-btn btn">Add to favorite</button>
              <Videos />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleMovie;
