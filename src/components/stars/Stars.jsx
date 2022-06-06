import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Wrapper } from "./styles";

const getVoteCount = (oriVote) => {
  const newVote = (oriVote / 2).toFixed(1);
};

const Stars = ({ vote, count }) => {
  console.log(vote);
  console.log(count);
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {vote >= index + 1 ? (
          <BsStarFill />
        ) : vote >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="stars">{tempStars.map((item) => item)}</div>
      <p className="count">({count})</p>
    </Wrapper>
  );
};

export default Stars;
