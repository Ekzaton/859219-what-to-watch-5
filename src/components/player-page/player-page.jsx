import React from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";
import moment from "moment";

import {fetchMovie} from "../../store/api-actions";

import {AppRoute} from "../../const";
import {movieType} from "../../types";

const PlayerPage = (props) => {
  const {
    movie,
    progressRef,
    videoRef,
    isPlaying,
    progressBar,
    timeRemaining,
    onFullScreenButtonClick,
    onPlayButtonClick,
    onMouseDown,
    getMovie
  } = props;
  const params = useParams();

  React.useEffect(() => {
    getMovie(params.id);
  }, [params.id]);

  return (
    <div className="player">
      <video
        className="player__video"
        ref={videoRef}
        src={movie.video}
      />

      {(isPlaying) ||
        <Link to={`${AppRoute.FILMS}${movie.id}`}>
          <button type="button" className="player__exit">Exit</button>
        </Link>
      }

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              ref={progressRef}
              value={progressBar}
              max="100"
            />
            {isPlaying &&
              <div
                className="player__toggler"
                style={{left: progressBar + `%`}}
                onMouseDown={onMouseDown}
              >
                Toggler
              </div>
            }
          </div>
          <div className="player__time-value">
            {moment.utc(timeRemaining * 1000).format(`HH:mm:ss`)}
          </div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onPlayButtonClick}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              {isPlaying
                ? <use xlinkHref="#pause"></use>
                : <use xlinkHref="#play-s"></use>
              }
            </svg>
            <span>Play</span>
          </button>

          <div className="player__name">{movie.title}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreenButtonClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerPage.propTypes = {
  movie: movieType,
  progressRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired,
  videoRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  progressBar: PropTypes.number.isRequired,
  timeRemaining: PropTypes.number.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired,
};

const mapStateToProps = ({APP_DATA}) => ({
  movie: APP_DATA.activeMovie,
});

const mapDispatchToProps = (dispatch) => ({
  getMovie(id) {
    dispatch(fetchMovie(id));
  }
});

export {PlayerPage};
export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);
