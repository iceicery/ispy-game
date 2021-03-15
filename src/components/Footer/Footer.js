import React from 'react';
import './Footer.css';
import linkedinIcon from '../../images/linkedin.svg';
import githubIcon from '../../images/github.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-box">
        <a
          href="https://iceicery.github.io/pinwei/"
          target="_blank"
          rel="noreferrer"
          className="footer__text"
        >
          &copy; Pinwei Wu
        </a>
        <a
          href="https://www.linkedin.com/in/pinwei-wu-514713120/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedinIcon}
            alt="link to linkedin"
            className="footer__icon"
          />
        </a>
        <a href="https://github.com/iceicery" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="link to github" className="footer__icon" />
        </a>
      </div>
      <p className="footer__text">
        Animal and Vegitable Icons designed by Pinwei Wu and Cindy Chen.{' '}
      </p>
    </footer>
  );
}
