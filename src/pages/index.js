import { useState } from "react";

const userList = [
  "Tergeltengis",
  "Tergeltengis2",
  "Tergeltengis3",
  "Tergeltengis4",
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState(userList);

  return (
    <div className="text-center">
      <button onClick={() => setIndex(index + 1)}>+'+</button>
      <p>{index}</p>
      <button onClick={() => setIndex(index - 1)}>-'-</button>
      {user.map((element) => {
        <p>{element}</p>;
      })}
    </div>
  );
}
