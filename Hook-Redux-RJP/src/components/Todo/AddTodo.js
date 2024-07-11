import React from "react";
import { useState } from "react";
import Todoiteam from './Todoiteam';

function Addtodo(props){
    const [state, setState] = useState("");
    const [todoIteams, setTodoIteams] = useState([]);

    const addTodoItem = ()=>{
        var newItem = {
            title:state,
            status:true,
        };
        //update the array->in react never update array or object we have to replace array and object
        setTodoIteams([...todoIteams,newItem]);

    };

    const handelToggle =(index) =>{
       var newArray= todoIteams.map((item,i)=>{
        return index ===i ? {...item, status: !item.status} : item;

        });
        setTodoIteams(newArray)

    };


    const deleteItem =(index)=>{
        var filterData = todoIteams.filter((item,i)=>{
            return index !=i;
        });
        setTodoIteams(filterData);


    };
    return (
    <div style={{marginTop:"100px"}}>
        <h2>Todo Example</h2>
        {/* bind data with the state using value{state}  ---e nothing but event*/}
        <input 
        value={state} type="text" placeholder="Enter some Text" 
        onChange={(e)=>{setState(e.target.value);

        }} 
        />  
        
        <button onClick={addTodoItem}>Add Item</button>
        <Todoiteam  todoiteam={todoIteams} deleteItem={deleteItem} handelToggle={handelToggle}/>
    </div>
    );
}

export default Addtodo;