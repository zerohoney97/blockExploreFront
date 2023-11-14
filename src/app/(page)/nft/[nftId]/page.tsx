"use client";

import React, { useState } from "react";
import ItemTitle from "@app/_components/itemTitle";
import { INftTxDetailProps } from "./interface";
import ItemTableWrap from "@app/_components/itemTable";
import OverViewInfo from "./_contents/OverViewInfo";
import MarketInfo from "./_contents/MarketInfo";
import OtherInfo from "./_contents/OtherInfo";
import TxListWrap from "@app/_components/transactionTable";
import { ItxList } from "@app/_components/transactionTable/ineterface";
import TabWrap from "@app/_components/tabComponent/TabWrap";
import TabButton from "@app/_components/tabComponent/Tab";
import NFTInfo from "./_contents/Info";
import NFTInventory from "./_contents/Inventory";

const NftTxDetail: React.FC<INftTxDetailProps> = ({ params }) => {
  const tempDataArr: ItxList[] = Array.from({ length: 105 }, (ele, index) => ({
    age: "asd",
    block: "123124124",
    from: "0x12312kj312kjb3jk",
    to: "0xqweqwnekjads2asdk2",
    method: "Transfer",
    txHash: "0x123fjafk231s",
    value: index.toString(),
  }));

  const [toggleLabelNum, setToggleLabelNum] = useState<string | null>(
    "Transfers"
  );

  const toggleHandler = (label: string) => {
    setToggleLabelNum(label);
  };

  const componentHandler = (label: string) => {
    if (label === "Transfers") {
      console.log("Transfers");
      return <TxListWrap txList={tempDataArr} />;
    } else if (label === "Info") {
      return <NFTInfo />;
    } else if (label === "Inventory") {
      return <NFTInventory />;
    } else {
      return <></>;
    }
  };
  return (
    <div className="bg-mainBackGroundColor ">
      <ItemTitle title={params.nftId} />
      <div className="w-20 h-8 m-6 border-2 border-white bg-white rounded-xl font-bold flex justify-center items-center text-sm">
        ERC-721
      </div>
      <ItemTableWrap>
        <OverViewInfo />
      </ItemTableWrap>
      <ItemTableWrap>
        <MarketInfo />
      </ItemTableWrap>
      <ItemTableWrap>
        <OtherInfo />
      </ItemTableWrap>
      <div className="flex overflow-x-auto flex-nowrap py-5">
        <TabButton
          label="Transfers"
          toggleLabelNum={toggleLabelNum}
          toggleHandler={toggleHandler}
        />
        <TabButton
          label="Holders"
          toggleLabelNum={toggleLabelNum}
          toggleHandler={toggleHandler}
        />
        <TabButton
          label="Inventory"
          toggleLabelNum={toggleLabelNum}
          toggleHandler={toggleHandler}
        />
        <TabButton
          label="Info"
          toggleLabelNum={toggleLabelNum}
          toggleHandler={toggleHandler}
        />
      </div>
      {componentHandler(toggleLabelNum as string)}
    </div>
  );
};

export default NftTxDetail;
