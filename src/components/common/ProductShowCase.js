import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useWindowWidth from "../../hooks/useWindowWidth.js";
import ProductSummary from "./ProductSummary.js";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ReactComponent as CarouselIcons } from "../../assets/icons/carouselIcon2.svg";

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

const ProductShowCase = ({
  imageList,
}) => {
  const ref = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImage, setCurrentImage] = useState(imageList[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const { windowWidth } = useWindowWidth();
  // const isLessThanMdScreen = windowWidth <= 860;
  const noOfItemsToScroll = 1;

  const handleCarousel = (type) => {
    if (type === "next") {
      setCurrentImage(imageList[currentIndex + 1] || imageList[imageList.length-1]);
      if (currentIndex < imageList.length-1) setCurrentIndex(currentIndex + 1);
      if (currentSlide === imageList.length - noOfItemsToScroll) return;
      ref.current.goToSlide(currentSlide + noOfItemsToScroll);
      setCurrentSlide((s) => s + noOfItemsToScroll);
    } else {
      setCurrentImage(imageList[currentIndex - 1] || imageList[0]);
      if (imageList[currentIndex - 1] === undefined){
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
      if (currentSlide === 0) return;
      ref.current.goToSlide(currentSlide - noOfItemsToScroll);
      setCurrentSlide((s) => s - noOfItemsToScroll);
    }
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === imageList.length - noOfItemsToScroll;
  // const iconSize = isLessThanMdScreen ? 15 : 20;
  return (
    <div className={`flex flex-col`}>
      <div className="h-[400px] w-full relative flex justify-center">
        <img src={require(`../../${currentImage}`)} alt="imageList" />
      </div>
      <div className="w-full grid grid-cols-12 items-center px-[5px] sm:px-0 mx-auto">
        <button
          onClick={() => handleCarousel("previous")}
          className={`col-span-1  justify-self-end md:justify-self-start  flex items-center justify-center `}
        >
          <BsChevronLeft
            color={isFirstSlide ? "#130f2680" : "#130F26"}
            height={15}
            width={15}
          />
        </button>
        <div className={`col-span-10`}>
          <Carousel
            className=" space-x-[30px] xl:space-x-[48px]"
            ref={ref}
            arrows={false}
            renderButtonGroupOutside={true}
            responsive={responsive}
          >
            {imageList.map((imgSrc, idx) => (
              <div
                className={`${
                  currentIndex === idx
                    ? "border-2 border-solid border-shadeYellow "
                    : " "
                } h-[100px] w-[100px] mt-[20px] mx-[2px] flex justify-center`}
              >
                {/* <div className="h-full "> */}
                <img
                  className="absolute h-full w-full object-contain"
                  src={require(`../../${imgSrc}`)}
                  alt="show-case"
                />
                {/* </div> */}
              </div>
            ))}
          </Carousel>
        </div>
        <button
          onClick={() => handleCarousel("next")}
          className="col-span-1 justify-self-start md:justify-self-end flex items-center justify-center"
        >
          <BsChevronRight
            color={isLastSlide ? "#130f2680" : "#130F26"}
            height={15}
            width={15}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductShowCase;
