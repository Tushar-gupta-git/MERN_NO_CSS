import React from 'react'

function Showchat({className , Messages}) {
    return (
        <div className={className}>
             showchat
             <h1>hello</h1>
             {Messages.map((mess)=>{
                 const key = mess.id
                 console.log()

                 return(
                     <div className="hell">
                         <h4>{mess.name}</h4>
                         {/* <h4>{mess.message}</h4>
                         <h4>{mess.time}</h4>
                         <h4>{mess.recieved}</h4> */}
                     </div>
                 )
             })}
        </div>
    )
}

export default Showchat
