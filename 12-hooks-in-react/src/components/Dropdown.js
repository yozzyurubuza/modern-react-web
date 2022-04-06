import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const onBodyClick = (event) => {
    // If user click in the dropdown, do nothing in this function.
    if (ref.current.contains(event.target)) return;

    // If user click somewhere outside the dropdown, attempt to close the dropdown.
    setOpen(false);
  };

  useEffect(() => {
    //Create event listener at body to determine when the user clicked outside the dropdown component
    document.body.addEventListener("click", onBodyClick, { capture: true });

    //Clean-up function of useEffect, disable eventListener when component disappears.
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    //Do not show selected value on the list of choices
    if (option.value === selected.value) return null;

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    //useRef makes a reference for the DOM element that it is attached to. (In this case, the topmost div)
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
