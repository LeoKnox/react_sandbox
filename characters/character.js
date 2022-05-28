import { useState } from "react";

export default function Character(props) {
  const [player, setPlayer] = useState("fighter");

  return (
    <>
      <h1>Character {player}</h1>
    </>
  );
}
