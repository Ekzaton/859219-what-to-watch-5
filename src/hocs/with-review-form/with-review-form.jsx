import React from "react";

const withReviewForm = (Component) => {
  class ReviewForm extends React.PureComponent {
    constructor() {
      super();

      this.state = {
        ratingValue: 1,
        textValue: ``,
      };

      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleRatingChange(evt) {
      this.setState({ratingValue: Number(evt.target.value)});
    }

    handleTextChange(evt) {
      this.setState({textValue: evt.target.value});
    }

    render() {
      return (
        <Component
          {...this.props}
          ratingValue={this.state.ratingValue}
          textValue={this.state.textValue}
          onRatingChange={this.handleRatingChange}
          onTextChange={this.handleTextChange}
        />
      );
    }
  }

  return ReviewForm;
};

export default withReviewForm;
