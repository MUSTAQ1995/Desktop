  import React, { Component } from "react";

  class CounterClass extends Component {
      constructor(props){
          super(props);
          this.state = {
              count: 0
          }
      }
      render(){
        return(
          <div>
            <h1>HEllO</h1>
            <h1>{this.state.count}</h1>
            <button onClick={()=> this.setState({count: this.state.count+1})} >Increase</button>
          </div>
        )
      }
  }

 export default CounterClass;
















// import React, { Component } from 'react'

// export class CounterClass extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count : 0
//         };
//     };
//     render() {
//         return (
//             <div>
//                 <h3>You have Clicked {this.state.count} times.</h3>
//                 <button onClick={() => {this.setState({ count: this.state.count + 1 })}} >Click Me.</button>
//                 <button onClick={() => this.setState({ count: this.state.count - 1})} >Decrease</button>
//                 <button onClick={() => this.setState({count: this.state.count + 5})} >Increasse By 5</button>
//             </div>
//         )
//     }
// }

// export default CounterClass
