import React from "react";
import { useRef } from "react";

function RefDom(){

    let h2Ref = useRef(null);   //for h2

    let buttonRef = useRef(null);   //for button
//Dom manipulation using useRef() hook
    const changeContent = ()=>{
        h2Ref.current.innerText = "DOM Manipulation Using Ref Concept";
        h2Ref.current.style.color = "green";

        buttonRef.current.style.color= "red";
        buttonRef.current.style.padding = "10px 20px";
    }

    return(
        <div style={{padding:"50px"}}>
            <h2 ref={h2Ref}>DOM Manipulation using useRef() hook </h2>
            <br/>
            <button ref={buttonRef} onClick={changeContent}>Change Content & Style</button>
            <br/>
        </div>

    );
}

export default RefDom;