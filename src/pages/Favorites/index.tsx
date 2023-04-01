import React from "react";
import { useSelector } from "react-redux";
import ImageBlock from "../../components/ImageBlock";
import { selectFavorites } from "../../redux/favorites/selectors";

import styles from "./Favorites.module.scss";

const Favorites: React.FC = () => {
  const { items } = useSelector(selectFavorites);

  const images = items.map((image) => (
    <ImageBlock imageUrl={image.url} key={image.url} isAdded={true} />
  ));

  return <ul className={styles.wallpapers_block}>{images}</ul>;
};

export default Favorites;
