import { useState } from "react";

function UserNames() {
  let [names, setNames] = useState(["Raj", "Rohan","soha","priys","ankit","pooja","Ram"]);
  return (
    <div style={{ padding: "50px" }}>
      <h2>User Names</h2>
      <br/>
      <ul style={{ textAlign:"left"}}>
        {names.map(function (name) {
          return <li>{name}</li>;
        })}
      </ul>
    </div>
  );
}

export default UserNames;