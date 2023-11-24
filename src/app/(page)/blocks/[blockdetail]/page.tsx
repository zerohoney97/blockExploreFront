"use client";
import React, { useEffect } from "react";
import { IBlocksDetailProps } from "../interface";
import { BlockCard } from "../_contents/Card";
import Title from "./_contents/Title";
import BlockInfo from "./_contents/Info";
import BlockDiffcultyInfo from "./_contents/DiffcultyInfo";
import BlockGasInfo from "./_contents/GasInfo";
import MoreInfo from "./_contents/MoreInfo";
const Page: React.FC<IBlocksDetailProps> = ({ params }) => {
  useEffect(() => {
    console.log(params);
  }, []);

  const Ca =
    "0x13d1639cd9b11872b12594d7bf708c8f5cfeb183c126962b19af8ce7e9f99dd3";

  return (
    <>
      <div className='bg-mainBackGroundColor'>
        <div className='w-full '>
          <Title
            title={`Block `}
            subtitle={<span className='text-sm'>#{params.blockdetail}</span>}
          />
        </div>
      </div>
      <div className=''>
        <BlockCard>
          <BlockInfo
            blockHeight={params.blockdetail}
            status=''
            timeStamp='5 mins ago (Nov-17-2023 02:27:35 AM +UTC)'
            slot='7780337'
            epoch='243135'
            transaction='125'
            withdrawals='16'
          />
          <BlockDiffcultyInfo
            feeRecipient={`${Ca.slice(0, 4)} ... ${Ca.slice(-4)}`}
            reward='0.062845414849980248 ETH ( + 0.819979037944046248 - 0.757133623094066)'
            totalDifficulty='58,750,003,716,598,352,816,469'
            size='50,281 bytes'
          />
          <BlockGasInfo
            gasUsed='10,494,636 '
            gasLimit='30,000,000'
            gasUsedPercent='50'
            baseFeePerGas='0.000000027819057327 ETH '
            burntFee='🔥 0.291950880509997972 ETH'
            extraData='Titan (titanbuilder.xyz) (Hex:0x546974616e2028746974616e6275696c6465722e78797a29)'
          />
        </BlockCard>
        <BlockCard>
          <MoreInfo
            hash='0x13d1639cd9b11872b12594d7bf708c8f5cfeb183c126962b19af8ce7e9f99dd3'
            parentHash='0xbe31619dffecff96ad2df559ead10614a4ef3857807f20d2364f6e4c7d367624'
            stateRoot='0xa19875df9486af40fb57c3e0abf33c9580400332273de01bee750304d26ceaeb'
            withdrawsRoot='
          0x4ddb8356fe3bfedf06d97caa3c303401177d72a196628e61ab5019d2bec0de33'
            nonce='0x0000000000000000'
          />
        </BlockCard>
      </div>
    </>
  );
};

export default Page;
