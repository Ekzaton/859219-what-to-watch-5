import React from "react";

import {validateText} from "../../utils";

const withReviewForm = (Component) => {
  class ReviewForm extends React.PureComponent {
    constructor() {
      super();

      this.state = {
        ratingValue: 1,
        textValue: ``,
        isValid: false,
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
    }

    _handleRatingChange(evt) {
      this.setState({
        ratingValue: Number(evt.target.value)
      });
    }

    _handleTextChange(evt) {
      this.setState({
        textValue: evt.target.value,
        isValid: validateText(this.state.textValue),
      });
    }

    render() {
      const {ratingValue, textValue, isValid} = this.state;

      return (
        <Component
          {...this.props}
          ratingValue={ratingValue}
          textValue={textValue}
          isValid={isValid}
          onRatingChange={this._handleRatingChange}
          onTextChange={this._handleTextChange}
        />
      );
    }
  }

  return ReviewForm;
};

export default withReviewForm;
