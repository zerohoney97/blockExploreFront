"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Title from "@app/_components/itemTitle";
import ItemTable from "@app/_components/itemTable";
import OverviewCard from "./_contents/OverviewCard";
import MarketCard from "./_contents/MarketCard";
import OtherInfoCard from "./_contents/OtherInfoCard";
import TxList from "@app/_components/transactionTable";
import HoldersList from "@app/_components/holdersTable";
import TapButton from "@app/_components/tabComponent/Tab";
import TapWrap from "@app/_components/tabComponent/TabWrap";
import { TokenDataProps } from "../Interface";
import { usePathname } from "next/navigation";
import { ITokenDetailProps } from "../Interface";
import InfoTapContent from "./_contents/InfoTapContent";

const Page: React.FC<ITokenDetailProps> = ({ params }) => {
  const [toggleLabelNum, setToggleLabelNum] = useState<string | null>(null);

  const toggleHandler = (label: string) => {
    setToggleLabelNum(label);
  };
  useEffect(() => {
    console.log(params.tokenDetail);
  }, []);

  return (
    <div className="bg-mainBackGroundColor flex flex-col p-5">
      <div className="flex items-center border-b border-gray w-11/12">
        <div className="flex items-center">
          <Title title="Token" />
          <span className="ml-2">{params.tokenDetail}</span>
        </div>
      </div>
      <ItemTable>
        <OverviewCard
          title="Overview"
          MaxTotalSupply="MAX TOTAL SUPPLY"
          holders="HOLDERS"
          totaltransfers="TOTAL TRANSFERS"
        />
      </ItemTable>

      <ItemTable>
        <MarketCard
          title="Market"
          price="PRICE"
          fully="FULLY DILUTED MARKET CAP"
          CIRCULATING="CIRCULATING SUPPLY MARKET CAP"
        />
      </ItemTable>
      <ItemTable>
        <OtherInfoCard
          title="Other Info"
          contract="TOKEN CONTRACT (WITH 6 DECIMALS)"
        />
      </ItemTable>
      <div>
        <div>
          <div className="flex w-auto overflow-x-scroll flex-nowrap py-5 ">
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
            {/* <TapButton
              label="Dex Trades"
              toggleLabelNum={toggleLabelNum}
              toggleHandler={toggleHandler}
            />
            <TapButton
              label="Contract"
              toggleLabelNum={toggleLabelNum}
              toggleHandler={toggleHandler}
            />
            <TapButton
              label="Analytics"
              toggleLabelNum={toggleLabelNum}
              toggleHandler={toggleHandler}
            /> */}
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
            />
          )}
          {toggleLabelNum === "Holders" && (
            <HoldersList
              holdersList={[
                {
                  rank :"1",
                  address: "sssssssssss",
                  quantity: "3,000,000,000.012501",
                  percentage: "7.4957% ",
                  value: "$3,000,000,000.01"
              
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
