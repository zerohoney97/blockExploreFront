import React, { useState } from "react";
import ItemTitle from "@app/_components/itemTitle";
import TxTabButtonWrap from "./_contents/TabButtonWrap";
import { getTxItemData } from "@app/_api/txDetail/getTxItemData";
const Page = async ({ params }: { params: { txHash: string } }) => {
  const transactionItemData = await getTxItemData('2');

  return (
    <div className="bg-mainBackGroundColor pb-5  max-w-[1250px] m-auto dark:bg-black/90">
      <ItemTitle title="Transaction Details" />
      <TxTabButtonWrap />
    </div>
  );
};

export default Page;
