import React, { Component } from 'react'
import ClassBasedCounterForm from './ClassBasedCounterForm';

class ClassBasedCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             title:"Increase the data"
        };
        // this.increase = this.increase.bind(this);
        // this.decrease = this.decrease.bind(this);
        //rather then the above bind method we can use tha class arrow syntax.
        //change the both increae and decrease function to arrow functions
    }

    increase = () => {
        this.setState((prevState, props) => {
            return {
                count: prevState.count+1
            }
        })
    }
    decrease = () => {
        this.setState((prevState, props) => {
            return {
                count: prevState.count-1
            }
        })
    }
    
    render = () => {
        console.log(this.state)
        return (
            <div>
                Counter={this.state.count}<br/>
               <ClassBasedCounterForm  increase={this.increase} decrease={this.decrease}/>
                title = {this.state.title}
            </div>
        )
    }
}

export default ClassBasedCounter


// function sayHi(){
//     alert(this.name)
// }
// let Object = {name: 'avinash'};
// var sayBind = sayHi.bind(object)
// sayHiBind()