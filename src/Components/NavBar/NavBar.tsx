import React from 'react';
import { createNavLink } from './NavBarHelper';
// import { NavLink } from 'react-router-dom';
// import styles from './navbar.module.css';

type NavPath = {
  name: string,
  path: string;
  testid: string
};
const NAV_PATHS: NavPath[] = [
  { name: 'Home', path: '/', testid: 'Home-Link' },
  { name: 'Quiz', path: '/quiz', testid: 'to-quiz-page-nav' },
  { name: 'Links', path: '/links', testid: 'to-links-page' },
  { name: 'Suggestions', path: '/suggestions', testid: 'to-suggestions-page' },
  { name: 'Admin', path: '/admin', testid: 'to-admin-page'}
];

function NavBar() {
  return (
    <nav>
      <ul>
        {NAV_PATHS.map((navPath) => (
          <li key={navPath.name}>
            {createNavLink(navPath.path, navPath.name, navPath.testid)}
          </li>))}
      </ul>
    </nav>
  );
}

export default NavBar;
