import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";
import CommentDetail from "./CommentDetail";

const App = function () {
  return (
    <div className="ui container comments">
      {/* Syntax for calling CommentDetail */}
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        displaypic={faker.image.avatar()}
        comment="Nice blog post!"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        displaypic={faker.image.avatar()}
        comment="You look very nice!"
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        displaypic={faker.image.avatar()}
        comment="Amazing Content!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
