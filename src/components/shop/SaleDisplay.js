import React from 'react'
import SaleLinks from './SaleLinks';
import SideBarImage from '../common/SideBarImage';
import SaleProductSummary from './SaleProducts';

export default function SaleDisplay({ productList, title, isLink, imgSize, imgSrc }) {
  return (
    <div>
      <div className="grid grid-cols-10 gap-2 px-[50px]">
        <div
          className={`${isLink ? "col-span-3 " : "col-span-10 "}  py-[20px]`}
        >
          <h3 className="not-italic font-bold text-4xl leading-[44px] text-black font-Rufina_Regular">
            {title}
          </h3>
        </div>
        {isLink && (
          <div className="col-span-7 py-[20px] pl-[50px]">
            <SaleLinks />
          </div>
        )}
        <div className={`col-span-3  ${imgSize}`}>
          <SideBarImage imgSrc={imgSrc} />
        </div>
        <div className="col-span-7">
          <div className="grid grid-cols-3 gap-4">
            {productList.map((el) => {
              return (
                <div className="h-[400px]">
                  <SaleProductSummary
                    productImg={el.productImg}
                    title={el.title}
                    price={el.price}
                    isRent={el.isRent}
                    discount={el.discount}
                    rentPrice={el.rentPrice}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
