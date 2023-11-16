import React from "react";
import { IGasPriceIndicatorProps } from "../interface";

const MainGasPriceIndicator: React.FC<IGasPriceIndicatorProps> = ({
  baseFee,
  priorityFee,
}) => {
  return (
    <div className='w-1/4 whitespace-nowrap text-xs'>
      <p className='text-zinc-400'>MED GAS PRICE</p>
      <p>
        {baseFee} Gwei
        <span className='text-zinc-400'> (${priorityFee})</span>
      </p>
    </div>
  );
};

export default MainGasPriceIndicator;
