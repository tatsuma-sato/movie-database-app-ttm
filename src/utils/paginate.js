const paginate = (movies) => {
  const itemsPerPage = 20;
  const pages = Math.ceil(movies.length / itemsPerPage);

  const newMovies = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return movies.slice(start, start + itemsPerPage);
  });

  return newMovies;
};

export default paginate;