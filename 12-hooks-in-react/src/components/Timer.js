import React, { useEffect, useState } from "react";
import { TIME } from "../Config";

const Timer = ({ time, setTime }) => {
  const [timeString, setTimeString] = useState(time);

  //Decrement given time from parent component
  useEffect(() => {
    const decTimeId = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    // Reset timer back to default
    if (time === 0) setTime(TIME);

    //Remove instance of setInterval when the time value has changed.
    return () => {
      clearInterval(decTimeId);
    };
  }, [time, setTime]);

  //Convert to String to get an output with this format: 0:00
  useEffect(() => {
    setTimeString(String(time).padStart(2, 0));
  }, [time]);

  return (
    <div>
      <h1>0:{timeString}</h1>
    </div>
  );
};

export default Timer;
