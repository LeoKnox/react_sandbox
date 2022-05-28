import { useState } from "react";

export default function Character() {
  const [player, setPlayer] = useState("fighter");

  return (
    <div>
      <h1>Character {player}</h1>
      <button
        type="button"
        onClick={() => setPlayer("wizard")}
      >wizard</button>
      <button
        type="button"
        onClick={() => setPlayer("fighter")}
      >fighter</button>
    </div>
  );
}
