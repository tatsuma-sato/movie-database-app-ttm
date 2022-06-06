import styled from "styled-components/macro";

export const Wrapper = styled.div`
  .video-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* display: flex;
    flex-wrap: wrap;
    flex-direction: row; */
  }
  .video-item {
    width: 150px;
    margin-bottom: 1rem;
    > iframe {
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    .video-item {
      width: 250px;
    }

    .video-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

  }
  }
`;
