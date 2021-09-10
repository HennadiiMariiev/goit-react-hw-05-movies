import { useEffect, useState } from 'react';
import { fetchMovieByKeyword } from '../utils/api';

export default function MoviePage() {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) return;

    fetchMovieByKeyword(query).then((movies) => setSearchedMovies(makeMoviesMarkUp(movies)));
  }, [query]);

  const searchMovie = (event) => {
    event.preventDefault();

    setQuery(searchQuery);
  };

  const makeMoviesMarkUp = (movies) =>
    movies.map((movie, index) => (
      <li key={index}>
        <h3>{movie.title}</h3>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
          width="300"
          height="250"
        />
        <p>{movie.overview}</p>
        <h4>{movie.release_date}</h4>
      </li>
    ));

  return (
    <div>
      <h2>MoviePage</h2>
      <form onSubmit={searchMovie}>
        <input
          type="text"
          placeholder="Search film..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
      <ul>{searchedMovies && searchedMovies}</ul>
    </div>
  );
}
