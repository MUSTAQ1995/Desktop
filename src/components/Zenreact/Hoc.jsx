import axios from 'axios';
import React, { useEffect, useSatate } from 'react'

const Hoc = (InputComponent) => {
    const Abc = (props) => {
        const [userOb, setUserOb] = useState({});
        useEffect(() =>{
            axios.get ('user.json')
            .then((res) => {
                setUserOb(res.data)
            })
        }, []);
        return <InputComponent userOb = {userOb} {...props} />
    }
    return Abc;
}

export default  Hoc;
