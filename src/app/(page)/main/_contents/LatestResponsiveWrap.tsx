import React from "react";
import MainLatestWrap from "@app/_components/mainLatestWrap";
import LatestBlocksList from "./LatestBlocksList";
import LatestTransactionsList from "./LatestTransactionsList";
import LatestBlocksButton from "./LatestBlocksButton";
import LatestTransactionsButton from "./LatestTransactionsButton";

import { MainLatestResponsiveWrapProps } from "../interface";

const MainLatestResponsiveWrap: React.FC<MainLatestResponsiveWrapProps> = ({
  blocksData, transactionsData
}) => {
  return (
    <div className='sm:w-11/12 md:w-full lg:w-11/12 m-auto lg:flex lg:justify-between'>
      <MainLatestWrap title='Blocks'>
        <LatestBlocksList blocksList={blocksData} />
        <LatestBlocksButton buttonName='BLOCKS' />
      </MainLatestWrap>
      <MainLatestWrap title='Transactions'>
        <LatestTransactionsList transactionslist={transactionsData} />
        <LatestTransactionsButton buttonName='TRANSACTIONS' />
      </MainLatestWrap>
    </div>
  );
};

export default MainLatestResponsiveWrap;
