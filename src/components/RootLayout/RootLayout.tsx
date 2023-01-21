import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import styles from "./RootLayout.module.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.headerContainer}>
        <div
          style={{ width: "150px", height: "50px", backgroundColor: "blue" }}
        />
        <nav className={styles.navContainer}>
          <NavLink className={styles.navLink} to="/">
            Skillset
          </NavLink>
          <NavLink className={styles.navLink} to="/plan">
            Plan
          </NavLink>
          <NavLink className={styles.navLink} to="/add">
            Add
          </NavLink>
          <NavLink className={styles.navLink} to="/explore">
            Exploration
          </NavLink>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default RootLayout;
