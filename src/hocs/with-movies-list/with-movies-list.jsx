import React from "react";
import PropTypes from "prop-types";

import {movieType} from "../../types";

const withMoviesList = (Component) => {
  class WithMoviesList extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeMovieId: -1,
      };

      this.handleMovieActivation = this.handleMovieActivation.bind(this);
      this.handleMovieDeactivation = this.handleMovieDeactivation.bind(this);
    }

    handleMovieActivation(id) {
      this.setState({activeMovieId: id});
    }

    handleMovieDeactivation() {
      this.setState({activeMovieId: -1});
    }

    render() {
      const {movies, shownMovies} = this.props;

      return (
        <Component
          movies={movies}
          shownMovies={shownMovies}
          onMovieEnter={this.handleMovieActivation}
          onMovieLeave={this.handleMovieDeactivation}
          activeMovieId={this.state.activeMovieId}
        />
      );
    }
  }

  WithMoviesList.propTypes = {
    movies: PropTypes.arrayOf(movieType),
    shownMovies: PropTypes.number.isRequired,
  };

  return WithMoviesList;
};

export default withMoviesList;
