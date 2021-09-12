import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';
import { Suspense } from 'react/cjs/react.development';
import { lazy } from 'react';

function App() {
  const HomePage = lazy(() => import('./components/HomePage/HomePage'));
  const MoviePage = lazy(() => import('./components/MoviesPage/MoviesPage'));
  const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage'));
  const NavBar = lazy(() => import('./components/NavBar/NavBar'));
  const NotFound = lazy(() => import('./components/NotFound/NotFound'));

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={MoviePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
          <Redirect to="/" />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
