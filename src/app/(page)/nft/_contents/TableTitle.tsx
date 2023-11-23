import React from "react";

const CollectionTableTitle = () => {
  return (
    <ul className="flex h-20 w-[1250px] border-b border-gray font-bold text-sm">
      <li className=" flex justify-center items-center   w-[3%]">#</li>
      <li className=" flex justify-center items-center   w-[15%]">
        Collection
      </li>
      <li className=" flex justify-center items-center   w-[12%]">Type</li>
      <li className=" flex justify-center items-center   w-[10%]">Volume</li>
      <li className=" flex justify-center items-center   w-[9%]">Change</li>
      <li className=" flex justify-center items-center   w-[8%]">MinPrice</li>
      <li className=" flex justify-center items-center   w-[8%]">MaxPrice</li>
      <li className=" flex justify-center items-center   w-[10%]">Sales</li>
      <li className=" flex justify-center items-center   w-[10%]">Transfers</li>
      <li className=" flex justify-center items-center   w-[10%]">Owners</li>
      <li className=" flex justify-center items-center   w-[10%]">
        TotalAssets
      </li>
    </ul>
  );
};

export default CollectionTableTitle;
