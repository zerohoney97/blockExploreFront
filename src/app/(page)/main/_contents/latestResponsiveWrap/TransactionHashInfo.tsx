import React from "react";
import { ITransactionHashInfoProps } from "../../interface";
import Link from "next/link";

const MainTransactionHashInfo: React.FC<ITransactionHashInfoProps> = ({
  transactionHash,
  transactionTime,
}) => {
  const truncate = (hash: string) => {
    return hash.substring(0, 15);
  };

  const truncateHash = truncate(transactionHash) + "...";

  return (
    <p className="md:w-[40%] lg:w-[40%]">
      TX #
      <Link href={`/main/tx/${transactionHash}`} className='ml-2 text-blue-400'>
        {truncateHash}
      </Link>
      <span className='sm:ml-2 md:ml-0 lg:ml-0 text-xs text-zinc-400 md:block lg:block'>
        {transactionTime} secs ago
      </span>
    </p>
  );
};

export default MainTransactionHashInfo;
