const createFilm = (data) => ({
  id: `${data.id}`,
  title: data.name,
  picture: data.preview_image,
  genre: data.genre,
  year: `${data.released}`,
  poster: data.poster_image,
  video: data.preview_video_link,
  ratingScore: data.rating,
  ratingCount: data.scores_count,
  overview: data.description,
  director: data.director,
  starring: data.starring
});

export default createFilm;
