import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./MainLayout.module.scss";

import Header from "../components/Header";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
