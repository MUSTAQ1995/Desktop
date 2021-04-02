import React, { useState, useEffect } from 'react'

//storageKey is the key that we use to store in local storage, initialValue is the value that you want to put in hook in case there is no value stored, because in start there is no value stored.
function useLocalStorage(storageKey, initialValue) {
    //localValue is the value of localstorage, the function inside the useState actually returns the default value.
    //Note:if already the value is stored then we don't need to set default value.
    //insted we will set the value as value that we get from the localStorage.
    const [localValue, setLocalValue] = useState(()=> {
        let storedVal = window.localStorage.getItem(storageKey);
        if(storedVal){
            return JSON.parse(storedVal);
        } else {
            return initialValue
        }
    })
    //this hook will run when component loads first time to check if localstorage is available.
    useEffect(() => {
        if(window.localStorage == undefined)
        alert('localStorage not found') 
    })
    //this hook runs everytime the value of the localValue changes.eyery time the value changes
    //we save the new value in local storage.
    useEffect(()=>{
        window.localStorage.setItem(storageKey, JSON.stringify(localValue))
    }, [localValue])
    return (
       [localValue, setLocalValue]
    )
}

export default useLocalStorage
