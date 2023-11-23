import React from "react";
import TxListWrap from "@app/_components/transactionTable";
import { ItxList } from "@app/_components/transactionTable/interface";
import useHydration from "@app/_hooks/useHydration";
import TxListTitle from "@app/_components/itemTitle";
import TransactionListWrap from "./_contents/ListWrap";
const Page = () => {
  return (
    <div>
      <TxListTitle title="Transaction List" />
      <TransactionListWrap />
    </div>
  );
};

export default Page;
