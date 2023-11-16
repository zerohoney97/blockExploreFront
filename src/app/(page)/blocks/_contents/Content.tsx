import React from "react";
import Link from "next/link";
import { BlocksDataProps } from "../interface";

const BlockContent: React.FC<{ data: BlocksDataProps }> = ({ data }) => {
  const BlocksDetailPath = `/blocks/${encodeURIComponent(data.block)}`;
  return (
    <tr className="border-b border-gray text-sm  ">
      <Link href={BlocksDetailPath}>
        <td className="py-3  min-w-[100px] justify-center text-blue-400">{data.block}</td>
      </Link>
      <td className="min-w-[150px]">{data.age}</td>
      <td className="min-w-[60px]">{data.Txn} ETH</td>
      <td className=" min-w-[200px]">{data.feeRecipient}</td>
      <td className=" min-w-[200px]">{data.gasUsed}</td>
      <td className=" min-w-[200px]">{data.gasLimit}</td>
      <td className=" min-w-[200px]">{data.baseFee}</td>
      <td className=" min-w-[200px]">{data.reward}</td>
      <td className=" min-w-[200px]">{data.burntFees}</td>
    </tr>
  );
};

export default BlockContent;