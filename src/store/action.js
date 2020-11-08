export const ActionType = {
  CHANGE_MOVIES_GENRE: `CHANGE_MOVIES_GENRE`,
};

export const ActionCreator = {
  changeMoviesGenre: (activeGenre) => ({
    type: ActionType.CHANGE_MOVIES_GENRE,
    payload: activeGenre,
  })
};
