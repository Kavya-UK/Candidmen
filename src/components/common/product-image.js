import React from 'react'

export default function ProductImage({ bgImg, title }) {
  return (
    <div className="h-full bg-slate-200 relative">
      <img
        src={require(`../../${bgImg}`)}
        alt="product-img"
        className="w-full h-full object-cover absolute"
      />
      <h2 className="absolute text-white text-[20px] left-[50%] bottom-0 -translate-x-[50%] -translate-y-[50%]">
        {title}
      </h2>
    </div>
  );
}
