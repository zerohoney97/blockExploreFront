"use client";
import TxListWrap from "@app/_components/transactionTable";
import { ItxList } from "@app/_components/transactionTable/interface";
import React, { useState } from "react";
import NFTInfo from "./Info";
import NFTInventory from "./Inventory";
import TabButton from "@app/_components/tabComponent/Tab";
import useHydration from "@app/_hooks/useHydration";

const NFTDetailMoreInfo = () => {
  const isRendered = useHydration();

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
      return <TxListWrap txList={tempDataArr} lastThName="Item" />;
    } else if (label === "Info") {
      return <NFTInfo />;
    } else if (label === "Inventory") {
      return <NFTInventory />;
    } else {
      return <></>;
    }
  };

  return (
    <>
      {isRendered && (
        <div>
          <div className="w-full flex overflow-x-auto flex-nowrap py-5 px-5">
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
          {componentHandler(toggleLabelNum as string)}{" "}
        </div>
      )}
    </>
  );
};

export default NFTDetailMoreInfo;
