import "./styles.css";
import Kanjis from "./kanjis.js";

export default function App() {
  let kanjiGrades = [1,2,3,4,5];

  function selectGrade() {
    return (
      <Kanjis />
    )
  }

  return (
    <div className="App">
    {kanjiGrades.map((grade, i) => (
      <button key={i} onClick={selectGrade}>{grade}</button>
    ))}
    </div>
  );
}
