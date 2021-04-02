import React, { useState } from 'react';
import EcommerceForm from ".EcommerceForm";
import EcommerceProductList from "./EcommerceProductList"
import axios from "axios";



function Ecommerce() {
    const [products, setProducts] = useState([{ name: "Tshirt", price: 2000}, {name: 'Jeans', price: 4000}]);
    axios.get("product.json")
    .then(function(res){
        console.log(res.data);
        setProducts(res.data);
    })
    function addProducts(e){
        e.preventDefault();
        const newProducts = products.concat({name:e.target.name.value, price:e.target.price.value});
        setProducts(newProducts);
        e.target.name.value = "";
        e.target.price.value = "";
    }
    return (
        <div>
            
        </div>
    )
}

export default Ecommerce
