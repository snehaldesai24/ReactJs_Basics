import {useState} from "react";
import "./Ref.css";

function Ref() {
    let [state, setState] = useState(null); 
    let [data, setData] = useState(null);
    let value;  //by default undefined //whenever the fun is recalled then the value of variable will be destoryed and recreate new variable it will be undefined so you will lost your privious value.

    const updateState =() =>{
        setState(100);
    }

    const updateValue = ()=>{
        value = 500;
    }

    const updateData = ()=>{
        setData(1000);
    }

    const displayValue =()=>{
        console.log("state", state);
        console.log("Data", data);
        console.log("Variable", value);
    }

    return(
        <div className="container"> 
            <h2>Ref Component : {state}</h2>

            <button onClick={updateState}>Update State</button>

            <button onClick={updateData}>Update Data</button>


            <button onClick={updateValue}>Update Value</button>

            
            <button onClick={displayValue}>Display</button>
           
        </div>
    );
}

export default Ref;