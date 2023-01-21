import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Landing.module.css";

const Landing = () => {
  const navigate = useNavigate();
  const onClick = (e: React.MouseEvent) => {
    navigate("/onboard");
  };
  return (
    <div className={styles.root}>
      <div className={styles.contentContainer}>
        <h1>Skill Soup</h1>
        <h2>Context</h2>
        <button onClick={onClick}>Start</button>
      </div>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default Landing;
