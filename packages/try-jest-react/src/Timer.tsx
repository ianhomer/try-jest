import React, { useEffect, useState } from "react";

function Timer() {
  const [timeoutTime, setTimeoutTime] = useState(0);
  const [intervalTime, setIntervalTime] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeoutTime(timeoutTime + 1);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutTime]);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setIntervalTime(intervalTime + 1);
    }, 1000);
    return () => {
      clearInterval(timeoutId);
    };
  });

  return (
    <div className="timer">
      <h2>Timer</h2>
      <p role="timer">
        {intervalTime} : {timeoutTime}
      </p>
    </div>
  );
}

export default Timer;
