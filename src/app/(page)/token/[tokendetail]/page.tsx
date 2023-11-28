"use client";
import React, { useEffect, useState } from "react";
import Title from "./_contents/Title";
import OverviewCard from "./_contents/OverviewCard";
import MarketCard from "./_contents/MarketCard";
import OtherInfoCard from "./_contents/OtherInfoCard";
import { ITokenDetailProps } from "../Interface";
import TokenItemTable from "./_contents/TokenItemTable";
import TokenTapInfo from "./_contents/TapInfo";

const Page: React.FC<ITokenDetailProps> = ({ params }) => {
  const [toggleLabelNum, setToggleLabelNum] = useState<string>("Transfers");

  const toggleHandler = (label: string) => {
    setToggleLabelNum(label);
  };
  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <div className="dark:bg-black/90">
      <Title
        title={`Token`}
        subtitle={<span className="text-sm">#{params.tokendetail}</span>}
      />
      <div className="dark:bg-datkMode-wrapBG flex flex-wrap min-w-[280px] mt-5 w-11/12 m-auto">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <TokenItemTable>
            <OverviewCard
              title="Overview"
              MaxTotalSupply="40,022,312,072.755921"
              holders="4,695,126 "
              totaltransfers="207,725,379"
            />
          </TokenItemTable>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <TokenItemTable>
            <MarketCard
              title="Market"
              price="1" // 달러
              fully="40,062,334,384.83"
              CIRCULATING="87,750,911,870.00"
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
      <div className="w-11/12 m-auto">
        <TokenTapInfo />
      </div>
    </div>
  );
};

export default Page;
