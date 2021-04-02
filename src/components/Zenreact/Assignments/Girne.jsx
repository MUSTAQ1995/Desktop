import React, {useState} from 'react'

function Girne() {
    const [add,setarr]=useState([]);
const addall=(event)=>
{
	event.preventDefault();
	let myobj={
		name:event.target.name.value,
		number:event.target.num.value,
		status:event.target.status.value
	};
	let arr=add.concat(myobj);
	setarr(arr);
}

 const removeTodo=(indextodelete)=>
{
    let newarr=add.filter(function(val,index)
    {
        if(index==indextodelete)
            return  false;
        return true;
    })
    setarr(newarr)
}

 function remove()
 {
            setarr([])
        }

    return (
        <div>
            <form onSubmit={addall}>
                <input type="text" name="name" placeholder="enter your name"/><br/>
                <input type="number" name="num" placeholder="enter pricee"/>
                <br/>
                available:<input type="radio" id="d4" name="status"  value="available"/>
                unavilable:<input type="radio" id="d2" name="status" value="unavilable"/><br/>
                <button>show all products</button>
	        </form>
	        <button onClick={remove}>clear all</button>
                <div>
                  <table border="2">
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Number</th>
                          <th>status</th>
                          <th>Button</th>
                      </tr>
                  </thead>
                  <tbody>
                  {add && add.map((val, index)=> {
                      return(
                        <tr>
                            <td>{val.name}</td>
                            <td>{val.number}</td>
                            <td>{val.status}</td>
                            <td>
                            <button onClick={()=>{removeTodo(index)}}>delete</button>
                            </td>
                        </tr>
                      )
                  })}
                    
                  </tbody> 
                  </table>
                </div>
        </div>
    )
}

export default Girne
