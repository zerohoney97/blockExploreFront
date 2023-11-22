"use client";
import React, { useEffect } from "react";
import LatestTransactionsItem from "./LatestTransactionsItem";
import { ITransactionsListProps } from "../../interface";

const MainLatestTransactionsList: React.FC<ITransactionsListProps> = ({
  transactionslist,
}) => {
  useEffect(() => {
    console.log(transactionslist);
  }, [transactionslist]);
  return (
    <ul className="h-[482px] overflow-y-scroll w-full">
      {transactionslist.map((item, index) => (
        <>
          <LatestTransactionsItem transactionsData={item} />
        </>
      ))}
    </ul>
  );
};

export default MainLatestTransactionsList;
