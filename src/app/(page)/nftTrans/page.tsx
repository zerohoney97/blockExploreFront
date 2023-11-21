"use client";
import React from "react";
import NftTxsListWrap from "./_content/ListWarp";
import { INftTransList } from "./interface";
import useHydration from "@app/_hooks/useHydration";
import NftTransTitle from "@app/_components/itemTitle";
const Page = () => {
  
  const tempDataArr: INftTransList[] = Array.from({ length: 105 }, (ele, index) => ({
    transcationInfo: "0x123fjafk231s",
    method: "Transfer",
    block: "123124124",
    from: "0x12312kj312kjb3jk",
    to: "0xqweqwnekjads2asdk2",
    type: "0x123fjafk231s",
    item: ""
  }));
  const isRendered = useHydration();
  return (
    <div>
      <NftTransTitle title="NFT Transfers" />
      {isRendered && <NftTxsListWrap nftTxList={tempDataArr} maxHeight="1200px" pageStack={25} />}
    </div>
  );
};

export default Page;
