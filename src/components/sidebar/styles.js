import styled from "styled-components";

export const Wrapper = styled.aside`
  display: none;
  
  .logo-dot {
    color: var(--light-blue) !important;
  }
  @media (min-width: 1024px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sideba-content {
      background: white;
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .nav-links {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: pink;
      padding: 10px 0;
      padding-left: 30px;
      text-transform: capitalize;
    }

    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
  }
`;
