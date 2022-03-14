// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// const React = require('react'); // CommonJS import statement

// class App extends React.Component

// Create a react component
const App = function () {
  //Cannot display object in a JSX block, but can display object properties.
  const buttonText = { text: "Click me" };
  const labelText = "Enter name: ";

  //If console returns a warning message with "Did you mean" means there is an invalid property in the JSX.
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
