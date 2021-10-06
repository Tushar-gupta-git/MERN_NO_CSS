import { useState } from "react";
import "./App.css";
import Addchat from "./components/Addchat";
import Showchat from "./components/Showchat";
import Showdet from "./components/Showdet";
import Showrecip from "./components/Showrecip";

function App() {
  return (
    <div className="App">
      <div className="header">Tushar Chat app</div>
      <div className="container">
        <div className="c1">
          <Addchat className="half" />
          <Showrecip className="half" />
        </div>
        <div className="c2">
          <Showdet className="half" />
          <Showchat className="half" />
        </div>
      </div>
    </div>
  );
}

export default App;
