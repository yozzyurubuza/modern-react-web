import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Timer from "./components/Timer";
import Translate from "./components/Translate";
import { TIME, OPTIONS, ITEMS, SHOWCOMPONENT } from "./Config";

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
  return (
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};

export default App;
