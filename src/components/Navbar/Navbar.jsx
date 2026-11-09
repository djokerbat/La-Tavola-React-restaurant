import { NavLink } from "react-router-dom";
import Logo from "../../assets/La Tavola Italian Restaurant Emblem.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  px-4 py-3">
      <div className="container-fluid">

        <NavLink to="/" className="navbar-brand">
          <img
            src={Logo}
            alt="La Tavola Logo"
            width="100"
            height="100"
            className="object-fit-contain"
          />
        </NavLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">

            <li className="nav-item">
              <NavLink to="/Home" className="nav-link">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/About" className="nav-link">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Menu" className="nav-link">Menu</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Contact" className="nav-link">Contact</NavLink>
            </li>

          </ul>

          <NavLink to="/Contact" className="btn btn-dark">
            Book a Table ↗
          </NavLink>
        </div>

      </div>
    </nav>
  );
}