import React from "react";
import { ITransactionFrom } from "../../interface";
import Link from "next/link";

const MainTransactionFrom: React.FC<ITransactionFrom> = ({ fromAddress }) => {
  const truncate = (transaction: string) => {
    return transaction.slice(0, 8) + "..." + transaction.slice(-8);
  };

  const truncateTransaction = truncate(fromAddress);
  return (
    <p>
      From
      <Link
        href={`/main/address/${fromAddress}`}
        className='ml-2 text-text-mainTextColor'>
        {truncateTransaction}
      </Link>
    </p>
  );
};

export default MainTransactionFrom;
