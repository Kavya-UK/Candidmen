import React, { useState } from "react";
import Header from "../components/common/Header";
import Navigation from "../components/productListing/Navigation";
import Footer from "../components/common/Footer";
import HomeCarouselComponent from "../components/home/HomeCarouselComponent";
import { productList5,productList7,} from "../data/home/products";
import ProductDetails from "../components/common/ProductDetails";


export default function ProductDescription() {
  return (
    <div>
      <Header selected={"Collection"} />
      <Navigation links={["Our Collection", "Suits & Tuxedo"]} />
      <ProductDetails />
      <div className="mt-[50px]">
        <h2 className="not-italic font-normal text-4xl leading-[44px] text-[#1E1E1E] pl-[100px]">
          You may also like
        </h2>
        <HomeCarouselComponent productList={productList5} hideButton={true} />
      </div>
      <div className="mt-[50px]">
        <h2 className="not-italic font-normal text-4xl leading-[44px] text-[#1E1E1E] pl-[100px]">
          Trending
        </h2>
        <HomeCarouselComponent productList={productList7} hideButton={true} />
      </div>
      <div className="mt-[100px]">
        <Footer />
      </div>
    </div>
  );
}