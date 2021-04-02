import axios from 'axios';
import React, { useState } from 'react'

function Custom() {
    const [userOb, setuserOb] = useState({});
    useEffect(()=>{
        axios.get("user.json")
        .then((res) => {
            setuserOb(res.data)
        })
    }, [])
    return userOb
      
}

export default Custom
