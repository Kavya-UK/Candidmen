import React, { useState } from 'react'
import Header from '../components/common/Header';
import Navigation from '../components/productListing/Navigation';
import Filter from '../components/common/Filter';
import { productList5 } from "../data/home/products";
import ProductSummary from "../components/common/ProductSummary.js";
import Footer from '../components/common/Footer';
import BasicPagination from '../components/common/Pagination';

const filters = [
  {
    isOpen: false,
    title: "Category",
    lists: [
      {
        selected: false,
        title: "Shirt",
      },
      {
        selected: false,
        title: "T-Shirt",
      },
      {
        selected: false,
        title: "Top",
      },
    ],
  },
  {
    isOpen: false,
    title: "Price",
    lists: [
      {
        selected: false,
        title: "< $150",
      },
      {
        selected: false,
        title: "$150 - $250",
      },
      {
        selected: false,
        title: "$250+",
      },
    ],
  },
  {
    isOpen: false,
    title: "Brand",
    lists: [
      {
        selected: false,
        title: "Louis Philip",
      },
      {
        selected: false,
        title: "Peter England",
      },
      {
        selected: false,
        title: "Levis",
      },
    ],
  },
  {
    isOpen: true,
    title: "Size",
    lists: [
      {
        selected: true,
        title: "XXS",
      },
      {
        selected: false,
        title: "XS",
      },
      {
        selected: false,
        title: "S",
      },
      {
        selected: false,
        title: "M",
      },
      {
        selected: false,
        title: "L",
      },
    ],
  },
  {
    isOpen: false,
    title: "Color",
    lists: [
      {
        selected: true,
        title: "Blue",
      },
      {
        selected: false,
        title: "Red",
      },
      {
        selected: false,
        title: "Yellow",
      },
    ],
  },
  {
    isOpen: false,
    title: "Date",
    lists: [
      
    ],
  },
];
export default function ProductListing() {
    const [filterList, setFilterList] = useState([...filters]);

  return (
    <div>
      <Navigation links={["Suits & Tuxedo"]} />
      <div className="grid grid-cols-12 gap-2 mb-[180px]">
        <div className="col-span-2 h-[100vh]">
          <Filter filterList={filterList} setFilterList={setFilterList} />
        </div>
        <div className="col-span-10 mx-auto">
          <h2 className="font-normal text-4xl leading-[44px] text-black mb-[20px] font-Rufina_Regular">
            Suits & Tuxedo
          </h2>
          <div className="grid grid-cols-3 gap-10">
            {productList5.map((el, idx) => (
              <div className={`h-[500px] w-[250px]`}>
                <ProductSummary
                  productImg={el.productImg}
                  title={el.title}
                  price={el.price}
                  isRent={el.isRent}
                  rentPrice={el.rentPrice}
                  link={el.link}
                />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <BasicPagination />
          </div>
        </div>
      </div>
      
    </div>
  );
}
