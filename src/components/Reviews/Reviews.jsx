import { useEffect, useState } from 'react/cjs/react.development';
import { useRouteMatch } from 'react-router';
import { fetchMovieReviews } from '../utils/api';

export default function Reviews() {
  const { url } = useRouteMatch();
  const movieId = url.replace('/movies', '').replace('/reviews', '');
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    if (!movieId || movieId === ':movieId') return;

    fetchMovieReviews(movieId).then((movie) => setMovieReviews(movie));
  }, [movieId]);

  const makeMovieReviewsMarkUp = (movie) => {
    return movie.length ? (
      <ul>
        {movie.map((el, index) => {
          return (
            <li key={index}>
              {' '}
              <h4>{el.author}</h4>
              <h5>{el.created_at}</h5>
              <p>{el.content}</p>
            </li>
          );
        })}
      </ul>
    ) : (
      <h3>No reviews on this movie</h3>
    );
  };

  return (
    <div>
      <h2>Reviews</h2>
      {movieReviews && makeMovieReviewsMarkUp(movieReviews)}
    </div>
  );
}
