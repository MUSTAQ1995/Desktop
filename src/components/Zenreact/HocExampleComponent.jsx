import React from 'react'
import axios from "axios";

// function HocExampleComponent() {
//     const [userOb, setUserOb] = useState({});
//     useEffect(()=> {
//         axios.get('user.json')
//         .then((res) => {
//             setUserOb(res.data)
//         })
//     }, [])
//     return (
//         <div>
//             User Hobbies are {userOb.hobbies}
//         </div>
//     )
// }


//This one is used for the Hoc example by changing the above code.
function HocExampleComponent({userOb}) {
    return (
        <div>
            UserName: {userOb.username}<br/>
            Name: {userOb.name}<br/>
        </div>
    )
}

export default HocExampleComponent
