import React from "react";
import PropTypes from "prop-types";

const RATING_STARS_COUNT = 5;

const ReviewForm = (props) => {
  const {ratingValue, textValue, onSubmit, onRatingChange, onTextChange} = props;
  const ratingStars = new Array(RATING_STARS_COUNT).fill(``);

  return (
    <form action="#" className="add-review__form" onSubmit={onSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {ratingStars.map((it, i) => (
            <React.Fragment key={i}>
              <input
                className="rating__input"
                id={`star-${i + 1}`}
                type="radio"
                name="rating"
                value={i + 1}
                onChange={onRatingChange}
                checked={ratingValue === i + 1}
              />
              <label className="rating__label" htmlFor={`star-${i + 1}`}>
                {`Rating ${i + 1}`}
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          maxLength="400"
          value={textValue}
          onChange={onTextChange}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  ratingValue: PropTypes.number.isRequired,
  textValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

export default ReviewForm;
