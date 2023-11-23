/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { ITxItemProps } from "./interface";
import { useRouter } from "next/navigation";
import {
  faCircleRight,
  faCopy,
  faEye,
} from "@fortawesome/free-regular-svg-icons";
import Arrow from "public/arrow.png"
import arrowIcon from "public/arrowIcon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const TxItem: React.FC<ITxItemProps> = ({ TxItem, toggleHandler }) => {
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
    <tr className="border-b border-gray text-sm flex h-[50px] leading-[50px]">
      {/* 1 */}
      <td className="min-w-[60px] flex justify-center items-center ">
        <FontAwesomeIcon
          className="border-gray border-[1px] rounded-lg p-[10px] cursor-pointer"
          icon={faEye}
          onClick={toggleHandler}
        />
      </td>
      {/* 2 */}
      <td
        className="min-w-[200px] text-text-mainTextColor"
        onClick={() => {
          txNavigation.push(`/transaction/${TxItem.txHash}`);
        }}
      >
          {TxItem.txHash}
      </td>
      {/* 3 */}
      <td className="min-w-[120px] items-center">
        <span className="bg-gray border-black/10 border-[1px] max-w-[95px] p-1 px-2 rounded-lg text-xs ">
          {TxItem.method}
        </span>
      </td>
      {/* 4 */}
      <td className="min-w-[100px] items-center">{TxItem.block}</td>
      <td className="min-w-[80px] items-center ">{TxItem.age}</td>
      <td className="min-w-[120px] lg:w-44">
        <div className="w-full flex ">
          <div className="text-text-mainTextColor">
            <Link href={`/transaction/${TxItem.from}`}>
              {addressEncodeHandler(TxItem.from)}
            </Link>
          </div>
          <button onClick={() => AddressClick(TxItem.from)} className="ml-3">
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
      </td>
      <td className="flex justify-center items-center">
        <div className="lg:w-20 text-center ">
          <Image
          alt=""
          width={30}
          src={Arrow}/>
        </div>
      </td>
      <td className="min-w-[120px] lg:w-64">
        <div className="w-full flex ">
          <div className="text-text-mainTextColor sm:ml-2 md:ml-2">
            <Link href={`/transaction/${TxItem.to}`}>
              {addressEncodeHandler(TxItem.to)}
            </Link>
          </div>
          <button onClick={() => AddressClick(TxItem.to)} className="ml-3">
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
      </td>
      <td className="min-w-[100px] items-center">{TxItem.value}</td>
    </tr>
  );
};

export default TxItem;
