import React from 'react';
import createNavLink from './NavBarHelper';

type NavPath = {
  name: string,
  path: string;
  testid: string
};
const NAV_PATHS: NavPath[] = [
  { name: 'Home', path: '/', testid: 'Home-Link' },
  { name: 'Quiz', path: '/quiz', testid: 'to-quiz-page-nav' },
  { name: 'Suggestions', path: '/suggestions', testid: 'to-suggestions-page' },
  { name: 'Links', path: '/links', testid: 'to-links-page' },
  { name: 'Control', path: '/control', testid: 'to-control-page'}
];

export default function NavBar() {
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
