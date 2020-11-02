import React from "react";
import PropTypes from "prop-types";

import {movieType} from "../../types";

const PLAYING_TIMEOUT = 150;

class Preview extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    setTimeout(() => {
      if (this.props.isPlaying) {
        video.play();
      }
    }, PLAYING_TIMEOUT);

    if (!this.props.isPlaying) {
      video.load();
    }
  }

  render() {
    const movie = this.props.movie;

    return (
      <video
        ref={this._videoRef}
        src={movie.video}
        poster={movie.cardImage}
        width="280"
        height="175"
        muted
      />
    );
  }
}

Preview.propTypes = {
  movie: movieType,
  isPlaying: PropTypes.bool.isRequired,
};

export default Preview;
