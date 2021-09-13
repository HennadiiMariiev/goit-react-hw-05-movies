import { Switch, Route, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

const HomePage = lazy(() => import('./components/HomePage/HomePage' /* webpackChunkName: "home-page"*/));
const MoviePage = lazy(() => import('./components/MoviesPage/MoviesPage' /* webpackChunkName: "movie-page"*/));
const MovieDetailsPage = lazy(() =>
  import('./components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details"*/)
);
const NotFound = lazy(() => import('./components/NotFound/NotFound' /* webpackChunkName: "not-found"*/));
const Cast = lazy(() => import('./components/Cast/Cast' /* webpackChunkName: "cast"*/));
const Reviews = lazy(() => import('./components/Reviews/Reviews' /* webpackChunkName: "reviews"*/));

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviePage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
          <Redirect to="/" />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
}
