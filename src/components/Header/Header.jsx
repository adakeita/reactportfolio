import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PortfolioLogo from "../../assets/img/adakeita-logo.png";
import Menu from "../../assets/svg/menu.svg";
import Close from "../../assets/svg/close.svg";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "navitem-link active" : "navitem-link";
  };

  return (
    <header id="header" role="banner">
      <div className="header-content">
        <div className="logo-burger-row">
          <div className="row-section">
            <div className="logo-wrapper">
              <Link to="/" aria-label="Home">
                <img
                  src={PortfolioLogo}
                  alt="Portfolio Logo"
                  className="logo"
                />
              </Link>
            </div>
          </div>
          <div className="row-section">
            <button
              className="menu-icon-wrapper"
              aria-controls="navigation"
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <img
                src={menuOpen ? Close : Menu}
                alt={menuOpen ? "Close menu" : "Open menu"}
                className="menu-icon"
              />
            </button>
          </div>
        </div>
        <nav
          id="navigation"
          className={`nav-wrapper ${menuOpen ? "open" : "closed"}`}
          role="navigation"
        >
          <ul className="navlist">
            <li className="nav-item">
              <Link to="/" className={getNavLinkClass("/")}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className={getNavLinkClass("/projects")}>
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
