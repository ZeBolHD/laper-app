import React from "react";
import ContentLoader from "react-content-loader";

import styles from "./ImageSkeleton.module.scss";

const ImageSkeleton: React.FC = () => {
  const randomHeight = Math.random() > 0.5 ? "800" : "500";
  return (
    <div className={styles.skeleton_parent}>
      <ContentLoader
        className={styles.skeleton}
        speed={1.5}
        width={"800"}
        height={randomHeight}
        backgroundColor="#d1d1d1"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" width="800" height={randomHeight} />
      </ContentLoader>
    </div>
  );
};

export default ImageSkeleton;
