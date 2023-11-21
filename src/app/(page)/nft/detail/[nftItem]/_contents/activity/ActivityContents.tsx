import React, { useState } from "react";

import Pagination from "@app/_components/pagination";
import usePagination from "@app/_hooks/usePagination";
import { INftAListProps } from "../../interface";
import ALTotalRecord from "./ALTotalRecord";
import AList from "./AList";

const NftActivityContents: React.FC<INftAListProps> = () => {

  // 페이지네이션
  const tempDataArr: INftAListProps[] = Array.from(
    { length: 26 },
    (ele, index) => {
      return {
        txnHash:
          "0xca433abccf1dcae6d49fedaf89af3fdbebdfb4039ebd429578e230a13daecae5",
        age: "49 mins ago",
        action: "Sale",
        price: "0.03 ETH ($58.33)",
        from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
        to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
      };
    },
  );
  const { maxPage, page, pageHandler, pageTxList } =
    usePagination<INftAListProps>(tempDataArr);

  return (
    <>
      <div className='px-5'>
        <ALTotalRecord totalCount={tempDataArr.length} />
        <AList pageTxList={pageTxList}  />
        <Pagination page={page} pageHandler={pageHandler} maxPage={maxPage} />
      </div>
    </>
  );
};

export default NftActivityContents;
