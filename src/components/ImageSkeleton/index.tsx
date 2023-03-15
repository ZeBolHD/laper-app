import React from "react";
import ContentLoader from "react-content-loader";

import styles from "./ImageSkeleton.module.scss";

interface ImageSkeletonProps {
  size: number;
}

const ImageSkeleton: React.FC<ImageSkeletonProps> = ({ size }) => {
  console.log(size);
  return (
    <div className={styles.skeleton_parent}>
      <ContentLoader
        className={styles.skeleton}
        speed={1.5}
        width={"800"}
        height={size}
        backgroundColor="#d1d1d1"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" width="800" height={size} />
      </ContentLoader>
    </div>
  );
};

export default ImageSkeleton;
