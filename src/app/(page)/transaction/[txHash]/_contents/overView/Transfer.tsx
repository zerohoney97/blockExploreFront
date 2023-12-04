"use client";
import { ITransactionDetailProps } from "@app/(page)/transaction/interface";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import copy from "public/copy.png";
import React from "react";
import Link from "next/link";
import WordBallon from "@app/_components/wordBallon";
import useGetProvider from "@app/_hooks/useGetProvider";
import { useRouter } from "next/navigation";

const TxTransfer: React.FC<ITransactionDetailProps> = ({
  transactionItemData,
}) => {
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

  return (
    <div className="w-full h-auto flex flex-col border-b border-gray pb-5 dark:text-white">
      <div className="flex flex-col">
        <div className="lg:flex lg:m-3 lg:items-center ">
          <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
            From:
          </div>
          <div className="p-1 h-10 text-xs lg:ml-4 ">
            <div className="p-1 h-auto text-xs  sm:w-80 md:w-80  sm:break-words md:break-words lg:w-auto flex ">
              <span
                className="text-text-mainTextColor cursor-pointer"
                onClick={() => {
                  routeCaOrEoa(transactionItemData.from);
                }}
              >
                {transactionItemData.from}
              </span>

              <div className="ml-3">
                <WordBallon copyValue={transactionItemData.from} />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:m-3 lg:items-center">
          <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
            To:
          </div>
          <div className="p-1 h-10 text-xs  lg:ml-4 ">
            <div className="p-1 h-auto text-xs sm:w-80 md:w-80 sm:break-words md:break-words lg:w-auto flex ">
              <span
                className="text-text-mainTextColor cursor-pointer"
                onClick={() => {
                  routeCaOrEoa(transactionItemData.from);
                }}
              >
                {transactionItemData.to}
              </span>

              <div className="ml-3">
                <WordBallon copyValue={transactionItemData.to} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxTransfer;
