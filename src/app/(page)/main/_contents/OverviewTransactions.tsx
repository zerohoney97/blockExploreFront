import React from "react";

interface IOverviewTransactionsData {
  totalTransactionsCounter: number;
  transactionsPerSecond: number;
  baseFee: number;
  priorityFee: number;
}

interface IOverviewTransactionsDataProps {
  overviewTransactionsData: IOverviewTransactionsData;
}

const MainOverviewTransactions: React.FC<IOverviewTransactionsDataProps> = ({
  overviewTransactionsData,
}) => {
  const {
    totalTransactionsCounter,
    transactionsPerSecond,
    baseFee,
    priorityFee,
  } = overviewTransactionsData;
  return (
    // <div className='flex w-11/12 m-auto border-gray sm:border-b-[1px] 
    // sm:mt-[20px] sm:pb-[20px] 
    // md:border-r-[1px] md: ml-[20px]  md:mt-[20px] md:mb-[20px] 
    // lg:ml-[20px] lg:border-r-[1px] lg:mt-[20px] lg:mb-[20px]'>

<div className='flex p-5 w-11/12 m-auto border-gray sm:border-b-[1px]  md:border-r-[1px] md:py-0  lg:border-r-[1px] lg:py-0'>

      <div className='w-[40px]'>
        <span className='flex justify-center'>🎅</span>
      </div>
      <div className='w-1/2 whitespace-nowrap'>
        <p className='text-zinc-400 text-xs '>TRANSACTIONS</p>
        <p>
          {totalTransactionsCounter} M
          <span className='text-zinc-400'> ({transactionsPerSecond} TPS)</span>
        </p>
      </div>
      <div className='w-1/4 whitespace-nowrap'>
        <p className='text-zinc-400 text-xs '>MED GAS PRICE</p>
        <p>
          {baseFee} Gwei
          <span className='text-zinc-400 text-xs'> (${priorityFee})</span>
        </p>
      </div>

    </div>
  );
};

export default MainOverviewTransactions;
