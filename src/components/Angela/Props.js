import React from 'react';
import "./Styles.css";

function Card(props) {
    console.log(props)
    return(
        <div className="my__styles">
            <h2>{props.thevalueofprop}</h2>
            <img src={props.imgage} />
            <h5>{props.Email}</h5>
            <h4>{props.Phone}</h4>

            <h4>{props.transfer}</h4>
            <p>{props.number}</p>
            <h6>{props.nothing}</h6>
            <h4>{props.dontdoanything}</h4>
        </div>
          
    )
}

function Props() {
    return (
        <div>
            <h1>My Contacts</h1>
             <Card  
               thevalueofprop="Mustaq"
               imgage="https://www.costacruises.com/content/dam/costa/inventory-assets/ports/DOH/DOH-2.jpg.image.750.563.low.jpg"
               Email="fake@email.com"
               Phone="Phone Number "
            /> 
               <Card 
             thevalueofprop="Manju"
             imgage="https://img.nordangliaeducation.com/resources/asia/_filecache/a74/fa5/224294-cropped-w1920-h488-of-1-FFFFFF-doha.jpg"
             Email="justaEmail@mail.com"
             Phone="why do you need a phone number"

            />
            <Card 
              transfer="What you wana transfer"
              number="12315646843"
              nothing="nothing means nothing"
              dontdoanything="ya sure bro i will not do anything"
            />
         
        </div>

        
    )
}

export default Props;
