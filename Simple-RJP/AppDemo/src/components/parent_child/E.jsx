import React from "react";

const eStyles = {
  width: "50px",
  boxShadow: "0 0 10px yellow",
  textAlign: "center",
  padding: "40px",
  margin: "8px auto",
};
function E({mData}) {
  return (
    <div style={eStyles}>
      <h5>E Component</h5>
      <br/>
      <p>Data:{mData}</p>
    </div>
  );
}

export default E;