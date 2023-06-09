import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductListing from "./pages/ProductListing";
import ProductDescription from "./pages/ProductDescription";
import ShoppingCart from "./pages/ShoppingCart";
import Delivery from "./pages/Delivery";


const Routing=()=>{
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/productlisting" element={<ProductListing />} />
      <Route path="/productdescription" element={<ProductDescription />} />
      <Route path="/shoppingcart" element={<ShoppingCart />} />
      <Route path="/delivery" element={<Delivery />} />
    </Routes>
  );
}
export default Routing;