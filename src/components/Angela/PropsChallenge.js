import React from 'react';
import "./Styles.css";
import Avatar from "./Avatar";
import Details from "./Details";

function PropsChallenge(prrops) { 
    return (
        <div>
            <div className="card">
             <div className="top">
                 <p>{prrops.id}</p>
                 <h3 className="name">{prrops.name}</h3>
                 {/* <img className="circle-img"
                  src={prrops.img} /> */}
                <Avatar img={prrops.img}/>
             </div>
             <div className="bottom">
               <Details detailInfo={prrops.tel}/>
               <Details  detailInfo={prrops.email} />
             </div>
             
             
             {/* <div className="bottom">
               <p className="info">{prrops.tel}</p>
               <p className="info">{prrops.email}</p>
             </div> */}
            </div>
        </div>
    )
}

export default PropsChallenge
