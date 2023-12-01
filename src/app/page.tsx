import React from "react";
import MainSearchBarWrap from "./(page)/main/_contents/searchBarWrap/SearchBarWrap";
import EthereumOverview from "./(page)/main/_contents/ethereumOverview/EthereumOverview";
import LatestResponsiveWrap from "./(page)/main/_contents/latestResponsiveWrap/LatestResponsiveWrap";
import Header from "./_layout/header";
import Footer from "./_layout/footer";
import { getBlock } from "./_api/main/getBlock";
import { getTransaction } from "./_api/main/getTransaction";
import { IMainBlocksItem, IMainTransactionData } from "./_api/main/interface";
import Loading from "./_components/loading";

export default async function Main() {
  const blockData = await getBlock("main");
  const transactionData = await getTransaction("main");
  const overviewTransactionsData = {
    totalTransactionsCounter: 2155.7,
    transactionsPerSecond: 12.7,
    baseFee: 42,
    priorityFee: 1.81,
  };
  const overviewLastFinalizedBlockData = {
    lastFinalizedBlock: 18562780,
    lastSafeBlock: 18562812,
  };
  

  return (
    <>

      <Header />
      <div className="max-w-[1400px] m-auto sm:px-0 md:px-0 pt-0 p-8 dark:bg-black">
        <MainSearchBarWrap />
        <EthereumOverview
          overviewTransactionsData={overviewTransactionsData}
          overviewLastFinalizedBlockData={overviewLastFinalizedBlockData}
        />
        <LatestResponsiveWrap
          blocksData={blockData as IMainBlocksItem[]}
          transactionsData={transactionData as IMainTransactionData[]}
        />
      </div>
      <Footer />
    </>
  );
}
