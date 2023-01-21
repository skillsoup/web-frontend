import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormPage from "../../components/FormPage/FormPage";
import { SkillType, TSkills } from "../../types/Skill";

const pages: SkillType[] = ["organization", "personality"];
const skills: TSkills = {
  organization: [
    "Goal setting",
    "Decision making",
    "Strategy thinking",
    "Collaboration",
    "Time management",
    "Effective communication",
  ],
  personality: ["Amiable"],
};

const Onboard = () => {
  const navigate = useNavigate();

  const [formPage, setFormPage] = useState(0);
  const [formState, setFormState] = useState<TSkills>({
    organization: [],
    personality: [],
  });

  const onNextClick = (e: React.MouseEvent) => {
    setFormPage((val) => val + 1);
  };
  const onSubmitClick = (e: React.MouseEvent) => {
    navigate("/profile");
  };
  console.log(formPage);
  return (
    <div>
      <h1>Add {pages[formPage]} skills</h1>
      <FormPage
        formState={formState}
        setFormState={setFormState}
        skills={skills[pages[formPage]]}
      />
      {formPage < pages.length - 1 ? (
        <button onClick={onNextClick}>next</button>
      ) : (
        <button onClick={onSubmitClick}>submit</button>
      )}
    </div>
  );
};

export default Onboard;
