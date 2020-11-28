import React from "react";

const withMoviesList = (Component) => {
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
      return (
        <Component
          {...this.props}
          onMovieEnter={this.handleMovieActivation}
          onMovieLeave={this.handleMovieDeactivation}
          activeMovieId={this.state.activeMovieId}
        />
      );
    }
  }

  return MoviesList;
};

export default withMoviesList;
