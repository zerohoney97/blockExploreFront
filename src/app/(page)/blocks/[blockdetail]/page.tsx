"use client";
import React, { useEffect } from "react";
import { IBlocksDetailProps } from "../interface";
import { BlockCard } from "../_contents/Card";
import Title from "@app/_components/itemTitle";
import BlockInfo from "./_contents/Info";
import BlockDiffcultyInfo from "./_contents/DiffcultyInfo";
import BlockGasInfo from "./_contents/GasInfo";
import BlockMoreInfo from "./_contents/MoreInfo";
import MoreInfo from "./_contents/MoreInfo";
const Page: React.FC<IBlocksDetailProps> = ({ params }) => {
  useEffect(() => {
    console.log(params);
  }, []);
  return (
    <div className="bg-mainBackGroundColor flex flex-col p-5">
      <div className="flex items-center w-11/12  max-w-[1200px]">
        <div className="flex items-center">
          <Title title="Block" />
          <span className="ml-2 text-black/40">#{params.blockdetail}</span>
        </div>
      </div>
      <div>
        <BlockCard>
          <BlockInfo />
          <BlockDiffcultyInfo />
          <BlockGasInfo
            gasUsed="10,494,636 "
            gasLimit="30,000,000"
            gasUsedPercent="50"
            baseFeePerGas="0.000000027819057327 ETH "
            burntFee="🔥 0.291950880509997972 ETH"
            extraData=""
          />
        </BlockCard>
        <BlockCard>
          <MoreInfo
            hash="0x13d1639cd9b11872b12594d7bf708c8f5cfeb183c126962b19af8ce7e9f99dd3"
            parentHash="0xbe31619dffecff96ad2df559ead10614a4ef3857807f20d2364f6e4c7d367624"
            stateRoot="0xa19875df9486af40fb57c3e0abf33c9580400332273de01bee750304d26ceaeb"
            withdrawsRoot="
          0x4ddb8356fe3bfedf06d97caa3c303401177d72a196628e61ab5019d2bec0de33"
            nonce="0x0000000000000000"
          />
        </BlockCard>
      </div>
    </div>
  );
};

export default Page;
