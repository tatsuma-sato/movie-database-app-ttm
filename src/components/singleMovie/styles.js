import styled from "styled-components/macro";

export const Wrapper = styled.section`
  .head-image {
    position: relative;
    width: 100%;
    height: 350px;
    > img {
      object-fit: cover;
      object-position: 50% 15%;
      height: 100%;
    }
    ::before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        var(--dark-gray) 1%,
        transparent 20%
      );
    }
    ::after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to left,
        var(--dark-gray) 1%,
        transparent 20%
      );
    }
  }

  .movie {
    display: flex;
    justify-content: center;
    gap: 3rem;
    position: absolute;
    top: 300px;
    /* opacity: 0.5; */
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1300px;
    min-width: 650px;
    background-color: var(--dark-gray);
    /* background-color: gray; */
    padding: 75px 50px;
    border-radius: 10px;
    z-index: 50;
  }

  .movie-image {
    flex-basis: 45%;
    max-width: 400px;
  }
  .movie-info {
    flex-basis: 45%;
  }

  .title {
    display: flex;
    color: #fff;
    font-size: 2rem;
    .date {
      font-size: 1rem;
    }
  }
  .desc {
    margin-top: 2rem;
  }
  .fav-btn {
    background: red;
    color: white;
    width: 200px;
  }
`;
