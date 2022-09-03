import { Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Home from "./Home.js";
import Categories from "./Categories.js";
import Bar from "./nav.js";

export default function App() {
  return (
    <div className="App">
      <Bar />
      <Routes>
        <Route path="/" element={<Home subTitle="more info to come" />} />
        <Route path="categories" element={<Categories />} />
        <Route path="hello" element={<h1>routie</h1>} />
      </Routes>
    </div>
  );
}
