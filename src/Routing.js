import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductListing from "./pages/ProductListing";
import ProductDescription from "./pages/ProductDescription";
import ShoppingCart from "./pages/ShoppingCart";


const Routing=()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/productlisting" element={<ProductListing />} />
        <Route
          exact
          path="/productdescription"
          element={<ProductDescription />}
        />
        <Route exact path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routing;