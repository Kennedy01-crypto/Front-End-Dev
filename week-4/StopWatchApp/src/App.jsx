import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [time, setTime] = useState({ minute: 0, second: 0, microsecond: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(() => {
        setTime((prev) => {
          let { minute, second, microsecond } = prev;
          microsecond += 1;
          if (microsecond >= 99) {
            microsecond = 0;
            second += 1;
          }
          if (second >= 60) {
            second = 0;
            minute += 1;
          }
          return { minute, second, microsecond };
        });
      }, 10);

      setIntervalId(id);
    }
  };
  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalId);
    }
  };
  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setTime({ minute: 0, second: 0, microsecond: 0 });
  };
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  const displayTime = `${formatTime(time.minute)}:${formatTime(
    time.second
  )}:${formatTime(time.microsecond)}`;
  return (
    <>
      <h1>Stopwatch</h1>
      <div className="card">
        <p>{displayTime}</p>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
}

export default App;
