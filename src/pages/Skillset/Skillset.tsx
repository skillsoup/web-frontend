import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../utils/useLocalStorage";
import SkillCard from "./SkillCard";

import styles from "./Skillset.module.css";

const Skillset = () => {
  const navigate = useNavigate();
  const [skillData, setSkillData] =
    useLocalStorage<Record<string, string[]>>("skillData");

  useEffect(() => {
    if (!skillData) {
      navigate("/profile/add-skills");
    }
  }, [skillData]);
  return (
    <div className={styles.layout}>
      <h1 className={styles.heading}>My Skillsets</h1>
      <div className={styles.cardsContainer}>
        {Object.getOwnPropertyNames(skillData).map((val, index) => (
          <SkillCard category={val} skills={skillData![val]} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skillset;
