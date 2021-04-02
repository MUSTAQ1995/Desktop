import React, { useState, useEffect } from 'react'

function CleanUpExample({show}) {
   
    const [todosArray, setTodosArray] = useState([]);
    const [todo, setTodo] = useState("");

    useEffect(() => {
        let todos = localStorage.getItem('todosbyreact');
        if(todos!=undefined) {
            let todosParseDate = JSON.parse(todos);
            setTodosArray(todosParseDate)
        }
        const cleanupFunction = () => {
            alert("cleaning up localstorage");
            localStorage.removeItem("todosbyreact");
        }
        console.log("asssffgf")
        return cleanupFunction;
    }, []);
    const addTodo = () => {
        let newTodoArr = todosArray.concat(todo);
        console.log(newTodoArr);
        setTodosArray(newTodoArr);
        console.log(todo);
        console.log(todosArray);
        let jsonStringArr = JSON.stringify(todosArray);
        localStorage.setItem("todosbyreact", jsonStringArr)
    }
     if(show === false)
    return null;
    return (
        <div>
            <input type="text" value = {todo} onChange = {(e) => {setTodo(e.target.value)}} />
            <button onClick={addTodo}  >Add Todo</button>
            {todosArray.map((val) => {
                return <div>{val}</div>
            })}
        </div>
    )
}

export default CleanUpExample
