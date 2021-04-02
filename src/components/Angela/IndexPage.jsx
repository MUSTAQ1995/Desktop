import React from 'react';
import api from "./api";

function IndexPage() {
    // Create state variables

    const [responseData, setResponseData] = React.useState("");
    // fetch data
    const fetchData = (e) => { 
        e.preventDefault()
        api.getData()
        .then((response) => {
            setResponseData(response.data)
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            <h1>{responseData.title}</h1>
            <button onClick={(e) => fetchData(e)} type="button">
                Click ME for Data
            </button>
            {responseData.dates && responseData.dates.map(date => {
                return <p>{date}</p>
            })}
        </div>
    )
}

export default IndexPage
