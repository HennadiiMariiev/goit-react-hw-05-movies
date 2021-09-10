import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../utils/api';

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = '215f5d86f7e87809998cffae9d163253';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then((movies) => setTrendingMovies(movies));
  }, []);

  //   console.log(trendingMovies);

  const trendingMoviesItems = trendingMovies.map((movie, index) => (
    <li key={index}>
      <h3>{movie.title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} width="300" height="250" />
      <p>{movie.overview}</p>
      <h4>{movie.release_date}</h4>
    </li>
  ));

  return (
    <div>
      <h2>Homepage</h2>
      <ul>{trendingMoviesItems}</ul>
    </div>
  );
}