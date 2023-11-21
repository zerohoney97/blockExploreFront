"use client";
import React from "react";
import TxListWrap from "@app/_components/transactionTable";
import { ItxList } from "@app/_components/transactionTable/interface";
import useHydration from "@app/_hooks/useHydration";
import TxListTitle from "@app/_components/itemTitle";
const Page = () => {
  const tempDataArr: ItxList[] = Array.from({ length: 105 }, (ele, index) => ({
    age: "asd",
    block: "123124124",
    from: "0x12312kj312kjb3jk",
    to: "0xqweqwnekjads2asdk2",
    method: "Transfer",
    txHash: "0x123fjafk231s",
    value: index.toString(),
  }));
  const isRendered = useHydration();
  return (
    <div>
      <TxListTitle title="Transaction List" />
      {isRendered && (
        <TxListWrap
          txList={tempDataArr}
          lastThName="Value"
          pageStack={50}
        />
      )}
    </div>
  );
};

export default Page;
