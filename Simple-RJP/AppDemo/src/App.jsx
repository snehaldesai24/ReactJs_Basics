
import Counter from "./components/counter/Counter";
import ImageComp from "./components/imagetask/ImageComp";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import A from "./components/parent_child/A";
import A1 from "./components/contextapi/A1";
import Electronics from "./components/products/categories/electronic/Electronics";
import Jewelery from "./components/products/categories/jewelery/Jewelery";
import MensCloths from "./components/products/categories/menscloths/MensCloths";
import WomenCloths from "./components/products/categories/womencloths/WomenCloths";
import AllProducts from "./components/allproducts/AllProducts";
import UserNames from "./components/user-name/UserNames";

import { Route, Routes } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <div className="app">
      <Nav />
      
      

      
      <Routes>
        <Route path={"/"} element={<Home />} />

        <Route path={"/products"} element={<Products />}>
          <Route path={"electronics"} element={<Electronics />} />
          <Route path={"jewelery"} element={<Jewelery />} />
          <Route path={"menscloths"} element={<MensCloths />} />
          <Route path={"womencloths"} element={<WomenCloths />} />
        </Route>

        <Route path={"/allproducts"} element={<AllProducts />} />
        <Route path={"/counter"} element={<Counter />} />
        <Route path={"/imagecomp"} element={<ImageComp />} />
        <Route path={"/parentchild"} element={<A />} />
        <Route path={"/contextapi"} element={<A1 />} />
        <Route path={"/usernames"} element={<UserNames />} />
        
        
{/*while route :- its always display at the end position becu its compair the all routes           */}
        <Route path={"*"} element={<PageNotFound />} />  

      </Routes>

    </div>
  );
}

export default App;