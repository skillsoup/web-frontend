import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NoMatch from "../NoMatch/NoMatch";

import Dog from "../../assets/doohickies/graphic_dog.png";
import Rocket from "../../assets/doohickies/graphic_rocket.png";
import Worm from "../../assets/doohickies/graphic_worm.png";
import Circles from "../../assets/doohickies/graphic_circles.png";
import styles from "./AddSkills.module.css";

interface InputPageProps {
  textInput: string;
  setTextInput: React.Dispatch<React.SetStateAction<string>>;
  onClick: (e: React.MouseEvent) => void;
}
const InputPage = ({ setTextInput, textInput, onClick }: InputPageProps) => (
  <>
    <div className={styles.headingContainer}>
      <h1 className={styles.heading}>Tell us about yourself</h1>
      <p className={styles.subheading}>
        Our AI assistant will personalize your skillset list in 10 seconds
      </p>
    </div>
    <textarea
      className={styles.textInput}
      value={textInput}
      onChange={(e) => setTextInput(e.target.value)}
      placeholder="What skills do you have?"
    />
    <button className={styles.button} onClick={onClick}>
      Submit
    </button>
  </>
);

const LoadingPage = () => {
  return (
    <h1 className={styles.heading}>
      Please give us a second to get your result...
    </h1>
  );
};

const SuccessPage = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/profile");
  };
  return (
    <>
      <h1 className={styles.heading}>
        New skillsets were put in your profile!
      </h1>

      <button className={styles.button} onClick={onClick}>
        View Profile
      </button>
      <img className={styles.imgDog} src={Dog} />
    </>
  );
};

const AddSkills = () => {
  const navigate = useNavigate();
  const [textInput, setTextInput] = useState("");

  const onClick = async (e: React.MouseEvent) => {
    navigate("loading");

    let res: Response;
    try {
      res = await fetch("https://skillsoup.onrender.com/", {
        method: "POST",
        body: textInput,
      });
      if (!res.ok) {
        return navigate("error", { replace: true });
      }
    } catch (error) {
      console.error(error);
      return navigate("error", { replace: true });
    }

    const data = await res.json();
    localStorage.setItem("skillData", JSON.stringify(data));
    navigate("success", { replace: true });
  };
  return (
    <div className={styles.layout}>
      <Routes>
        <Route
          index
          element={
            <InputPage
              onClick={onClick}
              setTextInput={setTextInput}
              textInput={textInput}
            />
          }
        />
        <Route path="loading" element={<LoadingPage />} />
        <Route path="success" element={<SuccessPage />} />
        <Route path="error" element={<div>an error occured</div>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default AddSkills;
