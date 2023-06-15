import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  // the footer for all the pages
  return (
    <footer>
      <div>
        <h4>Read/watch more Shoujo! 😝 Thanks for checking out the page!</h4>
        <p>
          <a href="https://github.com/bbland1/Quiz-App/#readme">
            Open Source Code
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {' '}
          |
          {' '}
          <a href="https://www.linkedin.com/in/bbland1/">
            Made by: bbland1
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          {' '}
          |
          {' '}
          <a href="https://vercel.com">
            Hosted with Vercel
            <FontAwesomeIcon icon={faCaretUp} />
          </a>
        </p>
        <p>
          &copy; 2022-
          {new Date().getFullYear()}
          {' '}
          bbland1
        </p>
      </div>
    </footer>
  );
}

export default Footer;
