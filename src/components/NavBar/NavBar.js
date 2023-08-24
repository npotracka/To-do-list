import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <Link to="/"><span className="fa fa-bars"></span></Link>
        <span className={styles.navtxt}>
          <a><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></a>
          <a><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></a>
          <a><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></a>
        </span>
    </nav>
  );
}
export default NavBar;