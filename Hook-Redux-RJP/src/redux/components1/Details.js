import React from "react";
import {useSelector} from "react-redux";

function Details(){
let data = useSelector((storedata)=>{   //{name:"",city:"",}
    return storedata;

})

    return(
        <div style={{padding:"100px"}}>
            <h1>Details Components</h1>
            <br/>
            <p style={{color: "green", fontWeight: "bold"}} > Name: {data.name} </p>
            <p style={{color: "green", fontWeight: "bold"}} > City: {data.city} </p>
        </div>
    )
}

export default Details;