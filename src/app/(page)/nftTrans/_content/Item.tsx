/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { INftTxItemProps } from "../interface";
import { useRouter } from "next/navigation";
import {
  faCircleRight,
  faCopy,
  faEye,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const NftTxItem: React.FC<INftTxItemProps> = ({ NftTxItem, toggleHandler }) => {
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
      <td className="min-w-[80px] flex items-center justify-center p-2 relative">
        <div className="relative">
          <FontAwesomeIcon
            className="border-gray rounded-lg p-[10px] border-[1px] cursor-pointer"
            icon={faEye}
            onClick={toggleHandler}
          />
        </div>
      </td>

      <td
        className="min-w-[200px] text-text-mainTextColor    "
        onClick={() => {
          txNavigation.push(`/transaction/${NftTxItem.transcationInfo}`);
        }}
      >
        {NftTxItem.transcationInfo}
      </td>
      <td className="min-w-[120px]  items-center">
        <span className="bg-gray max-w-[95px] p-1 rounded dark:text-black">
          {NftTxItem.method}
        </span>
      </td>
      <td className="min-w-[100px] items-center">{NftTxItem.age} sec ago</td>
      <td className="min-w-[180px]   lg:w-44">
        <div className="w-full flex ">
          <div className="text-text-mainTextColor">
            <Link href={`/transaction/${NftTxItem.from}`}>
              {" "}
              {addressEncodeHandler(NftTxItem.from)}
            </Link>
          </div>
          <button onClick={() => AddressClick(NftTxItem.from)} className="ml-3">
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
      </td>
      <td>
        <div className="">
          <FontAwesomeIcon icon={faCircleRight} />
        </div>
      </td>
      <td className="min-w-[200px]  lg:w-64">
        <div className="w-full flex ">
          <div className="text-text-mainTextColor  sm:ml-2 md:ml-2">
            <Link href={`/transaction/${NftTxItem.to}`}>
              {" "}
              {addressEncodeHandler(NftTxItem.to)}
            </Link>
          </div>
          <button onClick={() => AddressClick(NftTxItem.to)} className="ml-3">
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
      </td>
      <td className="min-w-[150px] items-center">
        <span className="border border-black/50 rounded p-1">
          {NftTxItem.type}
        </span>
      </td>
      <td className="min-w-[300px] flex items-start">
        <img className="w-8" src={NftTxItem.itemImage} alt="" />
        <p className="ml-2">{NftTxItem.itemName}</p>
      </td>
    </tr>
  );
};

export default NftTxItem;
