import React, { createContext, useContext, useState } from "react";
import { movieData } from "../constant/movies";
import useFetch from "../utils/useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const [singleMovie, setSingleMovie] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
