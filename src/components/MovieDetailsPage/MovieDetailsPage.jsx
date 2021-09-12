import { useEffect, useState } from 'react/cjs/react.development';
import { Route, useParams } from 'react-router';
import { fetchSingleMovie } from '../utils/api';
import { NavLink, useRouteMatch } from 'react-router-dom';

import styles from '../MoviesPage/MoviesPage.module.scss';
import classes from './MovieDetailsPage.module.scss';
import { Reviews } from '../Reviews/Reviews';
import { Cast } from '../Cast/Cast';

export function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (!movieId || movieId === ':movieId') return;

    fetchSingleMovie(movieId).then((movie) => setMovieDetails(movie));
  }, [movieId]);

  const makeMovieDetailsMarkUp = (movie) => {
    return (
      <div>
        <h3>{movie.title}</h3>
        <h4>{movie.release_date}</h4>

        <div className={classes.card}>
          <div className={classes.left}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.title}
              width="300"
              height="250"
            />
          </div>
          <div className={classes.right}>
            <p>Overview: {movie.overview}</p>
            <p>Popularity: {movie.popularity}</p>
            <p>Duration: {movie.runtime} minutes</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.box}>
      <h2>Movie</h2>
      {movieDetails && makeMovieDetailsMarkUp(movieDetails)}
      <div className={classes.linkBox}>
        <NavLink to={`${url}/cast`} className={classes.link}>
          Cast
        </NavLink>
        <NavLink to={`${url}/reviews`} className={classes.link}>
          Reviews
        </NavLink>
      </div>

      <Route path={`${url}/cast`} component={Cast} />
      <Route path={`${url}/reviews`} component={Reviews} />
    </div>
  );
}
