import React from "react";
import { HoldersItemProps } from "./interface";

const HoldersItem: React.FC<HoldersItemProps> = ({ HoldersItem }) => {
  return (
    <tr className="h-14 border-b border-gray">
    <td className="min-w-[60px] flex items-center justify-center p-2 relative">
        {HoldersItem.rank}
      </td>
      <td
         className="min-w-[200px]" style={{ lineHeight: "2.3rem" }}>
        {HoldersItem.address}
      </td>
      <td className="min-w-[200px] items-center">
        {HoldersItem.quantity}
      </td>
      <td className="min-w-[150px] items-center">
        {HoldersItem.percentage}
      </td>
      <td className="min-w-[200px] items-center">
        {HoldersItem.value}
      </td>
    </tr>
  );
};

export default HoldersItem;