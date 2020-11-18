import React from "react";

import {Tab} from "../../const";

const withTabs = (Component) => {
  class Tabs extends React.PureComponent {
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

  return Tabs;
};

export default withTabs;
