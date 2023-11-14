/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TxItemProps } from "./interface";

const TxItem: React.FC<TxItemProps> = ({ TxItem, toggleHandler }) => {
  return (
    <tr className="h-14 border-b border-gray text-sm">
      <td className="min-w-[60px] flex items-center justify-center p-2 relative">
        <div className="relative">
          <img
            src="https://i.pinimg.com/originals/ce/9c/4e/ce9c4e4f06e724a10b3766845f93a051.png"
            alt="detail"
            className="w-5 h-5 cursor-pointer"
            onClick={toggleHandler}
          />
        </div>
      </td>

      <td className="min-w-[200px]" style={{ lineHeight: "2.3rem" }}>
        {TxItem.txHash}
      </td>
      <td className="min-w-[120px] items-center">
        <span className="bg-gray max-w-[95px] p-1 rounded">
        {TxItem.method}
        </span>
        
      </td>
      <td className="min-w-[100px] items-center">
        {TxItem.block}
      </td>
      <td className="min-w-[100px] items-center">
        {TxItem.age}
      </td>
      <td className="min-w-[200px]" style={{ lineHeight: "2.3rem" }}>
        {TxItem.from}
      </td>
      <td className="min-w-[200px]" style={{ lineHeight: "2.3rem" }}>
        {TxItem.to}
      </td>
      <td className="min-w-[100px] items-center">
        {TxItem.value}
      </td>
    </tr>
  );
};

export default TxItem;
