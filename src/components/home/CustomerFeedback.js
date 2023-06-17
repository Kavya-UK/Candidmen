import React from 'react'
import { ReactComponent as Quotes } from "../../assets/icons/quotes.svg";


export default function CustomerFeedback({
  title,
  name,
  description,
  image
}) {
  return (
    <div className="  ">
      <div className="grid grid-cols-3  mt-[40px] min-h-[350px]">
        <div className="col-span-1 flex">
          <div className=" bg-shadeYellow rounded-[50%] h-[160px] w-[160px] lg:h-[180px] lg:w-[180px] xl:h-[250px] xl:w-[250px] transition-all duration-[0.5s] ease-[ease]">
            <span className="relative top-[20px] lg:top-[30px] left-[25px] lg:left-[45px] transition-all duration-[0.5s] ease-[ease]">
              <Quotes className="text-[10px]" />
            </span>
            <div className="relative left-[40px] lg:left-[50px] xl:left-[70px] top-[10px] lg:top-[20px] transition-all duration-[0.5s] ease-[ease]">
              <img
                className="w-[80%] xl:w-full transition-all duration-[0.5s] ease-[ease]"
                src={require(`../../${image}`)}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-start items-center">
          <p className="not-italic font-normal text-[14px] lg:text-xl xl:text-2xl  text-[rgba(0,0,0,0.5)]  min-h-[120px] lg:min-h-[180px] max-w-[480px]">
            {description}
          </p>
          <p className="not-italic font-medium text-[18px] lg:text-3xl xl:text-4xl leading-[54px] text-shadeYellow xl:pt-[20px] relative -left-[40%] xl:-left-[25%]">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}
