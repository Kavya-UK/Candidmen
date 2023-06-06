import React from 'react'
import { ReactComponent as FiTrashIcon } from "../../assets/icons/fiTrash.svg";
import CustomButton from './customButton';
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

export default function AddressBar({
  addressTitle,
  addressLine1,
  addressLine2,
  city,
  state,
  zipCode,
  phoneNumber,
}) {
  return (
    <div className="border-l-2 border-darekBlue relative w-full p-[16px] rounded-[8px] ring-address hover:bg-lightGray">
      <span className="absolute right-[18px] text-deleteRed text-[24px]">
        <RiDeleteBinLine />
      </span>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <h4 className="text-[14px] lg:text-[16px] leading-[24px] text-black font-normal">
            {addressTitle}
          </h4>
          <div className="text-[14px] lg:text-[16px] leading-[24px] text-textGray font-normal">
            <p>{addressLine1}</p>
            <p>{addressLine2}</p>
            <p>
              <span>{city}, </span>
              <span>{state} - </span>
              <span>{zipCode} </span>
            </p>
            <p>Mob: {phoneNumber}</p>
          </div>
        </div>
        <div className="flex items-end">
          <CustomButton
            type="secondary"
            iconPosition="start"
            icon={<FiEdit2 />}
            customStyle="py-[8px]"
            fontSize="text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[20px]"
          >
            Edit Address
          </CustomButton>
        </div>
        <div></div>
      </div>
    </div>
  );
}
