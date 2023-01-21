import React from "react";
import SkillCard from "./SkillCard";

import styles from "./Skillset.module.css";

const Skillset = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.heading}>My Skillsets</h1>
      <div className={styles.cardsContainer}>
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
};

export default Skillset;
