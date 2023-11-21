"use client";
import React from "react";
import TxListWrap from "@app/_components/transactionTable";
import { IblockstxnList } from "./interface";
import useHydration from "@app/_hooks/useHydration";
import TxnTitle from "./_content/Title";
const Page = () => {
  const tempDataArr: IblockstxnList[] = Array.from({ length: 105 }, (ele, index) => ({
    txHash: "0x123fjafk231s",
    method: "Transfer",
    block: "123124124",
    age: "asd",
    from: "0x12312kj312kjb3jk",
    to: "0xqweqwnekjads2asdk2",
    value: index.toString(),
  }));
  const isRendered = useHydration();
  return (
    <div>
      <div>
      <TxnTitle title="Transactions">
      For Block""
        </TxnTitle>
      </div>
      {isRendered && <TxListWrap txList={tempDataArr} lastThName="Value" maxHeight="1200px" pageStack={50}/>}
    </div>
  );
};

export default Page;
