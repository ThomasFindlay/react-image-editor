import React from "react";
import "./App.css";
import ImageEditor from "./components/ImageEditor/ImageEditor.jsx";
import ReactTooltip from "react-tooltip";

function App() {
  return (
    <div className="App">
      <ImageEditor />
      <ReactTooltip />
    </div>
  );
}

export default App;
