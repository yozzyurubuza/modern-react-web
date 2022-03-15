import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it's cold",
    iconName: "snowflake",
  },
};

const getSeason = function (lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = function (props) {
  const season = getSeason(props.lat, new Date().getMonth());
  //Get text and iconName from object seasonConfig using destructure and bracket notation.
  const { text, iconName } = seasonConfig[season];

  return (
    //Root div element inside the component has a class name equal to the css version name of the component name
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
