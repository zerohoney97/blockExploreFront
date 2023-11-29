import React from "react";
import TokenTransferListWrap from "./_contents";
import Title from "@app/_components/itemTitle";
import { getTransaction } from "@app/_api/main/getTransaction";
import { ItxList } from "@app/_components/transactionTable/interface";

const Page = async() => {
  const tokenTransferDataList:ItxList[]=await getTransaction('token') as ItxList[];
  return (
    <div className="dark:bg-black/90">
      <Title title="Token Transfers (ERC-20)"/>
      <TokenTransferListWrap tokenTransferDataList={tokenTransferDataList} />
    </div>
  );
};

export default Page;
