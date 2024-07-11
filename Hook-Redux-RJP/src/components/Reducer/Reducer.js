import {useReducer} from "react";

//create fun inside the parameter we are goning to store one special object and the name of that object is action object.
const reducerFn = (action) => {

    return "Satara";  //return the data that updated inside the state
};  
function Reducer (){

    let [state, dispatch] = useReducer(reducerFn, 100);  // its returns one array and its contain 2 argu first reducerfun and second is initial data
 
    const modifyState = ()=>{
        dispatch({type:"Dummy"});

    }

    return(
        <div style={{width: "500px", margin:"100px auto", textAlign: "center", boxShadow:"0 0 10px blue",padding: "50px"}}>
            <h2>UseReducer() hook : {state}</h2>
            <button onClick={modifyState}>Update State</button>

        </div>
    )
}

export default Reducer;
