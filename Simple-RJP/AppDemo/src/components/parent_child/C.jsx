import React from "react";
import D from "./D";
const cStyles = {
  width: "200px",
  boxShadow: "0 0 10px blue",
  textAlign: "center",
  padding: "50px",
  margin: "20px auto",
};
function C({data}) {
  return (
    <div style={cStyles}>
      <h3>C Component</h3>
      <br/>
      
      <D newData={data}/>
    </div>
  );
}

export default C;