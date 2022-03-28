import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  console.log("I RUN WITH EVERY RENDER");

  //Cannot use async in useEffect
  useEffect(() => {
    //1. Create a new variable
    const search = async () => {
      await axios.get("adssadas");
    };
    //2. Immediately Invoked Function Expression
    (async () => {
      await axios.get("adssadas");
    })();

    //3. Normal promises
    axios.get("asdsadsa").then((res) => {
      console.log(res);
    });
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
