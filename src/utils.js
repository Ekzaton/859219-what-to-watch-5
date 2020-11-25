import React from "react";

import {RatingLevel, Tab} from "./const";

import MoviePageDetailsTab from "./components/movie-page-details-tab/movie-page-details-tab";
import MoviePageOverviewTab from "./components/movie-page-overview-tab/movie-page-overview-tab";
import MoviePageReviewsTab from "./components/movie-page-reviews-tab/movie-page-reviews-tab";

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
      return <MoviePageDetailsTab movie={movie}/>;
    case Tab.DETAILS:
      return <MoviePageOverviewTab movie={movie}/>;
    case Tab.REVIEWS:
      return <MoviePageReviewsTab movie={movie}/>;
  }

  return null;
};
