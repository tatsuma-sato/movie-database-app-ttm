import React, { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { movieData } from "../constant/movies";
import useFetch from "../utils/useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const [singleMovie, setSingleMovie] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [page, setPage] = useState(1);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearchInput = (e) => {
    const searchValue = e.target.value;
    setQuery(searchValue);
  };

  const handlePage = (index) => {
    setPage(index);
  };

  const prevPage = () => {
    setPage((oldpage) => {
      let prevPage = oldpage - 1;
      if (prevPage < 0) {
        prevPage = 1;
      }
      return prevPage;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > movies.length - 1) {
        nextPage = 1;
      }
      return nextPage;
    });
  };

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        movies,
        setMovies,
        isLoading,
        setIsLoading,
        isSidebarOpen,
        setIsSidebarOpen,
        toggleSidebar,
        singleMovie,
        setSingleMovie,
        handleSearchInput,
        page,
        setPage,
        prevPage,
        nextPage,
        handlePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
