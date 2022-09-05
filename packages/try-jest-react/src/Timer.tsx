import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  const timer = () => {
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  }

  useEffect(timer);

  useEffect(timer, [time])

  return (
    <div className="timer">
      <h2>Timer</h2>
      <p role="timer">{time}</p>
    </div>
  );
}

export default Timer;
