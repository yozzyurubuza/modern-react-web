import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
import { OPTIONS_LANG } from "../Config";

//Translate Dropdown Component
const Translate = () => {
  //Use first language as default and empty string as default text value
  const [language, setLanguage] = useState(OPTIONS_LANG[0]);
  const [text, setText] = useState("");

  //Display:
  //1. Input text field and then pass the value to text.
  //2. Dropdown Component with list of languages to translate.
  //3. Convert Component that will display the translated text from input text field.
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
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
