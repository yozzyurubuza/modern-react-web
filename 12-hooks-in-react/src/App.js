import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Timer from "./components/Timer";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
import { TIME, OPTIONS, ITEMS, SHOWCOMP } from "./Config";

const App = () => {
  const [selected, setSelected] = useState(OPTIONS[0]);

  //The inner element in the Route tag is provided as "children" prop
  return (
    <div>
      <Header />
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
