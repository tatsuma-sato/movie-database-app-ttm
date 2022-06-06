import styled from "styled-components/macro";

export const Wrapper = styled.section`
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    @media (min-width: 1024px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .movie-item {
    position: relative;
  }

  .image-container {
    max-width: 200px;
    > img {
      width: 100%;
      height: 100%;
    }
    @media (min-width: 1024px) {
      max-width: 400px;
    }
  }

  .vote-container {
    position: absolute;
    background-color: var(--light-blue);
    border-radius: 50%;
    top: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
  }

  .vote {
    position: absolute;
    top: 8px;
    right: 7px;
    font-size: 14px;
    color: var(--dark-gray);
  }

  .movie-info {
    font-size: 12px;
  }
  .movie-title {
    font-size: 18px;
  }
`;
