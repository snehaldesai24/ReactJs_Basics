import {useState, useRef} from "react";

function Timer(){
    let [timer, setTimer]= useState(0);
    //var timerId;-----rerender the fun so loss the varaible so its not working so create another state
    //let [timerId, setTimerId] = useState();---Invalid approch
    //=> becu timerId value is not show in the screen if you are not showing any data which youare not showing on the screen such data you should not store inside the state. becuase if you update the timerId then your component will be re-render if you are not showing any data on the screen then re-rendering is not required. or else its effect on performance on your application.
    //re-rendering is if you want the update any value on the screen.
//using the useRef() hook we can implement=> useRef()=return the one object here one property whose name is current and whatever data is store inside the current that data will not be loose.
    
   let timerId = useRef();

    const startTimer = () =>{
    timerId.current= setInterval(()=>{
        setTimer((prevTimer)=>prevTimer+1)
       }, 1000)   //setInterval takes 2 arguments first is callback fun and second one is time in ms and when call setInterval then its return a id to us some random id. the id is useful for us to stop the fun/timer.

    };


    const stopTimer = () =>{
        clearInterval(timerId.current);

    };

    const resetTimer =()=>{
        setTimer(0);

    }

    return(
        <div 
        style={{width: "500px", margin:"100px auto", textAlign: "center", boxShadow:"0 0 10px black",padding: "50px"}}
        >
            <h2>Timer Value is : {timer} </h2>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default Timer;
