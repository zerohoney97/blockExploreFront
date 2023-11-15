"use client";
import React, { useEffect } from "react";
import { IBlocksDetailProps } from "../interface";
import { BlockCard } from "../_contents/Card";
import Title from "@app/_components/itemTitle";
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

        </BlockCard>
      </div>
    </div>
  );
};

export default Page;
