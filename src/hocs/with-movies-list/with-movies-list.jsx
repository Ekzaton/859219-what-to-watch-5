import React from "react";

const withMoviesList = (Component) => {
  class MoviesList extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeMovieId: -1,
      };

      this._handleMovieActivation = this._handleMovieActivation.bind(this);
      this._handleMovieDeactivation = this._handleMovieDeactivation.bind(this);
    }

    _handleMovieActivation(id) {
      this.setState({activeMovieId: id});
    }

    _handleMovieDeactivation() {
      this.setState({activeMovieId: -1});
    }

    render() {
      return (
        <Component
          {...this.props}
          onMovieEnter={this._handleMovieActivation}
          onMovieLeave={this._handleMovieDeactivation}
          activeMovieId={this.state.activeMovieId}
        />
      );
    }
  }

  return MoviesList;
};

export default withMoviesList;
