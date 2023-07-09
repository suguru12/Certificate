import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../asset/logo.png'; 

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={toggleNav}>
        <i className={isNavOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
        <li>
        <img className="im" src={logo} alt="Logo"></img>
        </li>
        <li>
          <Link to="https://whytap.in/about-us/" onClick={toggleNav}>About Us</Link>
        </li>
        <li>
          <Link to="https://whytap.in/courses/" onClick={toggleNav}>Courses</Link>
        </li>
        <li>
          <Link to="https://jobs.whytap.in/" onClick={toggleNav}>Jobs</Link>
        </li>
        <li>
          <Link to="https://whytap.in/news/" onClick={toggleNav}>News</Link>
        </li>
        <li>
          <Link to="https://whytap.in/contact-us/" onClick={toggleNav}>Contact Us</Link>
        </li>
        <li>
          <Link to="http://localhost:3001/" onClick={toggleNav}>Admin Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;