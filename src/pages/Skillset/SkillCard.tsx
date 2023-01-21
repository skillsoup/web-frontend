import React from "react";
import SkillCheckbox from "../../components/SkillCheckbox/SkillCheckbox";

import styles from "./SkillCard.module.css";

const SkillCard = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Example Skills</h2>
      <hr />
      <div className={styles.skillsContainer}>
        <SkillCheckbox />
        <SkillCheckbox />
        <SkillCheckbox />
        <SkillCheckbox />
        <SkillCheckbox />
        <SkillCheckbox />
      </div>
    </div>
  );
};

export default SkillCard;
