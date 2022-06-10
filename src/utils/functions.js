export const replaceGenre = (genreId) => {
  switch (genreId) {
    case 28:
      return "action";
    case 12:
      return "adventure";
    case 16:
      return "animation";
    case 35:
      return "comedy";
    case 80:
      return "crime";
    case 99:
      return "documentary";
    case 18:
      return "drama";
    case 10751:
      return "family";
    case 14:
      return "fantasy";
    case 36:
      return "history";
    case 27:
      return "horror";
    case 10402:
      return "music";
    case 9648:
      return "mysery";
    case 10749:
      return "romance";
    case 878:
      return "science fiction";
    case 10770:
      return "TV movie";
    case 53:
      return "thriller";
    case 10752:
      return "war";
    case 10759:
      return "action & adventure";
    case 10762:
      return "kids";
    case 10763:
      return "news";
    case 10764:
      return "reality";
    case 10765:
      return "sci-fi & fantasy";
    case 10766:
      return "soap";
    case 10767:
      return "talk";
    case 10768:
      return "war & politics";
    case 37:
      return "western";
    default:
      return null;
  }
};

export const setMovieValue = (results) => {
  const movieData = [];
  results.forEach((item) => {
    const {
      id,
      original_title,
      overview: desc,
      popularity,
      poster_path,
      title,
      vote_average: vote,
      vote_count: count,
      release_date: date,
      genre_ids,
    } = item;
    movieData.push({
      id,
      original_title,
      overview: desc,
      popularity,
      poster_path,
      title,
      vote,
      date,
      genre_ids,
      count,
    });
  });
  return movieData;
};
