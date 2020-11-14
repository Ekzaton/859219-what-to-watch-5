import React from "react";

const withReviewForm = (Component) => {
  class ReviewForm extends React.PureComponent {
    constructor() {
      super();

      this.state = {
        ratingValue: ``,
        textValue: ``,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
    }

    handleRatingChange(evt) {
      this.setState({ratingValue: evt.target.value});
    }

    handleTextChange(evt) {
      this.setState({textValue: evt.target.value});
    }

    render() {
      return (
        <Component
          onSubmit={this.handleSubmit}
          onRatingChange={this.handleRatingChange}
          onTextChange={this.handleTextChange}
        />
      );
    }
  }

  return ReviewForm;
};

export default withReviewForm;
