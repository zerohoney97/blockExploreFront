"use client";
import React, { use, useEffect } from "react";
import { Iitem, IitemProps } from "../interface";
import CollectionItem from "./Item";
import CollectionTableTitle from "./TableTitle";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "@app/_components/pagination";

const CollectionItemWrap: React.FC<IitemProps> = ({ pageTxList }) => {

  return (
    <>
      <CollectionTableTitle />
      {pageTxList &&
        (pageTxList as Iitem[]).map(
          (
            {
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
            },
            index
          ) => (
            <CollectionItem
              key={index}
              number={number}
              change={change}
              collection={collection}
              maxPrice={maxPrice}
              minPrice={minPrice}
              name={name}
              owners={owners}
              sales={sales}
              totalAssets={totalAssets}
              transfers={transfers}
              volume={volume}
              type={type}
            />
          )
        )}
    </>
  );
};

export default CollectionItemWrap;
