import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

const Mybutton = () => {
  const [running, setRunning] = useState(false);
  const [count, setCount] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);
  useEffect(() => {
    if (running) {
      intervalIdRef.current = setInterval(() => {
        setCount(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [running]);
  function Start() {
    setRunning(true);
    startTimeRef.current = Date.now() - count;
  }
  function Stop() {
    setRunning(false);
  }
  function Reset() {
    setCount(0);
    setRunning(false);
  }
  function formatTime() {
    const hours = Math.floor(count / (1000 * 60 * 60));
    const minut = Math.floor((count / (1000 * 60)) % 60);
    const second = Math.floor((count / 1000) % 60);
    const millissecond = Math.floor((count % 1000) / 10);

    return `${hours}:${minut}:${second}:${millissecond}`;
  }
  return (
    <div className="bg-black w-[1200px] h-[500px] mx-auto py-[150px] px-[420px]">
      <p className="text-green-500  font-extrabold text-[70px]">Challenge</p>
      <div className="flex">
        <div className="text-white text-[90px]">{formatTime()}</div>
      </div>
      <div className="gap-5">
        <button
          className="bg-blue-500 text-white font-semibold w-[100px] h-[38px] rounded-xl"
          onClick={Start}
        >
          Start!
        </button>
        <button
          className="bg-orange-500 text-white font-semibold w-[100px] h-[38px] rounded-xl"
          onClick={Reset}
        >
          Reset
        </button>
        <button
          className="bg-red-600 text-white font-semibold w-[100px] h-[38px] rounded-xl"
          onClick={Stop}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default Mybutton;
