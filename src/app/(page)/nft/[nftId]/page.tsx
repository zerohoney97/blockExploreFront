import React from "react";
import ItemTitle from "@app/_components/itemTitle";
import { INftTxDetailProps } from "../interface";
import OverViewInfo from "./_contents/OverViewInfo";
import MarketInfo from "./_contents/MarketInfo";
import OtherInfo from "./_contents/OtherInfo";
import NFTDetailMoreInfo from "./_contents/DetailMoreInfo";
import TokenItemTable from "@app/(page)/token/[tokendetail]/_contents/TokenItemTable";



const NftTxDetail: React.FC<INftTxDetailProps> = ({ params }) => {
  return (
    <>
    <div className="bg-mainBackGroundColor ">
      <ItemTitle title={params.nftId} />
      <div className="w-20 h-8 m-6 border-2 border-white bg-white rounded-xl font-bold flex justify-center items-center text-sm">
        ERC-721
      </div>
      <div className="flex flex-wrap min-w-[280px] mt-5 w-11/12 m-auto">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <TokenItemTable>
            <OverViewInfo
              title="Overview"
              MaxTotalSupply="40,022,312,072.755921"
              holders="4,695,126 "
              totaltransfers="207,725,379"
            />
          </TokenItemTable>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <TokenItemTable>
            <MarketInfo
              title="Market"
              volume="96.3706 ETH"
              minPrice="51,646.81" // 달러
              maxPrice="87,839.46"
            />
          </TokenItemTable>
        </div>
        <div className="w-full lg:w-1/3">
          <TokenItemTable>
            <OtherInfo
              title="Other Info"
              contract="0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
            />
          </TokenItemTable>
        </div>
      </div>
        <NFTDetailMoreInfo />
      </div>
    </>
  );
};

export default NftTxDetail;
