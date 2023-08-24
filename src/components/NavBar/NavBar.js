import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Favorite from '../Favorite/Favorite';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <span className="fa fa-bars"></span>
        <span className={styles.navtxt}>
          <a href="/">Home</a>
          <a href="/favorite">Favorite</a>
          <a href="/about">About</a>
          <a href="/not_found">Not Found</a>
        </span>
    </nav>
  );
}
export default NavBar;