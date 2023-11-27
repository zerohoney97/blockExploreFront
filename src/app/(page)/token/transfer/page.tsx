import React from "react";
import TokenTransferListWrap from "./_contents";
import Title from "@app/_components/itemTitle";

const Page = () => {
  return (
    <div className="dark:bg-black/90">
      <Title title="Token Transfers (ERC-20)"/>
      <TokenTransferListWrap />
    </div>
  );
};

export default Page;
