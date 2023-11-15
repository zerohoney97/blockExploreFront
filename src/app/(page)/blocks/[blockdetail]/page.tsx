"use client";
import React, { useEffect } from "react";
import { IBlocksDetailProps } from "../interface";
import { BlockCard } from "../_contents/Card";
import Title from "@app/_components/itemTitle";
import BlockInfo from "./_contents/Info";
import BlockDiffcultyInfo from "./_contents/DiffcultyInfo";
import BlockGasInfo from "./_contents/GasInfo";
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
          <BlockDiffcultyInfo/>
          <BlockGasInfo/>
        </BlockCard>
      </div>
    </div>
  );
};

export default Page;
