import React, { useState } from 'react'

function TodoItem(props) {
    function handleClick(){
      
    }

    return (
        <div onClick={() => {
            props.onChecked(props.id);
        }}>
            <li>{props.text}</li>
        </div>
    )
}

export default TodoItem
