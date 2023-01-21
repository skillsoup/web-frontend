import React from "react";

import styles from "./SkillCheckbox.module.css";

const SkillCheckbox = () => {
  return (
    <label className={styles.skill}>
      <input className={styles.checkbox} type="checkbox" />
      Goal Setting
    </label>
  );
};

export default SkillCheckbox;
