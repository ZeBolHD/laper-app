import { FavoriteImagesState, FavoritesItem } from "../redux/favorites/types";

export const getFavoritesFromLS = (): FavoriteImagesState => {
  const data = localStorage.getItem("favorites");
  const items = data ? JSON.parse(data) : [];
  return {
    items: items as FavoritesItem[],
  };
};
