import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaEnvelope, FaHome, FaUsers } from 'react-icons/fa';
const Navbar = () => {
    return (
        <ul className="nav justify-content-center bg-dark">
            <li className="nav-item">
                <Link className="nav-link text-white text-center" aria-current="page" to="/">
                    <FaHome /> <br />
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white text-center" to="/about">
                    <FaUsers /> <br />
                    About
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white text-center" to="/contact">
                    <FaEnvelope /> <br />
                    Contact
                </Link>
            </li>
        </ul>
    )
}

export default withRouter(Navbar);