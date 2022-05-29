import { useState } from "react";
import Fighter from "./fighter.js";
import Wizard from "./wizard.js";

export default function Character() {
  const [player, setPlayer] = useState(<Fighter />);
  const charStyle = {
    color: "blue"
  };

  return (
    <div>
      <h1>Character</h1>
      <button
        type="button"
        onClick={() => setPlayer(<Wizard />)}
      >wizard</button>
      <button
        type="button"
        onClick={() => setPlayer(<Fighter />)}
      >fighter</button>
      {player}
    </div>
  );
}
