import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="container" id="nav-container">
            <ul className="row text-center" id="nav-row">
                <li className="col-12 col-md-3">
                    <NavLink to="/portfolio-website" className="nav-link">
                        <h1>Ryan</h1>
                    </NavLink>
                </li>
                <li className="col-12 col-md-3">
                    <Link to="/resume" className="nav-link">
                        Resume
                    </Link>
                </li>
                <li className="col-12 col-md-3">
                    <Link to="/projects" className="nav-link">
                        Projects
                    </Link>
                </li>
                <li className="col-12 col-md-3">
                    <Link to="/contact" className="nav-link">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;