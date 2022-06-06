import { useEffect, useState } from "react";
import { END_POINT } from "./constant";

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // if(data.Response === 'True'){

      // }
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(urlParams);
    fetchData(`${END_POINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, data, error };
};

export default useFetch;
