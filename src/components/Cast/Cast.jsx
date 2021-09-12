import { useEffect, useState } from 'react/cjs/react.development';
import { useRouteMatch } from 'react-router';
import * as api from '../utils/api';

import styles from './Cast.module.scss';

export default function Cast() {
  const { url } = useRouteMatch();
  const movieId = url.replace('/movies', '').replace('/cast', '');
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (!movieId || movieId === ':movieId') return;

    api.fetchMovieCredits(movieId).then((movie) => setMovieDetails(movie));
  }, [movieId]);

  const makeMovieCreditsMarkUp = (movie) => {
    const castItems = movie.cast.map((el) => (
      <li className={styles.castItem}>
        <b>{el.character}</b> - {el.name}
      </li>
    ));

    const crewItems = movie.crew.map((el) => (
      <li className={styles.castItem}>
        <b>{el.job}</b> - {el.name}
      </li>
    ));

    return (
      <div className={styles.flex}>
        <div>
          <h3>Cast</h3>
          <ul className={styles.castList}>{castItems}</ul>
        </div>

        <div>
          <h3>Crew</h3>
          <ul className={styles.castList}>{crewItems}</ul>
        </div>
      </div>
    );
  };

  return <div>{movieDetails && makeMovieCreditsMarkUp(movieDetails)}</div>;
}
