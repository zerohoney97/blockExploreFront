import React from "react";
import { ITransactionsVolumeProps } from "../interface";

const MainTransactionsVolume:React.FC<ITransactionsVolumeProps> = ({totalTransactionsCounter, transactionsPerSecond}) => {
  return (
    <div className='w-1/2 whitespace-nowrap text-xs'>
      <p className='text-zinc-400'>TRANSACTIONS</p>
      <p>
        {totalTransactionsCounter} M
        <span className='text-zinc-400'> ({transactionsPerSecond} TPS)</span>
      </p>
    </div>
  );
};

export default MainTransactionsVolume;
