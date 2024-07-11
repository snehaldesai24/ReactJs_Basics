
import { Outlet } from "react-router-dom";
import Name from "./components1/Name";
import Details from "./components1/Details";
import City from "./components1/City";

function Redux() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px", color: "green" }}>
        Redux Component
      </h1>
      <div className="productsContainer">
        <div className="linksContainer">
        <div className='subContainer'>
      <Name/>
      <City/> 
      </div>
      <hr/>
      <Details/> 
          
        </div>
        <div className="componentsContainer">
          
          <Outlet />   {/* using this outlet comp we can hold your sub components*/ }
        </div>
      </div>
    </div>
  );
}

export default Redux;