"use client";
import React, { useState } from "react";
import AddressTabWrap from "./TabWrap";
import TabButton from "@app/_components/tabComponent/Tab";
import AddressTransfer from "./transfer";
import AddressTokenTransfer from "./tokenTransfer";
import AddressNftTransfer from "./NFTTransfer";
import useHydration from "@app/_hooks/useHydration";
import { ItxList } from "@app/_components/transactionTable/interface";

const AddressMoreInfo = () => {
  const [toggleLabelName, setToggleLabelName] =
    useState<string>("Transactions");
  const toggleHandler = (label: string) => {
    setToggleLabelName(label);
  };
  const isRendered = useHydration();

  const tempDataArr: ItxList[] = Array.from({ length: 105 }, (ele, index) => ({
    age: "asd",
    blocknumber: "123124124",
    from: "0x12312kj312kjb3jk",
    to: "0xqweqwnekjads2asdk2",
    method: "Transfer",
    txHash: "0x123fjafk231s",
    value: index.toString(),
  }));

  const componentHandler = (label: string) => {
    if (label === "Transactions") {
      return <AddressTransfer txList={tempDataArr} lastThName="Value" />;
    } else if (label === "Token Transfers(ERC-20)") {
      return <AddressTokenTransfer txList={tempDataArr} lastThName="Token" />;
    } else if (label === "NFT Transfers") {
      return <AddressNftTransfer txList={tempDataArr} lastThName="Item" />;
    } else {
      return <></>;
    }
  };
  return (
    <>
      {isRendered && (
        <>
          <AddressTabWrap>
            <TabButton
              label="Transactions"
              toggleLabelNum={toggleLabelName}
              toggleHandler={toggleHandler}
            />
            <TabButton
              label="Token Transfers(ERC-20)"
              toggleLabelNum={toggleLabelName}
              toggleHandler={toggleHandler}
            />
            <TabButton
              label="NFT Transfers"
              toggleLabelNum={toggleLabelName}
              toggleHandler={toggleHandler}
            />
          </AddressTabWrap>
          {componentHandler(toggleLabelName as string)}
        </>
      )}
    </>
  );
};

export default AddressMoreInfo;
