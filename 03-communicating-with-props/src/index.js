import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";
import CommentDetail from "./CommentDetail";

const App = function () {
  return (
    <div className="ui container comments">
      {/* Syntax for calling CommentDetail */}
      <CommentDetail author="Sam" />
      <CommentDetail author="Alex" />
      <CommentDetail author="Jane" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
