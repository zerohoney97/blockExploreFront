import React, { useEffect } from "react";
import { Iitem } from "../interface";
import Link from "next/link";
import Image from "next/image";

const CollectionItem: React.FC<Iitem> = ({
  number,
  change,
  collection,
  maxPrice,
  minPrice,
  name,
  owners,
  sales,
  totalAssets,
  transfers,
  volume,
  type,
}) => {

  return (
    <ul className="flex w-[1250px] h-16 border-b border-gray text-sm dark:text-white">
      <li className="flex justify-center items-center   w-[3%]">{number}</li>
      <li className="flex justify-center items-center   w-[5%]">
        <img width={25} height={25} src={collection} alt="피카츄"/>
      </li>
      {/* 바로 밑에 li 태그 세로로 중앙 정렬 */}
      <Link
        className="h-16  w-[10%] "
        style={{
          lineHeight: "4rem",
        }}
        href={`/nft/${name}`}
      >
        <li className="truncate">{name}</li>
      </Link>

      <li className="flex justify-center items-center   w-[12%]">
        {" "}
        <span className=" border-2 border-gray p-1 rounded-lg text-xs">
          {type}
        </span>
      </li>
      <li className="flex justify-center items-center    w-[10%]"> {volume}</li>
      <li className="flex justify-center items-center     w-[9%]"> {change}</li>
      <li className="flex justify-center items-center    w-[8%]">
        {" "}
        {minPrice}
      </li>
      <li className="flex justify-center items-center    w-[8%]">{maxPrice}</li>
      <li className="flex justify-center items-center    w-[10%]"> {sales}</li>
      <li className="flex justify-center items-center    w-[10%]">
        {" "}
        {transfers}
      </li>
      <li className="flex justify-center items-center    w-[10%]"> {owners}</li>
      <li className="flex justify-center items-center    w-[10%]">
        {" "}
        {totalAssets}
      </li>
    </ul>
  );
};

export default CollectionItem;
