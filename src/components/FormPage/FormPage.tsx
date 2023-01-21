import React from "react";
import { SkillType, TSkills } from "../../types/Skill";
import SkillItem from "./SkillItem";

import styles from "./FormPage.module.css";

interface FormPageProps {
  formState: TSkills;
  setFormState: React.Dispatch<React.SetStateAction<TSkills>>;
  skills: string[];
}

const FormPage = ({ formState, setFormState, skills }: FormPageProps) => {
  return (
    <div className={styles.container}>
      {skills.map((val, index) => (
        <>
          {index % 7 === 4 ? <div className={styles.spacer} /> : null}
          <SkillItem skillName={val} index={index} key={index} />
        </>
      ))}
    </div>
  );
};

export default FormPage;
