import "./styles.css";
import Kanjis from "./kanjis.js";
import { useState, useCallback,setRender } from "react";

export default function App() {
  let kanjiGrades = [1,2,3,4,5];
  const [grade, setGrade] = useState(0);
  const onChange = useCallback(() => setGrade(5),[]);
  /*
  function changeGrade(m=1) {
    switch(m) {
      case 1:
        console.log(":"+m);
        return <p>true</p>;
      default:
        return <p>false</p>;
    }
  }*/

  return (
    <div className="App">
    {kanjiGrades.map((grade, i) => (
      <button key={i} onClick={onChange}>{grade}</button>
    ))}
    <Kanjis grades={grade} />
    </div>
  );
