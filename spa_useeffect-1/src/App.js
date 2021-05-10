import React from "react";
import "./styles.css";
import Comp1 from './Comp1'

function App() {
  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <img
        src="https://media.giphy.com/media/tSVnUxoWoHC/giphy.gif"
        alt="ron"
      />
      <Comp1/>
    </div>
  );
}

export default App;