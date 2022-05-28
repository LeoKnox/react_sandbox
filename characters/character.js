import { useState } from "react";
import Fighter from "./fighter.js";

export default function Character() {
  const [player, setPlayer] = useState(<Fighter />);

  return (
    <div>
      <h1>Character</h1>
      <button
        type="button"
        onClick={() => setPlayer("wizard")}
      >wizard</button>
      <button
        type="button"
        onClick={() => setPlayer("fighter")}
      >fighter</button>
      {player}
    </div>
  );
}
