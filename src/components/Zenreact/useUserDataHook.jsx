import React from 'react';
import Custom from "./Custom"

function useUserDataHook() {
    const userOb = Custom()
    return (
        <div>
            Hobbies:{userOb.Hobbies}<br/>
        </div>
    )
}

export default useUserDataHook
