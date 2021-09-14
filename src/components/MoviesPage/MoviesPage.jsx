import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link, useRouteMatch } from 'react-router-dom';
import * as api from '../utils/api';
import styles from './MoviesPage.module.scss';

export default function MoviePage() {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [query, setQuery] = useState('');
  const { url } = useRouteMatch();

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const queryFromLocation = location.search.replace('?query=', '');

    if (queryFromLocation !== '') setQuery(queryFromLocation);

    if (!query) return;

    history.push({
      ...location,
      search: `?query=${query}`,
    });

    api.fetchMovieByKeyword(query).then((movies) => setSearchedMovies(movies));
  }, [query]);

  const searchMovie = (event) => {
    event.preventDefault();

    setQuery(searchQuery);
  };

  const makeMoviesMarkUp = (movies) =>
    movies.map((movie, index) => (
      <li key={index}>
        <Link to={{ pathname: `${url}/${movie.id}`, state: location }}>
          <h3>{movie.title}</h3>
          <h4>{movie.release_date}</h4>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
            width="300"
            height="250"
          />
        </Link>
        <p>{movie.overview}</p>
      </li>
    ));

  return (
    <div className={styles.box}>
      <h2>Search movies</h2>
      <form onSubmit={searchMovie}>
        <input
          type="text"
          placeholder="Search film..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button type="submit" disabled={searchQuery.trim() === ''}>
          Search
        </button>
      </form>
      <ul>{searchedMovies && makeMoviesMarkUp(searchedMovies)}</ul>
      {searchedMovies && query && <h3>No movies on your query</h3>}
    </div>
  );
}
