import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <StaticImage src="../images/icon.png" width={100}></StaticImage>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/sobremi" className={navLinkText}>
              Sobre mi
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link>
              <a href="https://github.com//AElenaGr" className={navLinkText}>
                github
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
        <footer>
          <p className="footer">&copy; andra {new Date().getFullYear()}</p>
        </footer>
      </main>
    </div>
  );
};

export default Layout;
