import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function NavBar() {
  // the value of the class name that the is active will add if the link had been clicked on and the site is on that page
  const activeNav = 'active-nav';

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeNav : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quiz"
            className={({ isActive }) => (isActive ? activeNav : undefined)}
          >
            Quiz
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/links"
            className={({ isActive }) => (isActive ? activeNav : undefined)}
          >
            Links
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
