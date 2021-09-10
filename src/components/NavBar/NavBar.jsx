import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <NavLink to="/">HomePage</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/movies/:movieId">Single Movie</NavLink>
      <NavLink to="/movies/:movieId/cast">Cast</NavLink>
      <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
    </>
  );
}