export const ActionType = {
  CHANGE_MOVIES_GENRE: `CHANGE_MOVIES_GENRE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  GET_MOVIES: `GET_MOVIES`,
};

export const ActionCreator = {
  changeMoviesGenre: (activeGenre) => ({
    type: ActionType.CHANGE_MOVIES_GENRE,
    payload: activeGenre,
  }),
  showMoreMovies: (shownMovies) => ({
    type: ActionType.SHOW_MORE_MOVIES,
    payload: shownMovies,
  }),
  getMovies: (movies) => ({
    type: ActionType.GET_MOVIES,
    payload: movies,
  })
};
