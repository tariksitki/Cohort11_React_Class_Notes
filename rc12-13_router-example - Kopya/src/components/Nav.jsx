import logo from '../img/logo.png';
import { Link, NavLink } from "react-router-dom";

// navlink in tek farki, aktif sayfayi gösterir.tiklanan linki kirmizi yapmak istedigimizde kullanabiliriz. 
// isactive; hangi sayfada isen onu farkli renk yap.
// Önemli:   isactive i sadece navlink ile kullanabiliriz. eger linkte kullanirsak sayfa hata veriyor.  

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link active"
                aria-current="page"
                style={({ isActive }) => ({ color: isActive && "red" })}
              >
                Home
              </NavLink>
            </li>

            <NavLink
              to="/instructors"
              className="nav-link"
              style={({ isActive }) => ({ color: isActive && "red" })}
            >
              Instructors
            </NavLink>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive && "red" })}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
