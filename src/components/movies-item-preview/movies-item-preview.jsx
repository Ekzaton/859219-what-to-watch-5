import React from "react";
import PropTypes from "prop-types";

import {movieType} from "../../types";

const MoviesItemPreview = (props) => {
  const {movie, isPlaying} = props;
  const videoRef = React.createRef();

  React.useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.load();
    }
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      src={movie.preview}
      poster={movie.cardImage}
      width="280"
      height="175"
      muted
    />
  );
};

MoviesItemPreview.propTypes = {
  movie: movieType,
  isPlaying: PropTypes.bool.isRequired,
};

export default MoviesItemPreview;
