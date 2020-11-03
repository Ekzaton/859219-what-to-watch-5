import React from "react";

import {Tab} from "../../const";
import {movieType} from "../../types";
import {capitalize} from "../../utils";

import MovieDetails from "../movie-details/movie-details";
import MovieOverview from "../movie-overview/movie-overview";
import MovieReviews from "../movie-reviews/movie-reviews";

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: Tab.OVERVIEW,
    };

    this.selectTab = this.selectTab.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tab) {
    this.setState({selectedTab: tab});
  }

  selectTab() {
    const movie = this.props.movie;

    switch (this.state.selectedTab) {
      case Tab.OVERVIEW:
        return <MovieOverview movie={movie}/>;
      case Tab.DETAILS:
        return <MovieDetails movie={movie}/>;
      case Tab.REVIEWS:
        return <MovieReviews movie={movie}/>;
    }

    return null;
  }

  render() {
    const tabs = Object.values(Tab);

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabs.map((tab) =>
              <li
                key={tab}
                className={`movie-nav__item
                  ${this.state.selectedTab === tab ? `movie-nav__item--active` : ``}`}
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
        {this.selectTab()}
      </div>
    );
  }
}

Tabs.propTypes = {
  movie: movieType,
};

export default Tabs;
