import React from "react";
import { useSelector } from "react-redux";
import styles from "./Home.module.scss";

import ImageBlock from "../../components/ImageBlock";
import ImageSkeleton from "../../components/ImageSkeleton";

import { fetchImages, fetchMoreImages } from "../../redux/images/asyncActions";
import { useAppDispatch } from "../../redux/store";
import { selectImagesUrl } from "../../redux/images/selectors";
import { selectFilter } from "../../redux/filter/selectors";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const { imageUrlArr, status } = useSelector(selectImagesUrl);
  const { searchValue } = useSelector(selectFilter);

  const dispatch = useAppDispatch();

  const scrollHandler = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 200 &&
      !isLoading
    ) {
      dispatch(fetchMoreImages(searchValue));
    }
  };

  React.useEffect(() => {
    if (status == "loading") {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [status]);

  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [isLoading]);

  React.useEffect(() => {
    dispatch(fetchImages(searchValue));
  }, [searchValue]);

  const images = imageUrlArr.map((image, index) => (
    <ImageBlock imageUrl={image.url} key={index} />
  ));

  const skeletons = [...new Array(12)].map((_, index) => (
    <ImageSkeleton key={index} />
  ));

  return (
    <div className={styles.wallpapers_block}>
      {images}
      {isLoading && skeletons}
    </div>
  );
};

export default Home;
