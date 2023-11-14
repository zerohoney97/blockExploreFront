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

const OverviewTransactions: React.FC<IOverviewTransactionsDataProps> = ({
  overviewTransactionsData,
}) => {
  const {
    totalTransactionsCounter,
    transactionsPerSecond,
    baseFee,
    priorityFee,
  } = overviewTransactionsData;
  return (
    <div className='flex w-11/12 m-auto mt-[20px] pt-[10px] pb-[20px] border-gray border-b-[1px]'>
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

export default OverviewTransactions;
