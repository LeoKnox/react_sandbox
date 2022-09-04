import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./Home.js";
import Categories from "./Categories.js";
import Category from "./Category.js";
import Bar from "./nav.js";

export default function App() {
  return (
    <div className="App">
      <Bar />
      <Routes>
        <Route path="/" element={<Home subTitle="more info to come" />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />} />
        </Route>
        <Route path="*" element={<h1>404 page not  found</h1>} />
      </Routes>
    </div>
  );
}
