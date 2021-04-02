import React,{ useState, useEffect} from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";



function Product(props) {
     const [ product, setProducts ] = useState({name:"my name is Nanu", price: 2222});
    //  let paramOb = useParams();
    //  console.log(paramOb.id);
 
     useEffect(function(){
         console.log("fired for the first time");
         axios.get("singleproduct.json")
         .then(function(res){
             setProducts(res.data)
         })
     },[])

     useEffect(function(){
         console.log("logged when the product is changed")
     }, [product])
    return (
        <div>
            <h4>{product.name}</h4>
            <h4>{product.price}</h4>
        </div>
    )
}

export default Product
