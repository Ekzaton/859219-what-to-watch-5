import React from "react";

import {Tab} from "../../const";

const withMovieTabToggler = (Component) => {
  class MovieTabToggler extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: Tab.OVERVIEW,
      };

      this._handleTabClick = this._handleTabClick.bind(this);
    }

    _handleTabClick(tab) {
      this.setState({activeTab: tab});
    }

    render() {
      return (
        <Component
          {...this.props}
          activeTab={this.state.activeTab}
          onTabClick={this._handleTabClick}
        />
      );
    }
  }

  return MovieTabToggler;
};

export default withMovieTabToggler;
