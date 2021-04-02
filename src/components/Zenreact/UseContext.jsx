import React, { useContext } from 'react';
const NameContext = React.createContext("default Name");


function UseContext() {
    return (
        <NameContext.Provider value="why you are giving Nothing">
            <FacultyInfo/>
            <FacultyPersonalInfo/>
        </NameContext.Provider>
    )
}
 
function FacultyInfo(){
    const name = useContext(NameContext);
    return (
        <div>
            inside Info :{name}
        </div>
    )
}

function FacultyPersonalInfo() {
    const name = useContext(NameContext);
    return (
        <div>
            INside Personal Info: {name}
        </div>
    )
}
export default UseContext;
