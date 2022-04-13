import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Timer from "./components/Timer";
import Translate from "./components/Translate";
import { TIME, OPTIONS, ITEMS, SHOWCOMPONENT } from "./Config";

const App = () => {
  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;
