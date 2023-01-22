import _ from "lodash";
import React from "react";
import { FaPlus } from "react-icons/fa";
import SkillCheckbox from "../../components/SkillCheckbox/SkillCheckbox";
import { ExploreResponse } from "../../types/Skill";

import styles from "./ExploreResult.module.css";

interface ExploreResultProps {
  data: ExploreResponse;
}

const ExploreResult = ({ data }: ExploreResultProps) => {
  return (
    <>
      <h1 className={styles.title}>{data.job_position}</h1>
      <section className={styles.skillSection}>
        <h2 className={styles.heading}>Our recommendation for you:</h2>
        <hr className={styles.divider} />
        <p className={styles.text}>{data.advice}</p>
      </section>
      <section className={styles.skillSection}>
        <h2 className={styles.heading}>You could work on these skills!</h2>
        <hr className={styles.divider} />
        <ul className={styles.listLayout}>
          {data.skills
            .trim()
            .substring(1, data.skills.length - 2)
            .split(",")
            .map((skill, index) => (
              <li className={styles.listItem} key={index}>
                {_.capitalize(skill)}
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};

export default ExploreResult;
