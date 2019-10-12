import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import ImageGrid from "./ImageGrid";

function App() {
  return (
    <div className="App">
      <ImageGrid />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
