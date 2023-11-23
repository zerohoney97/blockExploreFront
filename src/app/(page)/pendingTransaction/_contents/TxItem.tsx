/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { IPendingTransaction, IPendingTransactionProps } from "./interface";
import { useRouter } from "next/navigation";
import {
  faCircleRight,
  faCopy,
  faEye,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const PendingTxItem: React.FC<IPendingTransaction> = ({
  amount,
  from,
  gasLimit,
  gasPrice,
  lastSeen,
  method,
  nonce,
  to,
  txHash,
}) => {
  const addressEncodeHandler = (address: string) => {
    return (
      address.substring(0, 4) + "...." + address.substring(address.length - 4)
    );
  };
  const AddressClick = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        console.log(value);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const txNavigation = useRouter();
  return (
    <tr className="h-14 border-b  border-gray text-sm  align-middle">
      <td
        className=" text-text-mainTextColor max-w-[240px] truncate p-2 "
        onClick={() => {
          txNavigation.push(`/transaction/${txHash}`);
        }}
      >
        {txHash}
      </td>
      <td className="items-center min-w-[150px]">
        <span className="bg-gray max-w-[95px] p-1 rounded">{method}</span>
      </td>
      <td className=" items-center min-w-[100px]">{nonce}</td>
      <td className=" items-center min-w-[150px]">{lastSeen}</td>
      <td className=" items-center min-w-[100px]">{gasLimit}</td>
      <td className=" items-center min-w-[100px]">{gasPrice}</td>
      <td className="  min-w-[130px] lg:w-44">
        <div className="w-full flex ">
          <div className="text-text-mainTextColor">
            <Link href={`/transaction/${from}`}>
              {" "}
              {addressEncodeHandler(from)}
            </Link>
          </div>
          <button onClick={() => AddressClick(from)} className="ml-3">
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
      </td>
      <td>
        <div className="min-w-[20px] lg:w-20">
          <FontAwesomeIcon icon={faCircleRight} />
        </div>
      </td>
      <td className=" min-w-[150px] lg:w-64">
        <div className="w-full flex ">
          <div className="text-text-mainTextColor  sm:ml-2 md:ml-2">
            <Link href={`/transaction/${to}`}> {addressEncodeHandler(to)}</Link>
          </div>
          <button onClick={() => AddressClick(to)} className="ml-3">
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
      </td>
      <td className=" items-center min-w-[100px]">{amount}</td>
    </tr>
  );
};

export default PendingTxItem;
