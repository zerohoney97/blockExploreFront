/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { IPendingTransaction, IPendingTransactionProps } from "./interface";
import TxItem from "./TxItem";
import Pagination from "@app/_components/pagination/Pagiation";
import usePagiNation from "@app/_hooks/usePagination";

const PendingTxList: React.FC<IPendingTransactionProps> = ({
  pendingTransactionData,
}) => {
  return (
    <div>
      {pendingTransactionData &&
        (pendingTransactionData as IPendingTransaction[]).map((ele) => (
          <TxItem
            amount={ele.amount}
            from={ele.from}
            to={ele.to}
            gasLimit={ele.gasLimit}
            gasPrice={ele.gasPrice}
            lastSeen={ele.lastSeen}
            method={ele.method}
            nonce={ele.nonce}
            txHash={ele.txHash}
            key={ele.txHash}
          />
        ))}
    </div>
  );
};

export default PendingTxList;
