import React from 'react'

function ShowWriters({Writers, DeleteAuthor}) {
    return (
        <div>
             {Writers.map(val => {
            return(
              <div>First Name:{val.first_name} 
              Last Name:{val.last_name}
              <button onClick={()=>{DeleteAuthor(val._id)}}>Just Delete</button>
              </div>
            )})}
        </div>
    )
}

export default ShowWriters
