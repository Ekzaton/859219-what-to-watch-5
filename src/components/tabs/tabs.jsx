import React from "react";
import PropTypes from "prop-types";

import {Tab} from "../../const";
import {movieType, reviewType} from "../../types";
import {capitalize} from "../../utils";

import MovieDetails from "../movie-details/movie-details";
import MovieOverview from "../movie-overview/movie-overview";
import MovieReviews from "../movie-reviews/movie-reviews";

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: Tab.OVERVIEW,
    };

    this.activateTab = this.activateTab.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tab) {
    this.setState({activeTab: tab});
  }

  activateTab() {
    const movie = this.props.movie;

    switch (this.state.activeTab) {
      case Tab.OVERVIEW:
        return <MovieOverview movie={movie}/>;
      case Tab.DETAILS:
        return <MovieDetails movie={movie}/>;
      case Tab.REVIEWS:
        return <MovieReviews movie={movie} reviews={this.props.reviews}/>;
    }

    return null;
  }

  render() {
    const tabs = Object.values(Tab);
    const activeClass = `movie-nav__item--active`;

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabs.map((tab) =>
              <li
                key={tab}
                className={`movie-nav__item ${this.state.activeTab === tab ? activeClass : ``}`}
              >
                <a href="#"
                  className="movie-nav__link"
                  onClick={(evt) => {
                    evt.preventDefault();

                    this.handleTabClick(tab);
                  }}
                >
                  {capitalize(tab)}
                </a>
              </li>
            )}
          </ul>
        </nav>
        {this.activateTab()}
      </div>
    );
  }
}

Tabs.propTypes = {
  movie: movieType,
  reviews: PropTypes.arrayOf(reviewType),
};

export default Tabs;
