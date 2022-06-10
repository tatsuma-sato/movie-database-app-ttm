import styled from "styled-components/macro";

export const Wrapper = styled.nav`
  display: flex;
  height: 100px;
  align-items: center;
  max-width: 90%;
  justify-content: space-between;

  .menu-icon {
    background: none;
    border: none;
    color: var(--texr-color);
    padding: 0;
    font-size: 2rem;
    cursor: pointer;
  }

  .search-box {
    display: flex;
    position: relative;
  }
  .search-icon {
    position: absolute;
    top: 8px;
    left: 10px;
  }
  .search-input {
    padding: 7px 20px;
    padding-left: 30px;
    border-radius: 25px;
    margin-right: 10px;
    width: 300px;
    /* border: none; */
  }
  .submit-btn {
    :disabled {
      cursor: not-allowed;
    }
  }

  .user {
    display: flex;
    align-items: center;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    h3,
    p {
      margin: 0;
    }
  }

  .user-icon {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  .user-icon-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
