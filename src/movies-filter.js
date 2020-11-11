export const getGenres = (movies) => {
  return Array.from(new Set(movies.map((movie) => movie.genre)));
};

export const getMoviesByGenre = (movies, genre) => {
  return movies.filter((movie) => movie.genre === genre);
};
