import "./styles.css";
import Kanjis from "./kanjis.js";
import { useState } from "react";

export default function App() {
  let kanjiGrades = [1,2,3,4,5];
  const [grade, setGrade] = useState(0);

  function changeGrade() {
    setGrade((m) => {
      if (m === 1) return <p>grade 1</p>;
      return <p>grade</p>;
    });
  }

  return (
    <div className="App">
    {kanjiGrades.map((grade, i) => (
      <button key={i} onClick={changeGrade()}>{grade}</button>
    ))}
    <ShowGrades grades={grade} />
    </div>
  );
}

function ShowGrades({grade}) {
  switch (grade) {
    case 1:
      return <Kanjis grade={grade} />;
    default:
      return <p>default</p>;
  }
}
