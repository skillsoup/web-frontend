import _ from "lodash";
import React from "react";
import SkillCheckbox from "../../components/SkillCheckbox/SkillCheckbox";

import styles from "./SkillCard.module.css";

interface SkillCardProps {
  category: string;
  skills: string[];
}

const SkillCard = ({ skills, category }: SkillCardProps) => {
  console.log("Skillcard rendered", { skills });
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>{_.startCase(category)}</h2>
      <hr />
      <div className={styles.skillsContainer}>
        {skills.map((val, index) => (
          <SkillCheckbox text={_.capitalize(val)} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
