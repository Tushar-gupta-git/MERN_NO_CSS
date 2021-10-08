import { useEffect, useState } from "react";
import "./App.css";
import Addchat from "./components/Addchat";
import Showchat from "./components/Showchat";
import Showdet from "./components/Showdet";
import Showrecip from "./components/Showrecip";
import Pusher from "pusher-js"
import axios from "./axios"

function App() {
  const[messages , setmessages]= useState([])
  useEffect(()=>{
    const pusher = new Pusher('a34e9696eda41b89e1aa', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data)=> {
      // alert(JSON.stringify(data));
      setmessages([...messages , data])
    });
    return()=>{
      channel.unsubscribe()
      channel.unbind_all()
    }
  },[messages])
  useEffect(()=>{
    axios.get("/messages/show").then(
      response=>{
        // console.log(response.data)
        setmessages(response.data)
      }
    )
  },[])
  console.log(messages)
  return (
    <div className="App">
      <div className="header">Tushar Chat app</div>
      <div className="container">
        <div className="c1">
          <Addchat className="all"/>
          <Showrecip className="all"/>
        </div>
        <div className="c1">
          <Showdet className="all"/>
          <Showchat className="all" Messages={messages} />
        </div>
      </div>
    </div>
  );
}

export default App;
