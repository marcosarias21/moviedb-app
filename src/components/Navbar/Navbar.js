import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import setCategory from '../../helper/setCategory';
import useScroll from '../../hooks/useScroll';
import urlContext from '../../providers/UrlContext';
import './navbar.scss';

const Navbar = () => {
  const { setMovieCategory, movieCategory } = useContext(urlContext);
  const [show, setShow] = useState(false);
  useScroll(show, setShow);
  const { section } = setCategory(movieCategory);
  const classNameFunction = ({ isActive }) => (isActive ? 'nav-movies-link-activeNav' : 'nav-movies-link');

  return (
    <div className={show ? 'header-active' : 'header'}>
      <nav className="navbar navbar-expand-lg">
        <div className="container container-fluid d-flex justify-content-center">
          <a className="navbar-brand text-white" href="#"><span>MovieDB</span> - Arias</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-5" id="navbarText">
            <ul className="navbar-nav text-white">
              <li className="nav-item px-2">
                <NavLink className={classNameFunction} aria-current="page" to='/' end onClick={() => setMovieCategory('movie/popular')} >Popular</NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className={classNameFunction} onClick={() => setMovieCategory('movie/top_rated')} to='/toprated' > Top Rated </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className={classNameFunction} onClick={() => setMovieCategory('tv/popular')} to='/tv' >Tv Shows</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
