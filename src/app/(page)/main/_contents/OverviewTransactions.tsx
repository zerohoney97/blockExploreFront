import React from "react";
import MainTransactionsIndicator from "./TransactionsIndicator";
import MainTransactionsVolume from "./TransactionsVolume";
import MainGasPriceIndicator from "./GasPriceIndicator";
import { IOverviewTransactionsDataProps } from "../interface";


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
    // sm:mt-[20px] sm:pb-[20px] 
    // md:ml-[20px]  md:mt-[20px] md:mb-[20px] 
    // lg:ml-[20px] lg:mt-[20px] lg:mb-[20px]'>

    <div className='flex w-11/12 m-auto border-gray sm:py-[20px] md:p-5 lg:p-5 sm:border-b-[1px] md:border-r-[1px] md:py-0  lg:border-r-[1px] lg:py-0'>

      <MainTransactionsIndicator />
      <MainTransactionsVolume totalTransactionsCounter={totalTransactionsCounter} transactionsPerSecond={transactionsPerSecond} />
      <MainGasPriceIndicator baseFee={baseFee} priorityFee={priorityFee} />

    </div>
  );
};

export default MainOverviewTransactions;
