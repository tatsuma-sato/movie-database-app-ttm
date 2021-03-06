import React from "react";
import { useGlobalContext } from "../../context/context";
import { FaSearch } from "react-icons/fa";
import { Wrapper } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { query, setQuery, toggleSidebar, handleSearchInput } =
    useGlobalContext();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <button className="menu-icon" type="button" onClick={toggleSidebar}>
        <GiHamburgerMenu className="icon" />
      </button>

      <form
        className="search-box"
        onSubmit={(e) => {
          if (!query) return;
          e.preventDefault();
          navigate(`/search?q=${query}&p=1`);
          setQuery("");
        }}
      >
        <span className="search-icon">
          <FaSearch />
        </span>
        <input
          className="search-input"
          type="text"
          placeholder="search movies or TV shows"
          value={query}
          onChange={handleSearchInput}
        />
        <button
          className="btn submit-btn"
          type="submit"
          disabled={query === ""}
        >
          Search
        </button>
      </form>
      <div className="user">
        <div className="user-info">
          <p>Hello</p>
          <h3>User</h3>
        </div>
        <div className="user-icon">
          <Link to="/">
            <img
              className="user-icon-image"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
