import React from 'react';
import axios from "axios";

export default function HocImplementation({userOb}) {
    return (
        <div>
            user hobbies are {userOb.hobbies} <br/>
        </div>
    )
}
const modifiedComponentWithProps = Hoc(HocImplementation);
export default modifiedComponentWithProps;
