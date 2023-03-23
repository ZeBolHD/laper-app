import React from "react";
import styles from "./Header.module.scss";

import logoSvg from "../../assets/logo.svg";
import Search from "../Search";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";

const Header: React.FC = () => {
  const isMounted = React.useRef<boolean>(false);

  const location = useLocation();

  const { items } = useSelector(selectFavorites);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);

      localStorage.setItem("favorites", json);
    }
    isMounted.current = true;
  }, [items]);

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
