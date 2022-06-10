import styled from "styled-components/macro";

export const Wrapper = styled.div`
  width: 350px;
  @media (min-width: 1024px) {
    width: 540px;
  }
  .related-movie-container {
    display: flex;
    overflow: scroll;
  }
  .movie-item {
    width: 200px;
    min-width: 200px;
    margin-right: 1rem;

    .movie-image {
      width: 100%;
    }
  }
`;
