import React from "react";

function Todoiteam({todoiteam, deleteItem, handelToggle}){
    return(
        <div>
            {todoiteam.map((iteam,index)=> {
                return <div 
                style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                    }}>
                    <h4>{iteam.title}</h4>&nbsp;&nbsp;
                    <h5 style={{color:"red"}}>{iteam.status ? "completed": "Not completed"}</h5>&nbsp;&nbsp;
                    <button onClick={()=>{handelToggle(index)}}>Toggle</button>&nbsp;&nbsp;
                    <button onClick={()=>{deleteItem(index)}}>Delete</button>
                </div>

        })}
        </div>
    );
}

export default Todoiteam;