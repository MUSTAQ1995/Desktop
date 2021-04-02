import React, { useState } from 'react'

function EcommerceAssignment() {
    const [products, setProducts] = useState([])
    const [showProducts, setShowProducts] = useState([]);

    function addProducts(e){
        e.preventDefault();
        let newProducts = products.concat({ name:e.target.name.value, price:e.target.price.value, status:e.target.status.value })
        setProducts(newProducts);
        e.target.name.value = "";
        e.target.price.value = "";
        e.target.status.value = "";
    }

    function deleteProduct(indexToDelete) {
        let array = showProducts.filter((val, index) => {
              if(indexToDelete == index) {
                  return false
              } else {
              return true}
        })
        setShowProducts(array)
    };
    function clearAll(){
        setShowProducts([])
    }
    function showAll(){
        setShowProducts(products);
    }
    
    return (
        <div>
        <form onSubmit = {addProducts}>
            <input type="text" name="name" placeholder="Enter the Name"/><br/>
            <input type="number" name="price" placeholder="Enter the Price"/><br/>
            <input type="text" name="status" placeholder="Enter the Status"/>
            <button >Add </button>
        </form>
        <button onClick={clearAll} >Delete All</button>
        <button onClick={showAll} >Show All</button>
          <h1>List of Products</h1>  
          {
              showProducts.map(function(val, index){
                  return <div>Name: {val.name}, Price: { val.price} Status: {val.status} <button onClick={()=>{deleteProduct(index)}} >Delete</button> </div>
              })
          }
        </div>
    )
}

export default EcommerceAssignment
