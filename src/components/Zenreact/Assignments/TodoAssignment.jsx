import React, { useState } from 'react'

function TodoAssignment() {
    const [products, setProducts] = useState([])
    
    function addProducts(e){
        e.preventDefault();
        let newProducts = products.concat({ name:e.target.name.value,  status:e.target.status.value })
        setProducts(newProducts);
        e.target.name.value = "";
        e.target.status.value = "";
    }

    function deleteProduct(indexToDelete) {
        let array =products.filter(( val, index) => {
         if(indexToDelete == index) {
             return false
         } else return true
        })
        setProducts(array)
    }
    function clearall(){
        setProducts([])
    }
    return (
        <div>
        <h3>Todo form</h3>
        <form onSubmit = {addProducts}>
            <input type="text" name="name" placeholder="Enter the Name"/><br/>
            <input type="text" name="status" placeholder="Enter the Status"/>
            <button >Add </button>
        </form>
        <button onClick={clearall} >Clear All</button>
          <h1>Todos:</h1>  
          {
              products.map(function(val, index){
                  return <div>Name: {val.name}, Status: {val.status} <button onClick={()=>{deleteProduct(index)}} >Delete</button> </div>
              })
          }
        </div>
    )
}

export default TodoAssignment
