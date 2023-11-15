import React from "react";
import { ITransactionTo } from "../interface";
import Link from "next/link";

const TransactionTo: React.FC<ITransactionTo> = ({ toAddress }) => {
  const truncate = (transaction: string) => {
    return transaction.slice(0, 8) + "..." + transaction.slice(-8);
  };
  const truncateTransaction = truncate(toAddress);
  return (
    <span>
      To
      <Link href={`/main/address/${toAddress}`} className='ml-2 text-blue-400'>
        {truncateTransaction}
      </Link>
    </span>
  );
};

export default TransactionTo;
