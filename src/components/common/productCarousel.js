import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { ReactComponent as ArrowRight } from "../../assets/icons/ArrowRight.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/ArrowLeft.svg";
import useWindowWidth from "../../hooks/useWindowWidth.js";
import ProductSummary from "./product-summary";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 860 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 860, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};



const ProductCarousel = ({listItems}) => {
  const ref = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { windowWidth } = useWindowWidth();
  const isLessThanMdScreen = windowWidth <= 860;
  const noOfItemsToScroll = 1;

  const handleCarousel = (type) => {
    if (type === "next") {
      if (currentSlide === listItems.length - noOfItemsToScroll) return;
      ref.current.goToSlide(currentSlide + noOfItemsToScroll);
      setCurrentSlide((s) => s + noOfItemsToScroll);
    } else {
      if (currentSlide === 0) return;
      ref.current.goToSlide(currentSlide - noOfItemsToScroll);
      setCurrentSlide((s) => s - noOfItemsToScroll);
    }
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === listItems.length - noOfItemsToScroll;
  const iconSize = isLessThanMdScreen ? 30 : 40;
  return (
    <div className="mt-[30px] lg:mt-[82px] lg:w-[1000px] xl:w-[1216px] flex flex-col">
      <div className="w-full grid grid-cols-12 items-center px-[5px] sm:px-0">
        <button
          onClick={() => handleCarousel("previous")}
          className="col-span-1  justify-self-end md:justify-self-start  flex items-center justify-center rtl:rotate-180"
        >
          <ArrowLeft
            color={isFirstSlide ? "#C1C1C1" : "#130F26"}
            height={iconSize}
            width={iconSize}
          />
        </button>
        <div className="col-span-10">
          <Carousel
            className=" space-x-[30px] xl:space-x-[48px]"
            ref={ref}
            arrows={false}
            renderButtonGroupOutside={true}
            responsive={responsive}
          >
            {listItems.map((el, idx) => (
              <ProductSummary
                productImg={el.productImg}
                title={el.title}
                price={el.price}
                isRent={el.isRent}
                discount={el.discount}
                rentPrice={el.rentPrice}
              />
            ))}
          </Carousel>
        </div>
        <button
          onClick={() => handleCarousel("next")}
          className="col-span-1 justify-self-start md:justify-self-end flex items-center justify-center rtl:rotate-180"
        >
          <ArrowRight
            color={isLastSlide ? "#C1C1C1" : "#130F26"}
            height={iconSize}
            width={iconSize}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
