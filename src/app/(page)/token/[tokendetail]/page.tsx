"use client";

import React, { useEffect, useState } from "react";
import Title from "@app/_components/itemTitle";
import OverviewCard from "./_contents/OverviewCard";
import MarketCard from "./_contents/MarketCard";
import OtherInfoCard from "./_contents/OtherInfoCard";
import TxList from "@app/_components/transactionTable";
import HoldersList from "@app/_components/holdersTable";
import DexList from "@app/_components/dexTradeTable";
import TapButton from "@app/_components/tabComponent/Tab";
import { ITokenDetailProps } from "../Interface";
import InfoTapContent from "./_contents/InfoTapContent";
import TokenItemTable from "./_contents/TokenItemTable";

const Page: React.FC<ITokenDetailProps> = ({ params }) => {
  const [toggleLabelNum, setToggleLabelNum] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const toggleHandler = (label: string) => {
    setToggleLabelNum(label);
  };
  useEffect(() => {
    console.log(params);
  }, []);

  

  return (
    <div className="bg-mainBackGroundColor flex flex-col p-5">
      <div className="flex items-center border-b border-gray w-11/12">
        <div className="flex items-center">
          <Title title="Token" />
          <span className="ml-2">{params.tokendetail}</span>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full  md:w-1/2 lg:w-1/3">
          <TokenItemTable>
            <OverviewCard
              title="Overview"
              MaxTotalSupply="MAX TOTAL SUPPLY"
              holders="HOLDERS"
              totaltransfers="TOTAL TRANSFERS"
            />
          </TokenItemTable>
        </div>
        <div className="w-full  md:w-1/2 lg:w-1/3">
        <TokenItemTable>
          <MarketCard
            title="Market"
            price="PRICE"
            fully="FULLY DILUTED MARKET CAP"
            CIRCULATING="CIRCULATING SUPPLY MARKET CAP"
          />
        </TokenItemTable>
        </div>
        <div className="w-full lg:w-1/3">
        <TokenItemTable>
          <OtherInfoCard
            title="Other Info"
            contract="TOKEN CONTRACT (WITH 6 DECIMALS)"
          />
        </TokenItemTable>
      </div>
      </div>
      <div>
        <div>
          <div className="flex w-auto overflow-x-scroll flex-nowrap p-5 ">
            <TapButton
              label="Transfers"
              toggleLabelNum={toggleLabelNum}
              toggleHandler={toggleHandler}
            />
            <TapButton
              label="Holders"
              toggleLabelNum={toggleLabelNum}
              toggleHandler={toggleHandler}
            />
            <TapButton
              label="Info"
              toggleLabelNum={toggleLabelNum}
              toggleHandler={toggleHandler}
            />
            <TapButton
              label="Dex Trades"
              toggleLabelNum={toggleLabelNum}
              toggleHandler={toggleHandler}
            />
          </div>
          {toggleLabelNum === "Info" && (
            <InfoTapContent
              VolumeContent="VolumeContent"
              MarketContent="Market Contents"
              CirculatingContent="Circulating Contents"
            />
          )}

          {toggleLabelNum === "Transfers" && (
            <TxList
              txList={[
                {
                  age: "123",
                  block: "231234",
                  from: "0x213155151412312321",
                  method: "Transfer",
                  to: "0x124124131312125513",
                  txHash: "0x123123123fhfhsfhbb23",
                  value: "131231312",
                },
                {
                  age: "123",
                  block: "231234",
                  from: "0x213155151412312321",
                  method: "Transfer",
                  to: "0x124124131312125513",
                  txHash: "0x123123123fhfhsfhbb23",
                  value: "131231312",
                },
              ]}
              lastThName="Quantity"
            />
          )}
          {toggleLabelNum === "Holders" && (
            <HoldersList
              holdersList={[
                {
                  rank: "1",
                  address: "sssssssssss",
                  quantity: "3,000,000,000.012501",
                  percentage: "7.4957% ",
                  value: "$3,000,000,000.01",
                },
                {
                  rank: "1",
                  address: "sssssssssss",
                  quantity: "3,000,000,000.012501",
                  percentage: "7.4957% ",
                  value: "$3,000,000,000.01",
                },
              ]}
            />
          )}
          {toggleLabelNum === "Dex Trades" && (
            <DexList
              dexList={[
                {
                  txHash: "0xdc238ae149",
                  age: "26 secs ago",
                  action: "Buy",
                  tokenAmountOut: "4,537.272737 ",
                  tokenAmountIn: "2.2196161432973 ",
                  swappedRate: "2,044.17000241 ",
                  txnValue: "$4,537.27",
                  dex: "유니스왑",
                },
              ]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
