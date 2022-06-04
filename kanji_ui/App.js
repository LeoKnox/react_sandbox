import "./styles.css";

export default function App() {
  let kanjiGrades = [1,2,3,4,5];

  return (
    <div className="App">
    {kanjiGrades.map((grade, i) => (
      <p id={i}>{grade}</p>
    ))}
    </div>
  );
}
