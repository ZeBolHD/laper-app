import React from "react";
import styles from "./ImageBlock.module.scss";

interface IImageBlock {
  imageUrl: string;
}

const ImageBlock: React.FC<IImageBlock> = ({ imageUrl }) => {
  let testRef = React.useRef<URL>();

  if (imageUrl) {
    testRef.current = new URL(imageUrl);
  }

  return (
    <div className={styles.imageBlock}>
      <a
        href={`https://images.unsplash.com${testRef.current?.pathname}?&fit=max`}
        target="_blank"
      >
        <img
          className={styles.image}
          src={imageUrl}
          onLoad={() => console.log("image loaded")}
          alt="Loading..."
        />
      </a>
    </div>
  );
};

export default ImageBlock;
