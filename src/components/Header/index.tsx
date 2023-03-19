import React from "react";
import styles from "./Header.module.scss";

import logoSvg from "../../assets/logo.svg";
import Search from "../Search";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className={styles.main}>
      <div className={styles.container}>
        <Link to={"/"} className={styles.logo}>
          <img src={logoSvg} alt="" />
        </Link>
        {location.pathname === "/" && <Search />}

        <nav>
          <ul>
            <li>
              <Link to={"/favorites"}>
                <div>Favorites</div>
              </Link>
            </li>
            <li>
              <Link to={"/login"}>
                <div>Sign in</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
