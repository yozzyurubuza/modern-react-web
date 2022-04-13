import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { OPTIONS_LANG } from "../Config";

const Translate = () => {
  const [language, setLanguage] = useState(OPTIONS_LANG[0]);

  return (
    <div>
      <Dropdown
        options={OPTIONS_LANG}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  );
};

export default Translate;
