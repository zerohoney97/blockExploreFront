import React from "react";
import { NftETHIndicatorProps } from "../../interface";

const NftETHIndicator: React.FC<NftETHIndicatorProps> = ({
  title,
  ethValue,
  ethValueDollar,
}) => {
  return (
    <li className='w-11/12 m-auto border-gray border-b-[1px] py-5 last:border-b-0'>
      <p className='text-zinc-400 text-sm'>{title}</p>
      <p>
        {ethValue} ETH 
        <span className="text-zinc-400 text-sm"> (${ethValueDollar})</span>
      </p>
    </li>
  );
};

export default NftETHIndicator;
