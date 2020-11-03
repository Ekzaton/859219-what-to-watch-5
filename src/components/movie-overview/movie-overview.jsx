import React from "react";

const MovieOverview = () => {
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">8,9</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).</p>
        <p className="movie-card__director"><strong>Director: Wes Andreson</strong></p>
        <p className="movie-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
      </div>
    </React.Fragment>
  );
};

export default MovieOverview;