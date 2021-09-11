import { useEffect, useState } from 'react/cjs/react.development';
import { useParams } from 'react-router';
import { fetchSingleMovie } from '../utils/api';
import { NavLink, useRouteMatch } from 'react-router-dom';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const [movieDetails, setMovieDetails] = useState(null);
  const [detailsMarkup, setDetailsMarkup] = useState(null);

  useEffect(() => {
    if (!movieId || movieId === ':movieId') return;

    fetchSingleMovie(movieId).then((movie) => setMovieDetails(movie));
  }, [movieId]);

  const makeMovieDetailsMarkUp = (movie) => {
    return (
      <div>
        <h3>{movie.title}</h3>
        <h4>{movie.release_date}</h4>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
          width="300"
          height="250"
        />
        <p>{movie.overview}</p>
        <p>{movie.popularity}</p>
        <p>{movie.runtime} minutes</p>
        <NavLink to={`${url}/cast`}>Cast </NavLink>
        <NavLink to={`${url}/reviews`}>Reviews </NavLink>
      </div>
    );
  };

  return (
    <div>
      <h2>Movie</h2>
      {movieDetails && makeMovieDetailsMarkUp(movieDetails)}
    </div>
  );
}
