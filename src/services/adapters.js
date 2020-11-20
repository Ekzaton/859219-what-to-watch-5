export const movieAdapter = (movie) => {
  return Object.assign(
      {}, {
        id: movie.id,
        title: movie.name,
        posterImage: movie.poster_image,
        cardImage: movie.preview_image,
        bgImage: movie.background_image,
        bgColor: movie.background_color,
        video: movie.video_link,
        preview: movie.preview_video_link,
        text: movie.description,
        ratingScore: movie.rating,
        ratingCount: movie.scores_count,
        director: movie.director,
        starring: movie.starring,
        runTime: movie.run_time,
        genre: movie.genre,
        year: movie.released,
        isFavorite: movie.is_favorite
      }
  );
};

export const reviewAdapter = (review) => {
  return Object.assign(
      {}, {
        id: review.id,
        author: review.user.name,
        rating: review.rating,
        text: review.comment,
        date: review.date
      }
  );
};
