import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NoMatch from "../NoMatch/NoMatch";

import Dog from "../../assets/doohickies/graphic_dog.png";
import Rocket from "../../assets/doohickies/graphic_rocket.png";
import Worm from "../../assets/doohickies/graphic_worm.png";
import Circles from "../../assets/doohickies/graphic_circles.png";
import styles from "./AddSkills.module.css";
import { SkillCategory } from "../../types/Skill";
import { useLocalStorage } from "../../utils/useLocalStorage";

const questions: Record<SkillCategory, string> = {
  communication:
    "How would you handle a situation where you noticed your supervisor made an error in a report or presentation?",
  resilience:
    "How do you stay motivated and engaged during long-term projects or tasks?",
  teamwork:
    "Can you give an example of a successful team project you have been a part of and your role in it?",
  organization: "How do you prioritize daily work tasks?",
  technical: "Tell me about your technical background.",
} as const;

interface InputPageProps {
  formState: Record<SkillCategory, string>;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onClick: (e: React.MouseEvent) => void;
}
const InputPage = ({ onChange, formState, onClick }: InputPageProps) => (
  <div className={styles.questionsLayout}>
    <div className={styles.headingContainer}>
      <h1 className={styles.heading}>Tell us about yourself</h1>
      <p className={styles.subheading}>
        Our AI assistant will personalize your skillset list in 10 seconds
      </p>
    </div>
    <div className={styles.questionsContainer}>
      {Object.getOwnPropertyNames(questions).map((category, index) => (
        <label className={styles.label} key={index}>
          {questions[category as SkillCategory]}
          <textarea
            className={styles.textInput}
            value={formState[category as SkillCategory]}
            onChange={onChange}
            name={category}
          />
        </label>
      ))}
    </div>

    <button className={styles.button} onClick={onClick}>
      Submit
    </button>
  </div>
);

const LoadingPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.heading}>
        Please give us a second to get your result...
      </h1>
    </div>
  );
};
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.layout}>
      <h1 className={styles.heading}>An error occured :(</h1>
      <button
        className={styles.button}
        onClick={() => {
          navigate("..");
        }}
      >
        Retry
      </button>
    </div>
  );
};

const SuccessPage = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/profile");
  };
  return (
    <div className={styles.layout}>
      <h1 className={styles.heading}>
        New skillsets were put in your profile!
      </h1>

      <button className={styles.button} onClick={onClick}>
        View Profile
      </button>
      <img className={styles.imgDog} src={Dog} />
    </div>
  );
};

const AddSkills = () => {
  const navigate = useNavigate();
  const [skillData, setSkillData] = useLocalStorage("skillData");
  const [formState, setFormState] = useState<Record<SkillCategory, string>>({
    communication: "",
    organization: "",
    resilience: "",
    teamwork: "",
    technical: "",
  });

  const onFormChange: React.ChangeEventHandler = async (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormState((current) => {
      return { ...current, [e.target.name]: e.target.value };
    });
  };
  const onClick = async (e: React.MouseEvent) => {
    navigate("loading");

    let res: Response;
    try {
      res = await fetch("https://skillsoup.onrender.com/user/job_survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (!res.ok) {
        return navigate("error", { replace: true });
      }
      const data = await res.json();
      setSkillData(data);
    } catch (error) {
      console.error(error);
      return navigate("error", { replace: true });
    }
    navigate("success", { replace: true });
  };
  return (
    <Routes>
      <Route
        index
        element={
          <InputPage
            onClick={onClick}
            onChange={onFormChange}
            formState={formState}
          />
        }
      />
      <Route path="loading" element={<LoadingPage />} />
      <Route path="success" element={<SuccessPage />} />
      <Route path="error" element={<ErrorPage />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default AddSkills;
