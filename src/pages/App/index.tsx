import React from "react";
import { useSelector } from "react-redux";
import styles from "./App.module.scss";

import ImageBlock from "../../components/ImageBlock";

import { fetchImages } from "../../redux/images/asyncActions";
import { useAppDispatch } from "../../redux/store";
import { selectImagesUrl } from "../../redux/images/selectors";
import ImageSkeleton from "../../components/ImageSkeleton";

const App: React.FC = () => {
  const { imageUrlArr, status } = useSelector(selectImagesUrl);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchImages());
  }, []);

  const images = imageUrlArr.map((url, index) => (
    <ImageBlock imageUrl={url} key={index} />
  ));

  const skeletons = [...new Array(10)].map((_, index) => (
    <ImageSkeleton key={index} />
  ));

  return (
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
      {/* {skeletons} */}
    </div>
  );
};

export default App;
