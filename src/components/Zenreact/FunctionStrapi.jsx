import React, { useState, useEffect } from 'react';
import axios from "axios";

function FunctionStrapi() {
    const [recruitments, setRecruitments] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:1337/recruitments")
        .then( res => {
            console.log(res)
            setRecruitments(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            {
              recruitments.map(val => {
                  return (
                      <div>
                          <h4>Name: {val.name} </h4>
                          <h4>Location: {val.location} </h4>
                          <h4>Availablity {val.availablity} </h4>
                          <h4>Technologies: {val.Technologies} </h4>
                          <h4>Education: {val.education} </h4>
                          <h4>Colege: {val.college} </h4>
                          <p>Description: {val.description} </p>
                      </div>
                  )
              })   
            }
        </div>
    )
}

export default FunctionStrapi
