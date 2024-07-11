import React from "react";
import { useContext } from "react";
import myfirstContext from "./Context";

function E(){
    let contextdata = useContext(myfirstContext);
    return(
        <div>
            <h5 style={{padding:20, color:"green"}}>E Components</h5>
            <br/>
            <p>Data: <span style={{color:"red"}}>{contextdata}</span> </p>
        </div>
    )
}

export default E;