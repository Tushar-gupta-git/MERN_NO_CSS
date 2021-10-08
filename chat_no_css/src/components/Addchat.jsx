import React, { useState } from 'react'

function Addchat({className}) {
    const[room , setroom] = useState("")
    const addroom=()=>{
        console.log(room)
        setroom("")
    }
    return (
        <div className={className}>
               addchat
            <input type="text" value={room} onChange={(event)=>{setroom(event.target.value)}} />
            <button onClick={addroom} > create new chat</button>


        </div>
    )
}

export default Addchat
