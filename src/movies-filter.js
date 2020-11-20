export const getMoviesByGenre = (movies, genre) => {
  return movies.filter((movie) => movie.genre === genre);
};
