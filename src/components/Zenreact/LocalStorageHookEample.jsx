import React from 'react'
import useLocalStorage from "./useLocalStorage";

function LocalStorageHookEample() {
    const [localValue, setLocalValue] = useLocalStorage('hooklocalstorage', 'hellotohooks');
    const storeValue = (e) => {
        e.preventDefault();
        setLocalValue(e.target.valuetostore.value);
    }
    return (
        <div>
            Local Stored value = {localValue} <br/>
            <form onSubmit={storeValue}>
             <input type="text" placeholder="Enter the value to store in localstorage" name="valuetostore" />
             <button>Store Value</button>
            </form>
        </div>
    )
}

export default LocalStorageHookEample
