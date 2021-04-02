import React from 'react'

function EcommerceForm(props) {
    return (
        <div>
             <form onSubmit= {props.nothing}>
              <input type="text" name="name" placeholder="Enter products name" /><br/>
              <input type="number" name="price" placeholder="Enter the price" />
              <button>Add Product</button>
            </form>
        </div>
    )
}

export default EcommerceForm
