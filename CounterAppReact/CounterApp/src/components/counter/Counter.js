import './Counter.css';
import {useState} from "react";

function Counter() {

    var [state, setState] = useState(0);
    
    const increaseCount = ()=>{
       setState(state + 1);
    };

    function decreaseCount(){
        setState(state - 1);
    }
    return(
        <div className="counterapp">
            <h2>Count Value is : {state} </h2>
            <button onClick={increaseCount}>Increment</button> &nbsp; &nbsp;
            <button onClick={decreaseCount}>Decrement</button>
        </div>
    )

}

export default Counter;