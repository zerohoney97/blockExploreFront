import React from "react";
import { ITransactionsVolumeProps } from "../../interface";

const MainTransactionsVolume:React.FC<ITransactionsVolumeProps> = ({totalTransactionsCounter, transactionsPerSecond}) => {
  return (
    <div className='w-[160px] whitespace-nowrap sm:text-[11px] md:text-[12px] lg:text-[15px]'>
      <p className='text-zinc-400'>TRANSACTIONS</p>
      <p>
        <span className="md:text-[15px] lg:text-[20px]">{totalTransactionsCounter} M</span>
        <span className='text-zinc-400 '> ({transactionsPerSecond} TPS)</span>
      </p>
    </div>
  );
};

export default MainTransactionsVolume;
