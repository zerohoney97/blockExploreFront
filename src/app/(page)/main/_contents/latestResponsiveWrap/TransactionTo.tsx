import React from "react";
import { ITransactionTo } from "../../interface";
import Link from "next/link";
import useGetProvider from "@app/_hooks/useGetProvider";
import { useRouter } from "next/navigation";

const MainTransactionTo: React.FC<ITransactionTo> = ({ toAddress }) => {
  const truncate = (transaction: string) => {
    return transaction.slice(0, 8) + "..." + transaction.slice(-8);
  };
  const web3 = useGetProvider();
  const router = useRouter();
  const routeCaOrEoa = async (hash: string) => {
    const code = await web3.eth.getCode(hash);
    if (code !== "0x") {
      router.push(`/ca/${hash}`);
      return "contract";
    } else {
      router.push(`/address/${hash}`);
      return "EOA";
    }
  };
  const truncateTransaction = truncate(toAddress);
  return (
    <span className="dark:text-white">
      To
      <span
        className="ml-2 text-text-mainTextColor cursor-pointer"
        onClick={() => {
          routeCaOrEoa(toAddress);
        }}
      >
        {truncateTransaction}
      </span>
    </span>
  );
};

export default MainTransactionTo;
