
import { useState } from "react";
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="header">Tushar Chat app</div>
      <div className="container">
        <div className="c1">
          <div className="addchat half">
            addchat
            <input type="text" />
            <button > create new chat</button>


          </div>
          <div className="showrecip half">
            showrecip

          </div>
        </div>
        <div className="c2">
        <div className="showdet half">
          showdet
        </div>
        <div className="showchat half">
          showchat
        </div>
        </div>

        
      </div>
    </div>
  );
}

export default App;
