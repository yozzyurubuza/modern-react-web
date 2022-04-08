import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Timer from "./components/Timer";
import { TIME, OPTIONS, ITEMS, SHOWCOMPONENT } from "./Config";

const App = () => {
  const [selected, setSelected] = useState(OPTIONS[0]);
  const [showDropdown, setShowDropdown] = useState(SHOWCOMPONENT);

  const [showTimer, setShowTimer] = useState(SHOWCOMPONENT);
  const [time, setTime] = useState(TIME);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      <button
        onClick={() => {
          setShowTimer(!showTimer);
          setTime(TIME);
        }}
      >
        Toggle Timer
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={OPTIONS}
        />
      ) : null}

      <div>{showTimer ? <Timer time={time} setTime={setTime} /> : null}</div>
    </div>
  );
};

export default App;
