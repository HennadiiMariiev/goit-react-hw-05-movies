import { Switch, Route, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react/cjs/react.development';
import { HomePage } from './components/HomePage/HomePage';
import { MoviePage } from './components/MoviesPage/MoviesPage';
import { MovieDetailsPage } from './components/MovieDetailsPage/MovieDetailsPage';
import { NavBar } from './components/NavBar/NavBar';
import { NotFound } from './components/NotFound/NotFound';
import { Cast } from './components/Cast/Cast';
import { Reviews } from './components/Reviews/Reviews';
import './App.css';

function App() {
  // const HomePage = lazy(() => import('./components/HomePage/HomePage'));
  // const MoviePage = lazy(() => import('./components/MoviesPage/MoviesPage'));
  // const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage'));
  // const NavBar = lazy(() => import('./components/NavBar/NavBar'));
  // const NotFound = lazy(() => import('./components/NotFound/NotFound'));

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="App">
        <NavBar />
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
      </div>
    </Suspense>
  );
}

export default App;
