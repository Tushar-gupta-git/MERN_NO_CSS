import React, { useState } from 'react'

function Addchat({className}) {
    const[room , setroom] = useState("")
    const addroom=()=>{
  
    }
    return (
        <div className={className}>
               addchat
            <input type="text" onChange={console.log("hello")} />
            <button onClick={addroom} > create new chat</button>


        </div>
    )
}

export default Addchat
