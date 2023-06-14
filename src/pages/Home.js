import React from 'react'
import Header from '../components/common/Header'
import { collections } from "../data/home/imagesLink";
import ProductImage from "../components/common/ProductImage";
import HomeBannerComponent from "../components/home/HomeBannerComponent.js";
import CollectionComponent from '../components/home/CollectionComponent';
import DealComponent from "../components/home/DealComponent.js";
import { productList, productList2 } from "../data/home/products";
import HomeCarouselComponent from '../components/home/HomeCarouselComponent';
import ShowStopper from "../components/home/ShowStopper";
import FeaturedBrands from '../components/home/FeaturedBrands';
import RentalPolicy from '../components/home/RentalPolicy';
import CustomerFeedback from "../components/home/CustomerFeedback";
import { feedbackList } from '../data/home/customerFeedback';
import AboutUs from '../components/home/AboutUs';
import CustomerFeedbackCarousel from "../components/common/CustomerFeedbackCarousel";
import Footer from '../components/common/Footer';

const collection = {
  leftTop: {
    product: <ProductImage title="Suits & Tuxedo" bgImg={collections.tuxedo} />,
  },
  leftBottom: {
    product: <ProductImage title="Jodhpuri" bgImg={collections.jodhpuri} />,
  },
  centerTop: {
    product: <ProductImage title="Blazer" bgImg={collections.blazer} />,
  },
  centerBottom: {
    product: (
      <ProductImage title="Accessories" bgImg={collections.accessories} />
    ),
  },
  rightTop: {
    product: (
      <ProductImage title="Kurta Pyjama & Bandi " bgImg={collections.kurta} />
    ),
  },
  rightBottom: {
    product: (
      <ProductImage title="Sherwani & Indo" bgImg={collections.sherwani} />
    ),
  },
};
  
export default function Home() {
  return (
    <div>
      <Header selected={"Home"} />

      <HomeBannerComponent />
      <div className="mt-[120px]">
        <CollectionComponent
          title="Our Collection"
          subTitle="Do not settle for Ordinary"
          collection={collection}
        />
      </div>

      <div className="mt-[120px]">
        <DealComponent />
      </div>
      <div className="mt-[180px]">
        <CollectionComponent
          title="Trending Collections"
          subTitle="Do not settle for Ordinary"
          collection={collection}
        />
      </div>
      <div className="mt-[50px]">
        <HomeCarouselComponent
          title={"Shirts to Buy"}
          subTitle={"Do not settle for Ordinary"}
          productList={productList}
        />
      </div>
      <div className="mt-[50px]">
        <HomeCarouselComponent
          title={"Curated "}
          subTitle={"Do not settle for Ordinary"}
          productList={productList2}
        />
      </div>
      <div className="mt-[50px]">
        <ShowStopper />
      </div>
      <div className="mt-[50px]">
        <FeaturedBrands />
      </div>
      <div className="mt-[50px]">
        <RentalPolicy />
      </div>
      <div className="mt-[50px]">
        <h2 className=" not-italic font-bold text-4xl leading-[44px] text-black font-Rufina_Regular text-center">
          Our Happy Customers !
        </h2>

        <CustomerFeedbackCarousel feedbackList={feedbackList} />
      </div>
      <div className="mt-[150px]">
        <h2 className="not-italic font-normal text-4xl leading-[44px] text-black text-center font-Rufina_Regular">
          About Us
        </h2>
        <AboutUs />
      </div>
      <div className="mt-[80px]">
        <Footer />
      </div>
    </div>
  );
}
