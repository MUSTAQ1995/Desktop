import React, { useState } from 'react'

function ComplexStatePractice() {
    const [ contact, setContact ] = useState({
        fName: "",
        lName: "",
        email: ""
    });
    function handlechange(e){
      const { name, value } = e.target;

      setContact((prevValue) => {
          if (name === "fName") {
            return {
                fName: value,
                lName: prevValue.lName,
                email: prevValue.email
            }
          } else if (name === "lName") {
            return {
                fName: prevValue.fName,
                lName: value,
                email: prevValue.email
            }
          } else if (name === "email") {
            return {
                fName: prevValue.fName,
                lName: prevValue.lName,
                email: value
            }
          }
      })

    }

    return (
        <div>
            <h1>hey {contact.fName} {contact.lName} </h1>
            <p>{contact.email}</p>
            <form>
                <input onChange = {handlechange} value={contact.fname} name="fName" placeholder="First Name" /><br/>
                <input onChange = {handlechange} value={contact.lName} name="lName" placeholder="Last Name" /><br/>
                <input onChange = {handlechange} value={contact.email} name="email" placeholder="Email" /><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ComplexStatePractice;
