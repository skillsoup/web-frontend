import React, { useState } from "react";

import styles from "./SkillItem.module.css";

interface SkillItemProps {
  skillName: string;
  index: number;
}

const SkillItem = ({ skillName, index }: SkillItemProps) => {
  const [selected, setSelected] = useState(false);

  const onClick = (e: React.MouseEvent) => {
    setSelected((val) => !val);
  };
  return (
    <div
      style={{ gridColumn: (index % 3) + 1 }}
      className={`${styles.container} ${selected ? styles.selected : null}`}
      onClick={onClick}
    >
      <p className={styles.text}>{skillName}</p>
    </div>
  );
};

export default SkillItem;
