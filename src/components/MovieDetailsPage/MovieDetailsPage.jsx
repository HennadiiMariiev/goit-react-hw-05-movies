import { useEffect, useState, lazy, Suspense } from 'react';
import { Route, useParams } from 'react-router';
import { fetchSingleMovie } from '../utils/api';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router';

import styles from '../MoviesPage/MoviesPage.module.scss';
import classes from './MovieDetailsPage.module.scss';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "cast"*/));
const Reviews = lazy(() => import('../Reviews/Reviews' /* webpackChunkName: "reviews"*/));

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const [movieDetails, setMovieDetails] = useState(null);
  const history = useHistory();

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
      <div className={classes.topBox}>
        <button type="button" onClick={history.goBack}>
          Go back
        </button>
        <h2>Movie</h2>
      </div>
      {movieDetails && makeMovieDetailsMarkUp(movieDetails)}
      <div className={classes.linkBox}>
        <NavLink to={`${url}/cast`} className={classes.link}>
          Cast
        </NavLink>
        <NavLink to={`${url}/reviews`} className={classes.link}>
          Reviews
        </NavLink>
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        <Route path={`${url}/cast`} component={Cast} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Route path={`${url}/reviews`} component={Reviews} />
      </Suspense>
    </div>
  );
}
