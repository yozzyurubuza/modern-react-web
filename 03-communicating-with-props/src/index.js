import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = function () {
  return (
    <div className="ui container comments">
      {/* Syntax for calling CommentDetail */}
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          displaypic={faker.image.avatar()}
          comment="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          displaypic={faker.image.avatar()}
          comment="You look very nice!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          displaypic={faker.image.avatar()}
          comment="Amazing Content!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
