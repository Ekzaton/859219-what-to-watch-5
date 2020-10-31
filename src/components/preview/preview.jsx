import React from "react";

import {movieType} from "../../types";

const Preview = (props) => {

  const {movie} = props;
  return (
    <video
      src={movie.video}
      poster={movie.cardImage}
      width="280"
      height="175"
      muted
      autoPlay
    />
  );
};

Preview.propTypes = {
  movie: movieType,
};

export default Preview;
