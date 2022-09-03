import { Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Routes>
        <Route path="hello" element={<h1>routie</h1>} />
      </Routes>
    </div>
  );
}
