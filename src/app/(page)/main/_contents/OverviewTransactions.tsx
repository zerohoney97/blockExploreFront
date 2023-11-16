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
    <div className='border-gray flex sm:w-11/12 md:w-[330px] lg:w-[400px] m-auto sm:border-b-[1px] sm:pl-0 sm:p-5'>

      <MainTransactionsIndicator />
      <MainTransactionsVolume totalTransactionsCounter={totalTransactionsCounter} transactionsPerSecond={transactionsPerSecond} />
      <MainGasPriceIndicator baseFee={baseFee} priorityFee={priorityFee} />

    </div>
  );
};

export default MainOverviewTransactions;
