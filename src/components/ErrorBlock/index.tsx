import React from "react";
import styles from "./ErrorBlock.module.scss";

interface ErrorBlockProps {
  errorButtonHandler: () => void;
}

const ErrorBlock: React.FC<ErrorBlockProps> = ({ errorButtonHandler }) => {
  return (
    <div className={styles.block}>
      <h2>Error</h2>
      <p>Ooops, something went wrong. Please try again later.</p>
      <button onClick={errorButtonHandler}>Try again</button>
    </div>
  );
};

export default ErrorBlock;
