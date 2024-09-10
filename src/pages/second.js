import { useState } from "react";
import { PlayerScore } from "../components/component/PlayerScore";
import { Reset } from "../components/component/Reset";

const players = [
  {
    id: 1,
    playerName: "John Cena",
    playerScore: 7,
  },
  {
    id: 2,
    playerName: "John John",
    playerScore: 4,
  },
  {
    id: 3,
    playerName: "John Kena",
    playerScore: 5,
  },
  // {
  //   id: 4,
  //   playerName: "John Kena",
  //   playerScore: 3,
  // },
];
const SecondPage = () => {
  //   const [index, setIndex] = useState(0);
  const [score, setScore] = useState(players);

  const resetScore = () => {
    setScore(players);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="Container w-[528px] h-[380px] mt-72 bg-slate-50 rounded-md px-6 py-6">
        <div className="flex justify-between">
          <div className="font-bold text-2xl">PLAY SCORE</div>
          <img src="/champ.svg" />
        </div>
        <p>Hidden in the middle of text</p>
        <div>
          <div className="flex flex-col">
            {score.map((player) => {
              return (
                <PlayerScore
                  name={player.playerName}
                  score={player.playerScore}
                  key={player.id}
                />
              );
            })}
          </div>
        </div>
        <div>
          <Reset onClick={resetScore} />
        </div>
      </div>
    </div>
  );
};
export default SecondPage;
