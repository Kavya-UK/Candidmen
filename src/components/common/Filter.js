import React from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import './Filter.css'
export default function Filter({ filterList, setFilterList }) {
    const openFilter = (item, index) => {
        const filterItems = [...filterList]
        filterItems[index].isOpen = !filterItems[index].isOpen;
      setFilterList([...filterItems]);
    };
    const setCheckbox = (item,index, listIndex) => {
      const filterItems = [...filterList];
      filterItems[index].lists[listIndex].selected = !filterItems[index].lists[listIndex].selected;
      setFilterList([...filterItems]);
    };
  return (
    <div className="bg-tintYellow flex flex-col  min-w-[200px] px-[20px] py-[30px] h-full border-l-[3px] border-shadeYellow ml-[20px]">
      <p className="not-italic font-normal text-2xl leading-9 text-black">
        Filter by
      </p>
      <div>
        {filterList.map((item, index) => {
          return (
            <>
              <div
                onClick={() => openFilter(item, index)}
                className="flex items-center not-italic font-normal text-xl leading-[30px] text-black pt-[15px] cursor-pointer"
              >
                <span
                  className={`${
                    item.isOpen ? "faded " : "undo-icon "
                  } inline-block pr-[10px] text-[24px] pt-[4px] absolute`}
                >
                  <BsPlus />
                </span>
                <span
                  className={`${
                    item.isOpen ? "undo-icon " : "faded "
                  } inline-block pr-[10px] text-[24px] pt-[4px] absolute`}
                >
                  <BsDash />
                </span>
                <span className="not-italic font-normal text-xl leading-[30px] text-black pl-[30px]">
                  {item.title}
                </span>
              </div>
              <div className={`${item.isOpen ? "mt-[10px]" : "mt-0"}`}>
                {item.lists.map((list, listIndex) => {
                  return (
                    <>
                      <div
                        className={` pl-[20px]  ${
                          item.isOpen ? "box" : "hide"
                        }`}
                      >
                        <span>
                          <input
                            onClick={() => setCheckbox(item, index, listIndex)}
                            className="accent-black mr-[15px]"
                            type="checkbox"
                            checked={list.selected}
                            id={list.title}
                          />
                        </span>
                        <label
                          for={list.title}
                          className="cursor-pointer not-italic font-medium text-[13px] leading-6 text-black"
                        >
                          {list.title}
                        </label>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
