import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../utils/api';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

import styles from './HomePage.module.scss';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrendingMovies().then((movies) => setTrendingMovies(movies));
  }, []);

  const trendingMoviesItems = trendingMovies.map((movie, index) => (
    <li key={index}>
      <NavLink to={{ pathname: `/movies/${movie.id}`, state: location }}>
        <h3>{movie.title}</h3>
        <h4>{movie.release_date}</h4>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
      </NavLink>
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
