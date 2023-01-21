import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import logoHorizontal from "../../assets/logo_horizontal.png";
import styles from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.sidebarContainer}>
        <img className={styles.logo} src={logoHorizontal} />
        <nav className={styles.navContainer}>
          <NavLink className={styles.navLink} end to="/profile">
            Skillset
          </NavLink>
          <NavLink className={styles.navLink} end to="/profile/add-skills">
            Add Skills
          </NavLink>
          <NavLink className={styles.navLink} end to="/profile/plan">
            Plan
          </NavLink>
          <NavLink className={styles.navLink} end to="/profile/explore">
            Explore
          </NavLink>
        </nav>
      </div>
      <section className={styles.mainContent}>
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
