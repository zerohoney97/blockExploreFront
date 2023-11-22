import React from "react";
import { HoldersItemProps } from "./interface";

const HoldersItem: React.FC<HoldersItemProps> = ({ HoldersItem }) => {
  return (
    <tr className='h-14 border-b border-gray text-sm flex items-center'>
      <td className='w-[100px] pl-[20px]'>
        {HoldersItem.rank}
      </td>
      <td className='min-w-[350px]'>
        {HoldersItem.address}
      </td>
      <td className='min-w-[300px]'>{HoldersItem.quantity}</td>
      <td className='min-w-[200px]'>{HoldersItem.percentage}</td>
      <td className='min-w-[200px]'>{HoldersItem.value}</td>
    </tr>
  );
};

export default HoldersItem;
