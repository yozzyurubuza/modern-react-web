// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
  return "Click on me!";
}

// const React = require('react'); // CommonJS import statement

// class App extends React.Component

// Create a react component
const App = function () {
  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
