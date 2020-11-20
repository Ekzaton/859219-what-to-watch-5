import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import moment from "moment";

import {movieType} from "../../types";

const Player = (props) => {
  const {
    movies,
    currentMovieId,
    progressRef,
    videoRef,
    isPlaying,
    progressBar,
    timeRemaining,
    handleFullScreenButton,
    handlePlayButton,
    handleMouseDown
  } = props;
  const movie = movies.find((it) => it.id === currentMovieId);

  return (
    <div className="player">
      <video
        className="player__video"
        ref={videoRef}
        src={movie.video}
        poster={movie.cardImage}
      />

      {(isPlaying) ||
        <Link to={`/films/${movie.id}`}>
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
                onMouseDown={handleMouseDown}
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
            onClick={handlePlayButton}
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
            onClick={handleFullScreenButton}
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

const mapStateToProps = (state) => ({
  movies: state.movies,
});

Player.propTypes = {
  movies: PropTypes.arrayOf(movieType),
  currentMovieId: PropTypes.number.isRequired,
  progressRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired,
  videoRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  progressBar: PropTypes.number.isRequired,
  timeRemaining: PropTypes.number.isRequired,
  handleFullScreenButton: PropTypes.func.isRequired,
  handlePlayButton: PropTypes.func.isRequired,
  handleMouseDown: PropTypes.func.isRequired,
};

export {Player};
export default connect(mapStateToProps, null)(Player);
