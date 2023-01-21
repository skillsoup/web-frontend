import React, { useState } from "react";
import ExploreResult from "./ExploreResult";

import styles from "./Explore.module.css";
import { FaSearch } from "react-icons/fa";

const Explore = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mock fetch
    setData("data");
  };
  return (
    <div className={styles.layout}>
      <form onSubmit={handleSubmit} className={styles.searchContainer}>
        <h1 className={styles.heading}>Explore skills for</h1>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <FaSearch className={styles.searchIcon} />
      </form>
      {loading ? <p>loading</p> : data ? <ExploreResult /> : null}
    </div>
  );
};

export default Explore;
