import React from 'react';
import { Link } from 'react-router-dom';
import { FbIcon, GhIcon } from '../../images/icon';
import './index.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">&copy; 2021 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <ul className="footer__nav-list footer__nav_list_text">
          <li className="footer__nav-element-text">
            <Link
              className="footer__nav-link"
              to="/"
            >
              <p className="footer__nav-link-text">
                Главная
              </p>
            </Link>
          </li>
          <li className="footer__nav-element-text">
            <a
              className="footer__nav-link"
              href="https://praktikum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="footer__nav-link-text">
                Яндекс.Практикум
              </p>
            </a>
          </li>
        </ul>
        <ul className="footer__nav-list footer__nav_list_icon">
          <li className="footer__nav-element-icon">
            <a
              className="footer__nav-link"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <GhIcon
                className="footer__nav-link-icon"
              />
            </a>
          </li>
          <li className="footer__nav-element-icon">
            <a
              className="footer__nav-link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FbIcon
                className="footer__nav-link-icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;