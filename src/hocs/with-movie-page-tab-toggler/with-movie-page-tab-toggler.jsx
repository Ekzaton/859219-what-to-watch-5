import React from "react";

import {Tab} from "../../const";

const withMoviePageTabToggler = (Component) => {
  class MoviePageTabToggler extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: Tab.OVERVIEW,
      };

      this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(tab) {
      this.setState({activeTab: tab});
    }

    render() {
      return (
        <Component
          {...this.props}
          activeTab={this.state.activeTab}
          handleTabClick={this.handleTabClick}
        />
      );
    }
  }

  return MoviePageTabToggler;
};

export default withMoviePageTabToggler;
