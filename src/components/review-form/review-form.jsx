import React from "react";

class ReviewForm extends React.PureComponent {
  constructor(props) {
    super(props);

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
      <form action="#" className="add-review__form" onSubmit={this.handleSubmit}>
        <div className="rating">
          <div className="rating__stars" onChange={this.handleRatingChange}>
            <input
              className="rating__input"
              id="star-1"
              type="radio"
              name="rating"
              value="1"
            />
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input
              className="rating__input"
              id="star-2"
              type="radio"
              name="rating"
              value="2"
            />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input
              className="rating__input"
              id="star-3"
              type="radio"
              name="rating"
              value="3"
            />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input
              className="rating__input"
              id="star-4"
              type="radio"
              name="rating"
              value="4"
            />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input
              className="rating__input"
              id="star-5"
              type="radio"
              name="rating"
              value="5"
            />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={this.handleTextChange}
          ></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    );
  }
}

export default ReviewForm;