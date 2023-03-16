import React from "react";
import { useSelector } from "react-redux";
import styles from "./Home.module.scss";

import ImageBlock from "../../components/ImageBlock";

import { fetchImages } from "../../redux/images/asyncActions";
import { useAppDispatch } from "../../redux/store";
import { selectImagesUrl } from "../../redux/images/selectors";
import ImageSkeleton from "../../components/ImageSkeleton";
import { selectFilter } from "../../redux/filter/selectors";

const Home: React.FC = () => {
  const { imageUrlArr, status } = useSelector(selectImagesUrl);

  const dispatch = useAppDispatch();

  const { searchValue } = useSelector(selectFilter);

  React.useEffect(() => {
    dispatch(fetchImages(""));
  }, []);

  React.useEffect(() => {
    dispatch(fetchImages(searchValue));
  }, [searchValue]);

  const images = imageUrlArr.map((url, index) => (
    <ImageBlock imageUrl={url} key={index} />
  ));

  const skeletons = [...new Array(10)].map((_, index) => (
    <ImageSkeleton key={index} />
  ));

  return (
    <div>
      <div className={styles.wallpapers_block}>
        {status == "error" ? (
          <div>
            <h1>Произошла ошибка :(</h1>
          </div>
        ) : status == "loading" ? (
          skeletons
        ) : (
          images
        )}
      </div>
    </div>
  );
};

export default Home;
