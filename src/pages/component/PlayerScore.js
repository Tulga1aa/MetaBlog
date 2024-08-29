import { useState } from "react";

export const PlayerScore = (props) => {
  const [score, setScore] = useState(props.score);
  const increment = () => {
    setScore(score + 1);
  };
  const decrament = () => {
    setScore(score - 1);
  };
  // const zero = () => {
  //   setScore(0);
  // };

  return (
    <div>
      <div className="flex justify-between items-center w-[478px] h-[72px] border border-solid mt-5 ">
        <p className="items-center"> {props.name}</p>
        <div className=" flex justify-between text-center w-[128px] h-[40px] bg-slate-100 rounded-3xl">
          <button
            onClick={decrament}
            className="border border-solid w-[40px] h-[40px] rounded-full  bg-white"
          >
            -
          </button>
          <p className="flex items-center">{score}</p>
          <button
            onClick={increment}
            className="border border-solid w-[40px] h-[40px] rounded-full bg-white"
          >
            +
          </button>
        </div>
      </div>
      {/* <div>
        <div className="flex justify-end mt-12">
          <button
            onClick={zero}
            className="w-32 h-12 bg-[#14B166] rounded-lg text-[white]"
          >
            Reset
          </button>
        </div>
      </div> */}
    </div>
  );
};
