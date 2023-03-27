import React from "react";
import { useSelector } from "react-redux";
import styles from "./Home.module.scss";

import ImageBlock from "../../components/ImageBlock";
import ImageSkeleton from "../../components/ImageSkeleton";
import ErrorBlock from "../../components/ErrorBlock";

import { fetchImages, fetchMoreImages } from "../../redux/images/asyncActions";
import { useAppDispatch } from "../../redux/store";
import { selectImagesUrl } from "../../redux/images/selectors";
import { selectFilter } from "../../redux/filter/selectors";

import { FilterCategoryType, FilterState } from "../../redux/filter/types";
import { resetFilter, setCategory } from "../../redux/filter/slice";
import Categories from "../../components/Categories";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const loadingRef = React.useRef<boolean>(false);

  const { imageUrlArr, status } = useSelector(selectImagesUrl);
  const { searchValue, imageCount, category } = useSelector(selectFilter);

  const dispatch = useAppDispatch();

  const scrollHandler = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 150 &&
      !loadingRef.current
    ) {
      loadingRef.current = true;
      const fetchParams: FilterState = { searchValue, imageCount, category };
      dispatch(fetchMoreImages(fetchParams));
    }
  };

  React.useEffect(() => {
    if (status == "loading") {
      setIsLoading(true);
    } else {
      loadingRef.current = false;
      setIsLoading(false);
    }

    if (status == "error") {
      window.removeEventListener("scroll", scrollHandler);
    }
  }, [status]);

  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [searchValue, category]);

  React.useEffect(() => {
    const fetchParams: FilterState = { searchValue, imageCount, category };
    dispatch(fetchImages(fetchParams));
  }, [searchValue, category]);

  const images = imageUrlArr.map((image, index) => (
    <ImageBlock imageUrl={image.url} key={index} />
  ));

  const skeletons = [...new Array(imageCount)].map((_, index) => (
    <ImageSkeleton key={index} />
  ));

  const errorButtonHandler = () => {
    dispatch(resetFilter());

    const fetchParams: FilterState = {
      searchValue: "",
      imageCount,
      category: "",
    };
    dispatch(fetchImages(fetchParams));
  };

  const onChangeCategory = (categoryName: FilterCategoryType) => {
    if (categoryName == category) {
      dispatch(setCategory(""));
    } else {
      dispatch(setCategory(categoryName));
    }
  };

  return (
    <div className={status === "error" ? styles.error : ""}>
      {status === "error" ? (
        <ErrorBlock errorButtonHandler={errorButtonHandler} />
      ) : (
        <>
          <Categories onChangeCategory={onChangeCategory} value={category} />
          <div className={styles.wallpapers_block}>
            {/* {skeletons} */}
            {images}
            {isLoading && skeletons}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
