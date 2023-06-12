import React from 'react'

export default function ProductImage({ bgImg, title }) {
  return (
    <div className="h-full bg-slate-200 relative">
      <img
        src={require(`../../${bgImg}`)}
        alt="product-img"
        className="w-full h-full object-cover absolute"
      />
      <h2 className="w-[100%] text-center absolute text-white left-[50%] bottom-0 -translate-x-[50%] -translate-y-[50%] not-italic font-medium text-[16px]  sm:text-xl lg:text-2xl leading-[54px]">
        {title}
      </h2>
    </div>
  );
}
