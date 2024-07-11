import axios from "axios";
import "./AllProducts.css";
import Card from "./card/Card";
import {useState} from "react";

function AllProducts(){
    let [allproducts, setAllProducts] = useState([]);

    const getProducts = ()=>{
      var promiseObject =  axios.get("https://fakestoreapi.com/products");
      promiseObject.then((res)=>{
        console.log("then");
        console.log(res.data);
        setAllProducts(res.data);  //[{},{}----{}=>20 products]
      }).catch((error)=>{
        console.log("error");
        console.log(error);
      })

    };

    return(
        <div style={{padding: "50px"}}>
            <h2 style={{marginBottom: "20px"}}>All Products</h2>
            <p style={{marginBottom: "20px"}}>A product can be classified as tangible or intangible. A tangible product is an actual physical object that can be perceived by touch such as a building, vehicle, gadget, or clothing. An intangible product is a product that can only be perceived indirectly such as an insurance policy. These services can be broadly classified under intangible products, which can be durable or nondurable.</p>
            <button onClick={getProducts}>Get products</button>

            <div className="allproductsData">
              {
                allproducts.map(function(element, index){
                    return <Card image={element.image} title={element.title} price={element.price}/>
                })
              }
            </div>
        </div>
    )
}

export default AllProducts;