import React, { useEffect, useState } from "react";
import ExploreResult from "./ExploreResult";

import styles from "./Explore.module.css";
import { FaSearch } from "react-icons/fa";
import { useLocalStorage } from "../../utils/useLocalStorage";
import { Link, useNavigate } from "react-router-dom";
import { ExploreResponse } from "../../types/Skill";

const ErrorMessage = () => {
  return (
    <div className={styles.statusMessageContainer}>
      <h1 className={styles.statusMessage}>An error occured :(</h1>
      <p className={styles.text}>Please try again</p>
    </div>
  );
};
const LoadingMessage = () => {
  return (
    <div className={styles.statusMessageContainer}>
      <h1 className={styles.statusMessage}>Loading...</h1>
      <p className={styles.text}>Please wait while we work our magic</p>
    </div>
  );
};

const Explore = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<ExploreResponse | null>(null);
  const [skillData, setSkillData] = useLocalStorage("skillData");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    let res: Response;
    try {
      res = await fetch("https://skillsoup.onrender.com/user/explore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ job_position: searchValue, skills: skillData }),
      });
      if (!res.ok) {
        setError(true);
        setLoading(false);
        return;
      }
      const data: ExploreResponse = await res.json();
      console.log(data);
      setData(data);
    } catch (err) {
      console.error(err);
      return setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (!skillData) {
      navigate("/profile/add-skills");
    }
  }, [skillData]);
  return (
    <div className={styles.layout}>
      <form onSubmit={handleSubmit} className={styles.searchContainer}>
        <h1 className={styles.heading}>Explore skills for</h1>
        <input
          className={styles.input}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <FaSearch className={styles.searchIcon} />
      </form>

      {error ? <ErrorMessage /> : null}
      {loading ? <LoadingMessage /> : null}
      {data ? <ExploreResult data={data} /> : <div>sdfdsf</div>}
    </div>
  );
};

export default Explore;
