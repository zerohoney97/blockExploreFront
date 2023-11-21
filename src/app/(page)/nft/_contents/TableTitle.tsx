import React from "react";

const CollectionTableTitle = () => {
  return (
    <ul className="flex h-20 w-[1250px] border-b border-gray font-bold">
      <li className=" flex justify-center items-center   w-[3%]">#</li>
      <li className=" flex justify-center items-center   w-[15%]">
        collection
      </li>
      <li className=" flex justify-center items-center   w-[12%]">type</li>
      <li className=" flex justify-center items-center   w-[10%]">volume</li>
      <li className=" flex justify-center items-center   w-[9%]">change</li>
      <li className=" flex justify-center items-center   w-[8%]">minPrice</li>
      <li className=" flex justify-center items-center   w-[8%]">maxPrice</li>
      <li className=" flex justify-center items-center   w-[10%]">sales</li>
      <li className=" flex justify-center items-center   w-[10%]">transfers</li>
      <li className=" flex justify-center items-center   w-[10%]">owners</li>
      <li className=" flex justify-center items-center   w-[10%]">
        totalAssets
      </li>
    </ul>
  );
};

export default CollectionTableTitle;
