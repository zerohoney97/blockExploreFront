import ItemTableWrap from "@app/_components/itemTable";
import React from "react";

const AddressOverView = () => {
  return (
    <ItemTableWrap>
      <div className="w-full h-auto flex flex-col border-b border-gray pb-5 ">
        <div className="flex flex-col">
          <div className="lg:flex lg:items-center">
            {" "}
            <div className="font-bold p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
              Transaction Hash:
            </div>
            <div className="p-1 h-auto text-sm   w-80 sm:break-words lg:ml-8 md:break-words ">
              0xdc1b18f4fba9b80868268645a2c449e5f7e556c4d2b0335204d12c4496720738
            </div>
          </div>
          <div className="lg:flex lg:items-center">
            <div className="font-bold p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
              Status:{" "}
            </div>
            <div className="text-xs px-1 py-1   flex justify-center items-center rounded-lg border-2 border-green-600 bg-green-200 text-green-600 sm:w-16 md:w-16 lg:ml-8  lg:h-7">
              Success
            </div>{" "}
          </div>

          <div className="lg:flex lg:items-center">
            <div className="font-bold p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
              Time Stamp
            </div>
            <div className="flex flex-col ml-8">
              <div className="flex">
                <span className="text-sm">
                  7 mins ago (Nov-15-2023 06:43:59 AM +UTC)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ItemTableWrap>
  );
};

export default AddressOverView;
