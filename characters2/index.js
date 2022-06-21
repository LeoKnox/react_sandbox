import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import List from "./List";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
    <h1>List of Character Classes</h1>
    <List />
  </div>
);
