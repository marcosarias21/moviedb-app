import { NavLink } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  return (
      <nav className="border-b navbar navbar-expand-lg d-flex justify-content-center py-4">
        <div className="container container-fluid d-flex justify-content-center">
          <a className="navbar-brand text-white" href="#"><span>MovieDB</span> - Arias</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-5" id="navbarText">
            <ul className="navbar-nav text-white">
              <li className="nav-item px-2">
                <NavLink className="nav-movies-link" aria-current="page" to='/' >Popular</NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-movies-link"> Top Rated </NavLink>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="/tv">Tv Shows</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
