import React from "react";
import { ITransactionHashInfoProps } from "../interface";
import Link from "next/link";

const TransactionHashInfo: React.FC<ITransactionHashInfoProps> = ({
  transactionHash,
  transactionTime,
}) => {
  const truncate = (hash: string) => {
    return hash.substring(0, 15);
  };

  const truncateHash = truncate(transactionHash) + "...";

  return (
    <p>
      TX #
      <Link href={`/main/tx/${transactionHash}`} className='ml-2 text-blue-400'>
        {truncateHash}
      </Link>
      <span className='ml-2 text-xs text-zinc-400'>
        {transactionTime} secs ago
      </span>
    </p>
  );
};

export default TransactionHashInfo;
