import React, { useState } from 'react'

function ComplexState() {
const [fullName, setFullName] = useState({
   fName: "",
   lName: ""
});
    function handleChange(e){
    const { value, name } = e.target;

    //   if (inputName === "fName") {
    //       setFullName({ fname: newValue });
    //   } else if (inputName === "lName") {
    //       setFullName({ lname: newValue });
    //   }
         setFullName(prevValue => {
             if (name === "fName") {
                 return {
                     fName: value,
                     lName: prevValue.lName
                 }
             } else if ( name === "lName") {
                 return {
                     fName: prevValue.fName,
                     lName: value
                 }
             }
         })


    }

    return (
        <div>
            <h1>hello {fullName.fName}{" "}{fullName.lName}</h1>
            <form>
                <input 
                  name="fName" 
                  onChange={handleChange}  
                  placeholder="First Name" 
                  value={fullName.fName} 
                />
                <input 
                  name="lName" 
                  onChange={handleChange}  
                  placeholder="Last Name" 
                  value={fullName.lName} 
                />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default ComplexState
