import {useState} from "react";
import { CityActionCreator } from "../action/CityAction";
import { useDispatch } from "react-redux";

function City(){
    let [city, setCity] = useState("");
    let dispatch = useDispatch();

    const getCity =()=>{
    //   var cityAction =  CityActionCreator(city);
    //   dispatch(cityAction);

    dispatch(CityActionCreator(city));
    }
    return(
        <div style={{padding:"50px"}}>
            <h2>City Components</h2>
            <br />
            <select onChange={(event)=> {
                setCity(event.target.value);
                }}>
                <option> Select the City </option>
                <option>Hydrabad</option>
                <option>Pune</option>
                <option>Satara</option>
                <option>Kolhapur</option>
            </select>
            <button onClick={getCity}>Submit</button>
        </div>
    )
}

export default City;