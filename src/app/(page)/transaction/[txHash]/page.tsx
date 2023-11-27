import React, { useState } from "react";
import ItemTitle from "@app/_components/itemTitle";
import TxTabButtonWrap from "./_contents/TabButtonWrap";
import { getTxItemData } from "@app/_api/txDetail/getTxItemData";
const Page = ({ params }: { params: { txHash: string } }) => {
  const transactionItemData = getTxItemData(params.txHash);
  return (
    <div className="bg-mainBackGroundColor  max-w-[1250px] m-auto">
      <ItemTitle title="Transaction Details" />
      <TxTabButtonWrap />
    </div>
  );
};

export default Page;
