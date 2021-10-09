import axios from "../axios";
import React, { useState } from "react";

function Showchat({ className, Messages }) {

  const [input, setinput] = useState("");
  const addroom = () => {
    console.log("Test 1 input fetch");
    sendmess(input);
    setinput("");
  };
  const sendmess = (roomname) => {
    axios.post("/messages/add", {
      name: roomname,
      message: "demo",
      time: "1am",
      recieved: true,
    });
  };
  return (
    <div className={className}>
      showchat
      <h1>hello</h1>
      <input
      
        type="text"
        value={input}
        onChange={(event) => {
          setinput(event.target.value);
        }}
      />
      <button onClick={addroom}> create new chat</button>
      {Messages?.map((mess) => {
        const id = mess._id
        return (
          <div key={id} className="hell">
            <h4>{mess.name}</h4><span>{mess._id}</span>
            {/* <h4>{mess.message}</h4>
                         <h4>{mess.time}</h4>
                         <h4>{mess.recieved}</h4> */}
          </div>
        );
      })}
    </div>
  );
}

export default Showchat;
