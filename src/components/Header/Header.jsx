import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    useEffect(() => {
        const navigation = document.querySelector(".nav-wrapper");
        const menuIcon = document.querySelector(".menu-icon");
        const navLinks = document.querySelectorAll(".nav-item a");

        const toggleMenu = () => {
            navigation.classList.toggle("open");
            navigation.classList.toggle("closed");

            if (navigation.classList.contains("open")) {
                menuIcon.src = "icons/logout.png";
            } else {
                menuIcon.src = "icons/bar.png";
            }
        };

        menuIcon.addEventListener("click", toggleMenu);

        const currentPage = window.location.href;
        navLinks.forEach(link => {
            if (link.href === currentPage) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        return () => {
            menuIcon.removeEventListener("click", toggleMenu);
        };
    }, []);

    return (
        <header id="header">
            <div className="header-content">
                <section className="logo-burger-row">
                    <section className="row-section">
                        <div className="logo-wrapper">
                            <Link to="/">
                                <img src="logo/adakeita-logo.png" alt="logo" className="logo" />
                            </Link>
                        </div>
                    </section>
                    <section className="row-section">
                        <button className="menu-icon-wrapper" role="button">
                            <img role="menu" src="icons/bar.png" alt="menu-icon" className="menu-icon" />
                        </button>
                    </section>
                </section>
                <div className="nav-wrapper closed">
                    <nav role="navigation" className="navigation">
                        <ul className="navlist">
                            <li className="nav-item"><Link to="/" className="navitem-link">Home</Link></li>
                            <li className="nav-item"><Link to="/projects" className="navitem-link">Projects</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;