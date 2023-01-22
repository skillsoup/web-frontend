import React from "react";

import styles from "./SkillCheckbox.module.css";

interface SkillCheckboxProps {
  text: string;
}
const SkillCheckbox = ({ text }: SkillCheckboxProps) => {
  return (
    <label className={styles.skill}>
      <input className={styles.checkbox} type="checkbox" />
      {text}
    </label>
  );
};

export default SkillCheckbox;
