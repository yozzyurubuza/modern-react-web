import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Timer from "./components/Timer";
import Translate from "./components/Translate";
import Route from "./components/Route";
import { TIME, OPTIONS, ITEMS, SHOWCOMP } from "./Config";

const showAccordion = () => {
  if (window.location.pathname === "/") return <Accordion items={ITEMS} />;
};

const showList = () => {
  if (window.location.pathname === "/list") return <Search />;
};

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") return <Dropdown />;
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") return <Translate />;
};

const App = () => {
  const [selected, setSelected] = useState(OPTIONS[0]);

  //The inner element in the Route tag is provided as "children" prop
  return (
    <div>
      <Route path="/">
        <Accordion items={ITEMS} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={OPTIONS}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
