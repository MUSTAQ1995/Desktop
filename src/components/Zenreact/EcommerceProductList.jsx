import React from 'react'

function EcommerceProductList(props) {
    console.log("EcommerceProductList loaded again")
    return (
        <div>
              {
                props.products.map(function(val, index){
                    return 
                      <div>
                       <h3> name:{val.name}</h3> {""}
                       <h4>Price: {val.location}</h4>
                       <h4> Id: {val.id}</h4>
                       <h4>Available: {val.available}</h4>
                       <h4> Tech:{val.technologies}</h4>
                       <h4>Expe: {val.experience}</h4>
                       <button onClick={()=>{props.deleteProducts(index)}}>Delete</button>
                      </div>
                })
            }
        </div>
    )
}

const MemoEcommerceProductList = React.memo(EcommerceProductList)
export default MemoEcommerceProductList
