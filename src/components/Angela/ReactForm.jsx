import React, { useState } from 'react'

function ReactForm() {
const [name, setName] = useState("");
const [newName, setNewName] = useState("");

function handleChange(event) {
    setName(event.target.value)
}
function submitName(event){
setNewName(name)
event.preventDefault();
}

    return (
        <div>
            <form onSubmit={submitName}>
            <h1>Hello {newName}</h1>
            <input 
            onChange={handleChange}
            type="text" placeholder="Enter your Name"
             value={name}
            />
            <button type="submit"
            >Submit</button>
            </form>           
        </div>
    )
}

export default ReactForm
