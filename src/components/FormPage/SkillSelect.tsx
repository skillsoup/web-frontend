import React, { useState } from "react";

import styles from "./SkillSelect.module.css";

interface SkillSelectProps {
  skillName: string;
}

const SkillSelect = ({ skillName }: SkillSelectProps) => {
  const [selected, setSelected] = useState(false);

  const onClick = (e: React.MouseEvent) => {
    setSelected((val) => !val);
  };
  return (
    <div
      className={`${styles.container} ${selected ? styles.selected : null}`}
      onClick={onClick}
    >
      {skillName}
    </div>
  );
};

export default SkillSelect;
