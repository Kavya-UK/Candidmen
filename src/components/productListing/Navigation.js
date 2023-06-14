import React from 'react'
import { CiHome } from "react-icons/ci";
import {BiChevronsRight} from 'react-icons/bi'

export default function Navigation({links}) {
  return (
    <div className="mt-[10px] mx-10 h-[50px] flex items-center">
      <span className="inline-block text-lightblueGray text-[24px]">
        <CiHome />
      </span>
      {links.map((link) => {
        return (
          <>
            <span className="inline-block pl-[10px] text-[24px] text-lightblueGray">
              <BiChevronsRight />
            </span>
            <span className="inline-block pl-[10px] not-italic font-normal text-base leading-6 text-black;">
              {link}
            </span>
          </>
        );
      })}
    </div>
  );
}
