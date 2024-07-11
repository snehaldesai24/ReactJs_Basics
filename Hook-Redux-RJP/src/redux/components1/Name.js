import {useRef} from "react";
import {useDispatch} from "react-redux";  //add useDispatch hook

function Name(){
    let inputRef = useRef(null);
    let dispatch = useDispatch();  //whenever you call useDispatch() hook then its retun a dispatch fun and hold in one variable

    const getData =() =>{
      //create a action object

      var actionObj = {
        type: "NAME",  //first property should be type only 
        nameComp : inputRef.current.value,

      };
      dispatch(actionObj);   //call the reducer.whenever your app start that time first call the reducer fun
    };

    return(
        <div style={{padding:"50px"}}>
            <h1>Name Components</h1>
            <br />
            <input ref={inputRef} type="text" placeholder="Add some data" />
            <button onClick={getData}>Submit</button>
        </div>
    )
}

export default Name;