import React from "react";
import { SkillType, TSkills } from "../../types/Skill";
import SkillSelect from "./SkillSelect";

interface FormPageProps {
  formState: TSkills;
  setFormState: React.Dispatch<React.SetStateAction<TSkills>>;
  skills: string[];
}

const FormPage = ({ formState, setFormState, skills }: FormPageProps) => {
  return (
    <div>
      {skills.map((val, index) => (
        <SkillSelect skillName={val} key={index} />
      ))}
    </div>
  );
};

export default FormPage;
