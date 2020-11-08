export const getGenres = (moviesList) => {
  return Array.from(new Set(moviesList.map((movie) => movie.genre)));
};

export const getMoviesByGenre = (moviesList, activeGenre) => {
  return moviesList.filter((movie) => movie.genre === activeGenre);
};
