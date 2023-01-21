import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FormPage from "../../components/FormPage/FormPage";
import { SkillType, TSkills } from "../../types/Skill";

import styles from "./AddSkills.module.css";

const pages: SkillType[] = ["organization", "personality"];
const skills: TSkills = {
  organization: [
    "Goal setting",
    "Decision making",
    "Strategy thinking",
    "Collaboration",
    "Time management",
    "Effective communication",
    "Effective communication",
    "Effective communication",
    "Effective communication",
    "Effective communication",
    "Effective communication",
  ],
  personality: ["Amiable"],
};

const AddSkills = () => {
  const navigate = useNavigate();

  const [formPage, setFormPage] = useState(0);
  const [formState, setFormState] = useState<TSkills>({
    organization: [],
    personality: [],
  });

  const onNextClick = (e: React.MouseEvent) => {
    setFormPage((val) => val + 1);
  };
  const onPreviousClick = (e: React.MouseEvent) => {
    setFormPage((val) => val - 1);
  };
  const onSubmitClick = (e: React.MouseEvent) => {
    navigate("/profile");
  };
  console.log(formPage);
  return (
    <div className={styles.layout}>
      <h1 className={styles.heading}>Add Skills</h1>
      <FormPage
        formState={formState}
        setFormState={setFormState}
        skills={skills[pages[formPage]]}
      />
      <div className={styles.buttonContainer}>
        {formPage !== 0 ? (
          <button
            className={`${styles.button} ${styles.left}`}
            onClick={onPreviousClick}
          >
            <FaChevronLeft />
            Previous
          </button>
        ) : null}
        {formPage < pages.length - 1 ? (
          <button
            className={`${styles.button} ${styles.right}`}
            onClick={onNextClick}
          >
            Next
            <FaChevronRight />
          </button>
        ) : (
          <button
            className={`${styles.button} ${styles.right}`}
            onClick={onSubmitClick}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default AddSkills;
