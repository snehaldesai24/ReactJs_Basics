import React from "react";
import E from "./E";
const dStyles = {
  width: "100px",
  boxShadow: "0 0 10px gray",
  textAlign: "center",
  padding: "60px",
  margin: "10px auto",
};
function D({newData}) {
  return (
    <div style={dStyles}>
      <h3>D Component</h3>
      <br/>
      
      <E mData={newData}/>
    </div>
  );
}

export default D;