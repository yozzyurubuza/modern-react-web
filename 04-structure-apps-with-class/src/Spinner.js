import React from "react";

const Spinner = function (props) {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// Prepare default settings in case no value is given in using the component
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
