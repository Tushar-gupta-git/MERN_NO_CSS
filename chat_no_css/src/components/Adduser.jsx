import React, { useState } from 'react'
import axios from "../axios"
function Adduser({className}) {
    const[input , setinput] = useState("")
    const addroom=()=>{
        console.log("Test 1 input fetch")
        sendmess(input)
        setinput("")
    }
    const sendmess=(roomname)=>{
        axios.post("/messages/add" , {
            name:roomname,
            message:"demo",
            time:"1am",
            recieved :true
        }
           
        )
    }
   
    return (
        <div className={className}>
               addchat
            <input type="text" value={input} onChange={(event)=>{setinput(event.target.value)}} />
            <button onClick={addroom} > create new chat</button>


        </div>
    )
}

export default Adduser
