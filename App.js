import "./styles.css";
import Map from "./map.js";

const data = { width: 5, length: 5 };

export default function App() {
  return (
    <div className="App">
      <h1>Design Dungeon</h1>
      <Map props={data} />
    </div>
  );
}
