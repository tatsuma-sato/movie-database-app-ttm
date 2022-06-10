import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import { END_POINT } from "../../utils/constant";
import VideoList from "../videoList/VideoList";

const Videos = () => {
  const { id: movieId } = useParams();
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getVideos = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${END_POINT}${movieId}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
        );
        const { results } = await response.json();
        setVideos(results.splice(0, 4));
        setIsLoading(false);
      } catch (error) {}
    };
    getVideos();
  }, [movieId]);

  if (isLoading) return <h1 color="pink">Loading...</h1>;

  return (
    <div>
      <h1>Videos: Trailers, Featured</h1>
      <VideoList videos={videos} isLoading={isLoading} />
    </div>
  );
};

export default Videos;
