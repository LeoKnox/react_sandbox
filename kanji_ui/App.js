import "./styles.css";

export default function App() {
  let kanjiGrades = [1,2,3,4,5];

  function selectGrade() {
    alert("grade")
  }

  return (
    <div className="App">
    {kanjiGrades.map((grade, i) => (
      <button id={i} onClick={selectGrade}>{grade}</button>
    ))}
    </div>
  );
}
