export const APIRoute = {
  FILMS: `/films/`,
  FAVORITE: `/favorite/`,
  PROMO: `/films/promo/`,
  COMMENTS: `/comments/`,
  LOGIN: `/login/`
};

export const AppRoute = {
  ROOT: `/`,
  SIGN_IN: `/login/`,
  MY_LIST: `/mylist/`,
  REVIEW: `/review/`,
  REVIEW_ID: `/films/:id/review/`,
  PLAYER: `/player/`,
  PLAYER_ID: `/player/:id/`,
  FILMS: `/films/`,
  FILMS_ID: `/films/:id/`
};

export const Tab = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

export const RatingLevel = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
  UNRATED: `Unrated`
};

export const Review = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 400,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const SignIn = {
  EMAIL: `email`,
  PASSWORD: `password`,
};

export const DEFAULT_GENRE = `All genres`;

export const DEFAULT_MOVIES_COUNT = 8;

export const REG_EXP_EMAIL = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/;

export const REG_EXP_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
