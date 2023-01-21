import React from "react";
import SkillCheckbox from "../../components/SkillCheckbox/SkillCheckbox";

import styles from "./ExploreResult.module.css";

const ExploreResult = () => {
  return (
    <section className={styles.layout}>
      <div className={styles.skillSection}>
        <h2 className={styles.heading}>You've got these skills!</h2>
        <div className={styles.skillsContainer}>
          <SkillCheckbox />
          <SkillCheckbox />
          <SkillCheckbox />
          <SkillCheckbox />
          <SkillCheckbox />
          <SkillCheckbox />
        </div>
      </div>
      <div className={styles.skillSection}>
        <h2 className={styles.heading}>You could work on these skills!</h2>
        <div className={styles.skillsContainer}>
          <SkillCheckbox />
          <SkillCheckbox />
          <SkillCheckbox />
          <SkillCheckbox />
          <SkillCheckbox />
          <SkillCheckbox />
        </div>
      </div>
    </section>
  );
};

export default ExploreResult;
