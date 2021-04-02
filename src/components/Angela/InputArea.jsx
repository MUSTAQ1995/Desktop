import React, { useState } from 'react'

function InputArea(props) {
    const [inputText, setInputText] = useState("");

    function handleChange(e) {
        const newValue = e.target.value;
        setInputText(newValue);
        }

    return (
        <div>
           <div className="form">
              <input 
              onChange={handleChange}
              type="text" value={inputText} />
              <button onClick={ () => {
                  props.onAdd(inputText);
                  setInputText(" ")
                  }}>
                  <span>Add</span>
              </button>
           </div> 
        </div>
    )
}

export default InputArea
