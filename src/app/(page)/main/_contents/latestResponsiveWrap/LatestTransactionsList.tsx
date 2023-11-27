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
    <ul className="h-[482px] w-full">
      {transactionslist.map((item, index) => (
        <React.Fragment key={index}>
          <LatestTransactionsItem transactionsData={item} />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default MainLatestTransactionsList;
