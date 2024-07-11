import React, { useState } from "react";
import B from "./B";
import myfirstContext from "./Context";

function A1(){
    const [state, setState] = useState("")
    return(
        <div>
            <h1>A1 Components</h1>
            <br/>
            <button style={{margin:10, padding:10, borderRadius:10, color:"blue"}} onClick={()=>{
                setState("Hello!!!");
                }}>Submit</button>
            <hr/>
            <myfirstContext.Provider value={state}>
            <B/>  
            </myfirstContext.Provider>    
        </div>
    );
}

export default A1;