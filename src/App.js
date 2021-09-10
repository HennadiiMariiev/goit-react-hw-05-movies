import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MoviePage from './components/MoviesPage/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviePage} />
        <Route path="/movies/:movieId" exact component={MovieDetailsPage} />
        <Route path="/movies/:movieId/cast" exact component={Cast} />
        <Route path="/movies/:movieId/reviews" exact component={Reviews} />
      </Switch>
    </div>
  );
}

export default App;
