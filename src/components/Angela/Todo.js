import React, { useState } from 'react';
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function Todo() {

const [items, setItems] = useState([]);


function addItem(inputText){
    setItems( (prevItems) => {
return [...prevItems, inputText]
    });
}
function deleteItem(id){
  setItems((prevItems)=> {
    return prevItems.filter(
        (itm, index ) => {
         return index !== id;
        }
    )
  })
}
    return (
        <div className="container">
           <div className="heading">
               <h1>To-Do List</h1>
           </div>
           <InputArea 
            onAdd={addItem}
           />
           
           <div>
               <ul>
                {items.map((todoItem, index)  => 
                    <TodoItem text={todoItem} key={index} id={index}
                    onChecked={deleteItem}
                    />
                    )}
               </ul>
           </div>
        </div>
    )
}

export default Todo
