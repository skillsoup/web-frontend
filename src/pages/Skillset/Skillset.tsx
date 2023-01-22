import React, { useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import SkillCard from "./SkillCard";

import styles from "./Skillset.module.css";

const Skillset = () => {
  const [skillData, setSkillData] =
    useLocalStorage<Record<string, string[]>>("skillData");

  console.log({ skillData });

  return (
    <div className={styles.layout}>
      <h1 className={styles.heading}>My Skillsets</h1>
      {skillData ? (
        <div className={styles.cardsContainer}>
          {Object.getOwnPropertyNames(skillData).map((val, index) => (
            <SkillCard category={val} skills={skillData[val]} key={index} />
          ))}
        </div>
      ) : (
        <div>dsafdsa</div>
      )}
    </div>
  );
};

export default Skillset;
