import React, { useState, useCallback } from 'react'
import EcommerceForm from './EcommerceForm';
import EcommerceProductList from './EcommerceProductList';
import axios from "axios";
import Button from "@material-ui/core/Button";
import { SettingsBluetoothRounded } from '@material-ui/icons';


function Ecommerce() {
    console.log("parent component loaded");
    const [ products, setProducts ] = useState([{ name: "Tshirt1", price: 2000}, { name:"Jeans1", price: "2005"}]);
    const [title, setTitle] = useState("default title");
    const [heading, setHeading] = useState("default Heading")
    const changeTitle = (newTitle) =>{
        SettingsBluetoothRounded(newTitle)
    }
    function getProducts(){
        axios.get("searchresult.json")
        .then(function(res){
            console.log(res.data);
            setProducts(res.data);
        })
        .catch(function(err){
           console.log(err)
        })
    } 
   

    function addProducts(e) {
        e.preventDefault();
        let newProducts = products.concat({ name: e.target.name.value, price:e.target.price.value});
        setProducts(newProducts);
        //clearing the input values
        e.target.name.value = "";
        e.target.price.value= "";
    }
    // function deleteProducts(indexToDelete){
    //     alert(indexToDelete)
    // }

   const deleteProduct = useCallback((indexToDelete)=> {
       alert(indexToDelete)
   }, [])
    return (
        <div>
           <EcommerceForm nothing={addProducts}/>
            <h2>List of Products</h2>
            <input type="text" placeholder="title" onChange = {(e)=>{setTitle(e.target.value)}} />
            <input type="text" placeholder="heading" onChang={(e)=> {setHeading(e.target.value)}} />
          <EcommerceProductList products={products} deleteProduct={deleteProduct}/>
          <Button 
            onClick={getProducts} 
            variant="contained"
            color="primary"
          >Get Products</Button>
        </div>
    )
}

export default Ecommerce
