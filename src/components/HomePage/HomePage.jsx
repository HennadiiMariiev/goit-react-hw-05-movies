import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../utils/api';
import { Link } from 'react-router-dom';

import styles from './HomePage.module.scss';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then((movies) => setTrendingMovies(movies));
  }, []);

  const trendingMoviesItems = trendingMovies.map((movie, index) => (
    <li key={index}>
      <Link to={`/movies/${movie.id}`}>
        <h3>{movie.title}</h3>
        <h4>{movie.release_date}</h4>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
      </Link>
      <p>{movie.overview}</p>
    </li>
  ));

  return (
    <div className={styles.trendingWrapper}>
      <h2>Trending movies</h2>
      <ul>{trendingMoviesItems}</ul>
    </div>
  );
}
