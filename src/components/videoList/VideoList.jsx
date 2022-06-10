import React from "react";
import { Wrapper } from "./styles";

const YOUTUBE = "https://www.youtube.com/embed/";

const VideoList = ({ videos }) => {
  return (
    <Wrapper>
      <div className="video-list">
        {videos.map((video) => {
          const { id, name, site, key, ofiicial } = video;
          return (
            <div className="video-item" key={id}>
              <iframe src={`${YOUTUBE}${key}`} frameBorder="0"></iframe>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default VideoList;
