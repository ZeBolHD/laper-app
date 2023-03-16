import React from "react";
import styles from "./Header.module.scss";

import logoSvg from "../../assets/logo.svg";
import Search from "../Search";

const Header: React.FC = () => {
  return (
    <header className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logoSvg} alt="" />
        </div>
        <Search />
        <nav>
          <ul>
            <li>
              <a href="#">Favorites</a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
