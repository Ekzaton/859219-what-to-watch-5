import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {sendReview} from "../../store/api-actions";
import {setDataSending} from "../../store/actions";

import {getArray} from "../../utils";

const RATING_STARS_COUNT = 5;

const ReviewForm = (props) => {
  const {
    id,
    ratingValue,
    textValue,
    isValid,
    onSubmit,
    onRatingChange,
    onTextChange,
    isDataSending,
    isSendingError
  } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(id, {rating: ratingValue, comment: textValue});
  };

  return (
    <form className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {getArray(RATING_STARS_COUNT).map((it, i) => (
            <React.Fragment key={i}>
              <input
                className="rating__input"
                id={`star-${i + 1}`}
                type="radio"
                name="rating"
                value={i + 1}
                onChange={onRatingChange}
                checked={ratingValue === i + 1}
                disabled={isDataSending}
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
          value={textValue}
          onChange={onTextChange}
          required
          disabled={isDataSending}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={!isValid || isDataSending}
          >
            Post
          </button>
        </div>

      </div>

      {
        (!isValid && <p>50-400 characters</p>)
          ||
        (isDataSending && <p>Sending data. Please wait...</p>)
          ||
        (isSendingError && <p>Sending error! Please try again later...</p>)
      }

    </form>
  );
};

ReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
  ratingValue: PropTypes.number.isRequired,
  textValue: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  isDataSending: PropTypes.bool.isRequired,
  isSendingError: PropTypes.bool.isRequired,
};

const mapStateToProps = ({APP_DATA}) => ({
  isDataSending: APP_DATA.isDataSending,
  isSendingError: APP_DATA.isSendingError,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, {rating, comment}) {
    dispatch(setDataSending(true));
    dispatch(sendReview(id, {rating, comment}));
  }
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
