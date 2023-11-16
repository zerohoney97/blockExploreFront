"use client";
import ItemTableWrap from "@app/_components/itemTable";
import usePagination from "@app/_hooks/usePagination";
import React from "react";
import { INftTxDetailInventory } from "../../interface";
import NFTInventoryItem from "./InventoryItem";
const NFTInventory = () => {
  const tempNftData: INftTxDetailInventory[] = Array.from(
    { length: 40 },
    (ele, index) => {
      return {
        tokenId: index.toString(),
        owner: "오너는 신",
      };
    }
  );
  const { maxPage, page, pageHandler, pageTxList } = usePagination(tempNftData);
  return (
    <ItemTableWrap>
      <div className="w-full h-auto flex-wrap flex  justify-around">
         {pageTxList &&
        pageTxList.map((ele, index) => {
          return <NFTInventoryItem key={index} nftInvenData={ele} />;
        })}
      </div>
     
    </ItemTableWrap>
  );
};

export default NFTInventory;
