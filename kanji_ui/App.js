import "./styles.css";
import Kanjis from "./kanjis.js";
import { useState } from "react";

export default function App() {
  let kanjiGrades = [1,2,3,4,5];
  let [grade, setGrade] = useState(1);

  function selectGrade() {
    selectGrade(2);
  }

  return (
    <div className="App">
    {kanjiGrades.map((grade, i) => (
      <button key={i} onClick={selectGrade}>{grade}</button>
    ))}
    <Kanjis grade="1" />
    </div>
  );
}
