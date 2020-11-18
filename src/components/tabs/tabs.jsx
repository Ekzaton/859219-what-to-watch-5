import React from "react";
import PropTypes from "prop-types";

import {Tab} from "../../const";
import {movieType, reviewType} from "../../types";
import {capitalize} from "../../utils";

import MovieDetails from "../movie-details/movie-details";
import MovieOverview from "../movie-overview/movie-overview";
import MovieReviews from "../movie-reviews/movie-reviews";

const renderActiveTab = (activeTab, movie, reviews) => {
  switch (activeTab) {
    case Tab.OVERVIEW:
      return <MovieOverview movie={movie}/>;
    case Tab.DETAILS:
      return <MovieDetails movie={movie}/>;
    case Tab.REVIEWS:
      return <MovieReviews movie={movie} reviews={reviews}/>;
  }

  return null;
};

const Tabs = (props) => {
  const {movie, reviews, activeTab, handleTabClick} = props;
  const tabs = Object.values(Tab);
  const activeClass = `movie-nav__item--active`;

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab) =>
            <li
              key={tab}
              className={`movie-nav__item ${activeTab === tab ? activeClass : ``}`}
            >
              <a href="#"
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();

                  handleTabClick(tab);
                }}
              >
                {capitalize(tab)}
              </a>
            </li>
          )}
        </ul>
      </nav>
      {renderActiveTab(activeTab, movie, reviews)}
    </div>
  );
};

Tabs.propTypes = {
  movie: movieType,
  reviews: PropTypes.arrayOf(reviewType),
  activeTab: PropTypes.oneOf(Object.values(Tab)).isRequired,
  handleTabClick: PropTypes.func.isRequired,
};

export default Tabs;
