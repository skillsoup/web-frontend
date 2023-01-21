import React, { useState } from "react";
import ExploreResult from "./ExploreResult";

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
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Explore skills for</h1>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      {loading ? <p>loading</p> : data ? <ExploreResult /> : null}
    </div>
  );
};

export default Explore;
