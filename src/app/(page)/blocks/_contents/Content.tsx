import React from "react";
import Link from "next/link";
import { IBlocksDataProps } from "../interface";

const BlockContent: React.FC<{ data: IBlocksDataProps }> = ({ data }) => {
  const BlocksDetailPath = `/blocks/${encodeURIComponent(data.block)}`;
  const transactionPath = "/transaction";
  const addressPath = "nft/ContractAddress";

  return (
    <tr className="border-b border-gray text-sm">
      <td className="py-3 min-w-[100px] justify-center text-text-mainTextColor">
        <Link href={BlocksDetailPath}>
          {data.block}
        </Link>
      </td>
      <td className="min-w-[150px]">{data.age}</td>
      <td className="min-w-[60px] text-text-mainTextColor">
        <Link href={transactionPath}>
          {data.Txn}
        </Link>
      </td>
      <td className="min-w-[200px] text-text-mainTextColor">
        <Link href={addressPath}>
          {data.feeRecipient}
        </Link>
      </td>
      <td className="min-w-[200px]">{data.gasUsed} <span>({data.gasUsedPercent}%)</span></td>
      <td className="min-w-[200px]">{data.gasLimit}</td>
      <td className="min-w-[200px]">{data.baseFee}Gwei</td>
      <td className="min-w-[200px]">{data.reward}ETH</td>
      <td className="min-w-[200px]">{data.burntFees} ({data.burntFeesPercent}%)</td>
    </tr>
  );
};

export default BlockContent;
