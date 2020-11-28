import React from "react";

import {RatingLevel, Tab} from "./const";

import MovieDetailsTab from "./components/movie-details-tab/movie-details-tab";
import MovieOverviewTab from "./components/movie-overview-tab/movie-overview-tab";
import MovieReviewsTab from "./components/movie-reviews-tab/movie-reviews-tab";

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

export const getArray = (count) => {
  return new Array(count).fill(``);
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
      return <MovieDetailsTab movie={movie}/>;
    case Tab.DETAILS:
      return <MovieOverviewTab movie={movie}/>;
    case Tab.REVIEWS:
      return <MovieReviewsTab movie={movie}/>;
  }

  return null;
};
