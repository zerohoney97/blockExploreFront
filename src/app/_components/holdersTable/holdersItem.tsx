import React from "react";
import { HoldersItemProps } from "./interface";

const HoldersItem: React.FC<HoldersItemProps> = ({ HoldersItem }) => {
  return (
    <tr className="border-b border-gray flex">
      <td className="min-w-[60px] flex  relative items-center justify-center ">
        {HoldersItem.rank}
      </td>
      <td
        className="min-w-[200px]"
        style={{
          lineHeight: "2.3rem",
        }}
      >
        {HoldersItem.address}
      </td>
      <td className="min-w-[200px]  flex items-center">
        {HoldersItem.quantity}
      </td>
      <td className="min-w-[150px] flex items-center">
        {HoldersItem.percentage}
      </td>
      <td className="min-w-[200px] flex items-center">
        {HoldersItem.value}
      </td>
    </tr>
  );
};

export default HoldersItem;
