import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { OPTIONS_LANG } from "../Config";

const Translate = () => {
  const [language, setLanguage] = useState(OPTIONS_LANG[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={OPTIONS_LANG}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  );
};

export default Translate;
