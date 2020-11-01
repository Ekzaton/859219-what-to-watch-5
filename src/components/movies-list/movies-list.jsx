import React from "react";
import PropTypes from "prop-types";

import {movieType} from "../../types";

import MoviesItem from "../movies-item/movies-item";

class MoviesList extends React.PureComponent {
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
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) =>
          <MoviesItem
            key = {movie.id}
            movie={movie}
            onMovieEnter={this.handleMovieActivation}
            onMovieLeave={this.handleMovieDeactivation}
            isPlaying={this.state.activeMovieId === movie.id}
          />
        )}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieType),
};

export default MoviesList;
