import "./styles.css";
import Kanjis from "./kanjis.js";
import { useState } from "react";

export default function App() {
  let kanjiGrades = [1,2,3,4,5];
  const [grade, setGrade] = useState(0);

  function changeGrade(m) {
    switch(m) {
      case 1:
        return <p>true</p>;
      default:
        return <p>false</p>;
    }
  }

  return (
    <div className="App">
    {kanjiGrades.map((grade, i) => (
      <button key={i} onClick={changeGrade(1)}>{grade}</button>
    ))}
    <Kanjis grades={grade} />
    </div>
  );
}
