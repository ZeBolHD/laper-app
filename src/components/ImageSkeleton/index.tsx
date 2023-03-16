import React from "react";
import ContentLoader from "react-content-loader";

import styles from "./ImageSkeleton.module.scss";

const ImageSkeleton: React.FC = () => {
  return (
    <div className={styles.skeleton_parent}>
      <ContentLoader
        className={styles.skeleton}
        speed={1.5}
        width="500"
        height="500"
        backgroundColor="#d1d1d1"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" width="500" height="500" />
      </ContentLoader>
    </div>
  );
};

export default ImageSkeleton;
