import React, { Component } from 'react';
import axios from "axios";

class ClassEcommerce extends Component {
    constructor() {
        super();
        this.state = { products:[{name:"Tshirt", price:2000},{name:"JEans", price:4000}]};
    }
    componentDidMount(){
        axios.get("/searchresult.json")
        .then((res)=>{
            console.log(res.data);
            this.setState({products:res.data});
        })
        .catch((err)=>{
           console.log(err)
        })
    }
     getProducts=()=>{
        axios.get("/searchresult.json")
        .then((res)=>{
            console.log(res.data);
            this.setState({products:res.data});
        })
        .catch((err)=>{
           console.log(err)
        })
    } 
   

     addProducts=(e)=> {
        e.preventDefault();
        let newProducts = this.state.products.concat({ name: e.target.name.value, price:e.target.price.value});
        this.setState({products:newProducts});
        //clearing the input values
        e.target.name.value = "";
        e.target.price.value= "";
    }
     deleteProducts=(indexToDelete)=>{
        alert(indexToDelete)
    }
    
    render() {
        return (
            <div>
                 <form onSubmit= {this.addProducts}>
              <input type="text" name="name" placeholder="Enter products name" /><br/>
              <input type="number" name="price" placeholder="Enter the price" />
              <button>Add Product</button>
            </form>
            <div>
            {
                this.state.products.map((val, index)=>{
                    return 
                      <div>
                       <h3> name:{val.name}</h3> {""}
                       <h4>Price: {val.location}</h4>
                       <h4> Id: {val.id}</h4>
                       <h4>Available: {val.available}</h4>
                       <h4> Tech:{val.technologies}</h4>
                       <h4>Expe: {val.experience}</h4>
                       <button onClick={()=>{this.deleteProducts(index)}}>Delete</button>
                      </div>
                })
            }
            </div>
            </div>
        )
    }
}

export default ClassEcommerce;
