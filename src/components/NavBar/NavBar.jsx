import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link} exact activeClassName={styles.link_active}>
        HomePage
      </NavLink>
      <NavLink to="/movies" className={styles.link} activeClassName={styles.link_active}>
        Search movies
      </NavLink>
    </nav>
  );
}
