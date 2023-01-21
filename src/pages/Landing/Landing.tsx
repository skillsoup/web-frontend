import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import landingGraphic from "../../assets/landing_graphic.png";
import styles from "./Landing.module.css";

const Landing = () => {
  const navigate = useNavigate();
  const onClick = (e: React.MouseEvent) => {
    navigate("/onboard");
  };
  return (
    <div className={styles.root}>
      <img className={styles.logo} src={Logo} alt="Logo" />
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Skillsoup</h1>
          <h2 className={styles.subtitle}>Your skillset organizer</h2>
        </div>
        <button className={styles.button} onClick={onClick}>
          Start
        </button>
      </div>
      <img className={styles.graphic} src={landingGraphic} />
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default Landing;
