import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useWindowWidth from "../../hooks/useWindowWidth.js";
import ProductSummary from "./product-summary";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 2000, min: 1440 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1440, min: 860 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 860, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
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
  const iconSize = isLessThanMdScreen ? 15 : 20;
  return (
    <div className="mt-[20px] lg:mt-[30px]  flex flex-col">
      <div className="w-full grid grid-cols-12 items-center px-[5px] sm:px-0 mx-auto">
        <button
          onClick={() => handleCarousel("previous")}
          className="col-start-2 col-span-1  justify-self-end md:justify-self-start  flex items-center justify-center rtl:rotate-180"
        >
          <BsChevronLeft
            color={isFirstSlide ? "#130f2680" : "#130F26"}
            height={iconSize}
            width={iconSize}
          />
        </button>
        <div className="col-span-8">
          <Carousel
            className=" space-x-[30px] xl:space-x-[48px]"
            ref={ref}
            arrows={false}
            renderButtonGroupOutside={true}
            responsive={responsive}
          >
            {listItems.map((el, idx) => (
              <div className="h-[450px] w-[300px]">
                <ProductSummary
                  productImg={el.productImg}
                  title={el.title}
                  price={el.price}
                  isRent={el.isRent}
                  discount={el.discount}
                  rentPrice={el.rentPrice}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <button
          onClick={() => handleCarousel("next")}
          className="col-span-1 justify-self-start md:justify-self-end flex items-center justify-center rtl:rotate-180"
        >
          <BsChevronRight
            color={isLastSlide ? "#130f2680" : "#130F26"}
            height={iconSize}
            width={iconSize}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
