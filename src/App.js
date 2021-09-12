import './App.css';
import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const HomePage = lazy(() => import('./components/HomePage/HomePage'));
  const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage'));
  const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage'));
  const Cast = lazy(() => import('./components/Cast/Cast'));
  const Reviews = lazy(() => import('./components/Reviews/Reviews'));
  const NavBar = lazy(() => import('./components/NavBar/NavBar'));
  const NotFound = lazy(() => import('./components/NotFound/NotFound'));

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Suspense fallback={<p>Loading...</p>}>
              <HomePage />
            </Suspense>
          </Route>
          <Route path="/movies/:movieId" exact>
            <Suspense fallback={<p>Loading...</p>}>
              <MovieDetailsPage />
            </Suspense>
          </Route>
          <Route path="/movies" exact>
            <Suspense fallback={<p>Loading...</p>}>
              <MoviesPage />
            </Suspense>
          </Route>
          <Route path="/movies/:movieId/cast">
            <Suspense fallback={<p>Loading...</p>}>
              <Cast />
            </Suspense>
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Suspense fallback={<p>Loading...</p>}>
              <Reviews />
            </Suspense>
          </Route>
          <Redirect to="/" />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
