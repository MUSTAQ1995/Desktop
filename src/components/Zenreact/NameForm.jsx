import React, { useState } from 'react'

function NameForm() {
    const [name, setName] = useState("name")
    return (
        <div>
            name: {name} <br/>
            <input type="text" value={name} onChange = {e => setName(e.target.value)} />
        </div>
    )
}

export default NameForm;



// function NameForm() {
//     const [name, setName] = useState("name")
//     const changeName = (e) => {
//         setName(e.target.value)
//     }
//     return (
//         <div>
//             name: {name} <br/>
//             <input type="text" value={name} onChange = {changeName} />
//             <button onClick={changeName}>Change Name</button>
//         </div>
//     )
// }