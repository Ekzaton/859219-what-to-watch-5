import React from "react";

const withReviewForm = (Component) => {
  class ReviewForm extends React.PureComponent {
    constructor() {
      super();

      this.state = {
        ratingValue: 1,
        textValue: ``,
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
    }

    _handleRatingChange(evt) {
      this.setState({ratingValue: Number(evt.target.value)});
    }

    _handleTextChange(evt) {
      this.setState({textValue: evt.target.value});
    }

    render() {
      return (
        <Component
          {...this.props}
          ratingValue={this.state.ratingValue}
          textValue={this.state.textValue}
          onRatingChange={this._handleRatingChange}
          onTextChange={this._handleTextChange}
        />
      );
    }
  }

  return ReviewForm;
};

export default withReviewForm;
