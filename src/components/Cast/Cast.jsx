import { useEffect, useState } from 'react/cjs/react.development';
import { useRouteMatch } from 'react-router';
import { fetchMovieCredits } from '../utils/api';

export default function Cast() {
  const { url } = useRouteMatch();
  const movieId = url.replace('/movies', '').replace('/cast', '');
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (!movieId || movieId === ':movieId') return;

    fetchMovieCredits(movieId).then((movie) => setMovieDetails(movie));
  }, [movieId]);

  const makeMovieCreditsMarkUp = (movie) => {
    const castItems = movie.cast.map((el) => (
      <li>
        {el.character} - {el.name}
      </li>
    ));

    const crewItems = movie.crew.map((el) => (
      <li>
        {el.job} - {el.name}
      </li>
    ));

    return (
      <div>
        <h3>Cast</h3>
        <ul>{castItems}</ul>

        <h3>Crew</h3>
        <ul>{crewItems}</ul>
      </div>
    );
  };

  return (
    <div>
      <h2>Cast and Crew</h2>
      {movieDetails && makeMovieCreditsMarkUp(movieDetails)}
    </div>
  );
}
