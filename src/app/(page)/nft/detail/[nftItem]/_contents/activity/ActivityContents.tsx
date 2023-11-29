"use client"
import React, { useState } from "react";
import Pagination from "@app/_components/pagination";
import usePagination from "@app/_hooks/usePagination";
import { INftAListProps } from "../../interface";
import ALTotalRecord from "./ALTotalRecord";
import AList from "./AList";

// interface INftAListProps {
//   txnHash: string;
//   age: string;
//   action: string;
//   price: string;
//   from: string;
//   to: string;
// }

interface NftActivityContentsProps{
  activityData: INftAListProps;
}

const NftActivityContents: React.FC<NftActivityContentsProps> = ({activityData}) => {
  // 페이지네이션
  const tempDataArr: INftAListProps[] = Array.from(
    { length: activityData.length },
    (ele, index) => {
      return {
        txnHash: activityData[index].txnHash,
        age: activityData[index].age,
        action: activityData[index].action,
        price: activityData[index].price,
        from: activityData[index].from,
        to: activityData[index].to,
      };
    },
  );
  const { maxPage, page, pageHandler, pageTxList } =
    usePagination<INftAListProps>(tempDataArr,10);
    // console.log("pagetxlist",pageTxList);

  return (
    <>
      <div>
        <ALTotalRecord totalCount={tempDataArr.length} />
        <AList pageTxList={pageTxList}  />
        <Pagination page={page} pageHandler={pageHandler} maxPage={maxPage} />
      </div>
    </>
  );
};

export default NftActivityContents;
