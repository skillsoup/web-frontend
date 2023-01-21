import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import styles from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.headerContainer}>
        <div
          style={{ width: "150px", height: "50px", backgroundColor: "blue" }}
        />
        <nav className={styles.navContainer}>
          <NavLink className={styles.navLink} to="/profile/skillset">
            Skillset
          </NavLink>
          <NavLink className={styles.navLink} to="/profile/plan">
            Plan
          </NavLink>
          <NavLink className={styles.navLink} to="/profile/explore">
            Exploration
          </NavLink>
        </nav>
      </header>
      <Outlet />
      {/* {children} */}
    </div>
  );
};

export default RootLayout;
