import styled from "styled-components/macro";

export const Wrapper = styled.aside`
  @media (min-width: 1024px) {
    display: none;
  }

  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
  }

  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }

  .content {
    background-color: var(--gray);
    width: 90vw;
    height: 95vh;
    border-radius: 0.25rem;
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;

    /* color */
    color: red;

    cursor: pointer;
  }

  .logo {
    font-size: 2rem;
    text-align: center;
    color: var(--dark-gray);
    .logo-dot {
      color: var(--light-blue);
    }
  }

  .nav-links {
    display: flex;
    padding-top: 2rem;
    flex-direction: column;
  }

  .nav-link {
    display: flex;
    align-items: center;
    /* color: var(--grey-500); */
    color: var(--dark-blue);
    padding: 1rem 0;
    text-transform: capitalize;
    /* transition: var(--transition); */
  }
  .nav-link:hover {
    color: var(--light-green);
  }
  .nav-link:hover .icon {
    color: var(----light-green);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    /* transition: var(--transition); */
  }
  .active {
    color: var(--light-green);
  }
  .active .icon {
    color: var(--light-green);
  }
`;
