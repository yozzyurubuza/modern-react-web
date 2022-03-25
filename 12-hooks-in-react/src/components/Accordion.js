import React, { useState } from "react";

const Accordion = ({ items }) => {
  //Assign useState(null) to the 2 elements.
  // setActiveIndex - function to update state, re-render
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    //After running this code, component will re-render by going back on top.
    //Default value will no longer be null.
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    let active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={index}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
