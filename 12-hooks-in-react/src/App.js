import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Timer from "./components/Timer";
import Translate from "./components/Translate";
import { TIME, OPTIONS, ITEMS, SHOWCOMPONENT } from "./Config";

const App = () => {
  const [selected, setSelected] = useState(OPTIONS[0]);
  const [showDropdown, setShowDropdown] = useState(SHOWCOMPONENT);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={OPTIONS}
        />
      ) : null}

      <Translate />
    </div>
  );
};

export default App;
