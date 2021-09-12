import axios from 'axios';

const page = 1;
const API_KEY = '215f5d86f7e87809998cffae9d163253';
const BASE_URL = `https://api.themoviedb.org/3`;

export async function fetchTrendingMovies() {
  return axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then((res) => res.data.results)
    .catch((err) => console.log('Error: ', err));
}

export function fetchMovieByKeyword(query) {
  return axios
    .get(`${BASE_URL}/search/movie?query=${query}&page=${page}&api_key=${API_KEY}`)
    .then((res) => res.data.results)
    .catch((err) => console.log('Error: ', err));
}

export function fetchSingleMovie(movieId) {
  return axios
    .get(`${BASE_URL}/movie/${movieId}?&page=${page}&api_key=${API_KEY}`)
    .then((res) => res.data)
    .catch((err) => console.log('Error: ', err));
}

export function fetchMovieCredits(movieId) {
  return axios
    .get(`${BASE_URL}/movie/${movieId}/credits?&page=${page}&api_key=${API_KEY}`)
    .then((res) => res.data)
    .catch((err) => console.log('Error: ', err));
}

export function fetchMovieReviews(movieId) {
  return axios
    .get(`${BASE_URL}/movie/${movieId}/reviews?&page=${page}&api_key=${API_KEY}`)
    .then((res) => res.data.results)
    .catch((err) => console.log('Error: ', err));
}

//#region TOOLTIPS
// #trending             GET `/trending/movie/day`
// #search               GET `/search/movie?query=${query}&page=${page}`
// #search-movie         GET `/movie/{movie_id}`
// #credits              GET `/movie/{movie_id}/credits`
// #reviews              GET `/movie/{movie_id}/reviews`

// fetchTrendingMovies();
// fetchMovieByKeyword('spiderman');
// fetchSingleMovie(movieId);
// fetchMovieCredits(movieId);
// fetchMovieReviews(movieId);
//#endregion
