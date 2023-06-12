import React from "react";
import Header from "../components/common/Header";
import Banner from "../components/shop/ShopBanner";
import ShopCollectionContainer from "../components/shop/ShopCollectionContainer";
import ProductImage from "../components/common/ProductImage";
import Sale from '../components/shop/Sale'
import { shopCollections } from "../data/home/imagesLink";
import SaleDisplay from "../components/shop/SaleDisplay";
import { productList3, productList4 } from "../data/home/products";
import Footer from "../components/common/Footer";

const shopcollections = {
  leftTop: {
    product: (
      <ProductImage
        title="Indo-western & Sherwani"
        bgImg={shopCollections.indo}
      />
    ),
  },
  leftBottom: {
    product: (
      <ProductImage title="Accessories" bgImg={shopCollections.accessories} />
    ),
  },
  leftSide: {
    product: <ProductImage title="Blazers" bgImg={shopCollections.blazer} />,
  },
  rightTop: {
    product: (
      <ProductImage title="Jodhpuri Suits" bgImg={shopCollections.jodhpuri} />
    ),
  },
  rightMiddle: {
    product: (
      <ProductImage title="Suits & Tuxedo " bgImg={shopCollections.suit} />
    ),
  },
  rightBottom: {
    product: (
      <ProductImage
        title="Ethnic Jackets & Kurta Pyjama"
        bgImg={shopCollections.ethnic}
      />
    ),
  },
};


const Shop=()=>{
    return (
      <div>
        <Header selected={"Shop"} />
        <Banner />
        <div className="mt-[250px]">
          <h2 className="not-italic font-bold text-[24px] sm:text-[30px]  lg:text-[36px] leading-[44px] text-black  text-center">
            Rent By Sale
          </h2>
          <h4 className="not-italic font-light text-[16px] sm:text-[20px] lg:text-[26px] leading-[39px] text-center text-black my-[20px]">
            Do not settle for Ordinary
          </h4>
          <div className="h-[620px] sm:h-[720px] w-[90%] sm:w-[90%] mx-auto">
            <ShopCollectionContainer collections={shopcollections} />
          </div>
        </div>
        <div className="mt-[50px]">
          <h2 className="not-italic font-bold text-[24px] sm:text-[30px]  lg:text-[36px] leading-[44px] text-black  text-center mb-[20px]">
            Preloved Sale
          </h2>
          <Sale />
        </div>
        <div className="my-[50px]">
          <SaleDisplay
            productList={productList3}
            title="Rent By Occasion"
            isLink={true}
            imgSize={"h-[800px]"}
            imgSrc="assets/shop/sideBar.png"
          />
        </div>
        <div className="mt-[50px]">
          <h2 className="not-italic font-bold text-[24px] sm:text-[30px]  lg:text-[36px] leading-[44px] text-black  text-center">
            New Collection
          </h2>
          <h4 className="not-italic font-light text-[16px] sm:text-[20px] lg:text-[26px] leading-[39px] text-center text-black my-[20px]">
            Do not settle for Ordinary
          </h4>
          <div className="h-[620px] sm:h-[720px] w-[90%] sm:w-[90%] mx-auto">
            <ShopCollectionContainer collections={shopcollections} />
          </div>
        </div>
        <div className="my-[50px]">
          <SaleDisplay
            productList={productList4}
            title="Featured Shirt Collections"
            isLink={false}
            imgSize={"h-[400px]"}
            imgSrc="assets/shop/sideBar2.png"
          />
        </div>
        <div className="mt-[180px]">
          <Footer />
        </div>
      </div>
    );
}
export default Shop;