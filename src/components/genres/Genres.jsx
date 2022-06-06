import React from "react";
import { replaceGenre } from "../../utils/functions";
import { Wrapper } from "./style";

const Genres = ({ genres }) => {
  let genreArr = [];
  genres.map((genre) => {
    genreArr = [...genreArr, genre.name];
  });

  return (
    <Wrapper>
      <div className="badge-items">
        {genreArr.map((genre, i) => {
          return (
            <div className="badge" key={i}>
              {genre}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Genres;
