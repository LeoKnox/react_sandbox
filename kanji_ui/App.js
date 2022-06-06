import "./styles.css";
import Kanjis from "./kanjis.js";
import { useState } from "react";

export default function App() {
  let kanjiGrades = [1,2,3,4,5];
  let [grade, setGrade] = useState(0);

  const selectGrade = () => {
    selectGrade(2, []);
  };

  return (
    <div className="App">
    {kanjiGrades.map((grade, i) => (
      <button key={i} onClick={selectGrade}>{grade}</button>
    ))}
    if (grade===0) {
      <p>done</p>
    } else {
      <p>else</p>
    }
    </div>
  );
}
