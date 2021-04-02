import React, { Component } from 'react'

class Crud extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: 'React Simple CRUD Application',
             act: 0,
             index: "",
             datas: []
        }
    }

    componentDidMount(){
        this.refs.name.focus()
    }

    fSubmit = (e) => {
        e.preventDefault();
        console.log("try");

        let datas = this.state.datas;
        let name = this.refs.name.value;
        let address = this.refs.address.value;

        let data = {
            name, address
        }

        datas.push(data);

        this.setState({
            datas: datas
        })
        this.refs.myForm.reset();
        this.refs.name.focus();

    }
    
    render() {
        let datas = this.state.datas;
        return (
            <div className="app">
                <h2>{this.state.title}</h2>
                <form>
                <input type="text" ref="name" placeholder="Your name" className="formField" />
                <input type="text" ref="address" placeholder="Your Address" className="formField" />
                <button onClic={this.fSubmit} className="myButton" > Submit </button>
                </form>
                <pre>
                 {datas.map((data, i) => 
                 <li key={i} className="myList">
                    {i+1}.{data.name}, {data.address}
                    <button onClick={(e) => this.fRemove(i)} className="myButton" >Remove </button>
                    <button onClick={()=> this.fEfir(i)} className="myButton" >Edit</button>
                 </li>)}
                </pre>
            </div>
        )
    }
}

export default Crud
