import React from "react";

import {RatingLevel, Tab} from "./const";

import MovieDetails from "./components/movie-details/movie-details";
import MovieOverview from "./components/movie-overview/movie-overview";
import MovieReviews from "./components/movie-reviews/movie-reviews";

export const capitalize = (title) => {
  return title[0].toUpperCase() + title.slice(1);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatMovieDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = Math.floor((duration % 60));
  return hours === 0 ? `${minutes}m` : `${hours}h ${minutes}m`;
};

export const formatReviewDate = (date) => {
  return new Date(date).toLocaleString(
      `en-US`, {month: `long`, day: `numeric`, year: `numeric`}
  );
};

export const getRatingLevel = (score) => {
  if (score > 0 && score < 3) {
    return RatingLevel.BAD;
  } else if (score >= 3 && score < 5) {
    return RatingLevel.NORMAL;
  } else if (score >= 5 && score < 8) {
    return RatingLevel.GOOD;
  } else if (score >= 8 && score < 10) {
    return RatingLevel.VERY_GOOD;
  } else if (score === 10) {
    return RatingLevel.AWESOME;
  } else {
    return RatingLevel.UNRATED;
  }
};

export const renderActiveTab = (activeTab, movie) => {
  switch (activeTab) {
    case Tab.OVERVIEW:
      return <MovieOverview movie={movie}/>;
    case Tab.DETAILS:
      return <MovieDetails movie={movie}/>;
    case Tab.REVIEWS:
      return <MovieReviews movie={movie}/>;
  }

  return null;
};
