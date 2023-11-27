import React from "react";
import Title from "@app/_components/itemTitle";
import { getBlock } from "@app/_api/main/getBlock";
import BlocksTable from "./_contents/Table";
import { IBlocksDataProps } from "./interface";

const Page = async () => {
  const blocksData = await getBlock("list");
  return (
    <div className="box-border flex flex-col p-3 bg-mainBackGroundColor items-center dark:bg-black/90">
      <div className="w-full ">
        <Title title="Blocks" />
        <div className="mt-10">
          <BlocksTable blocksData={blocksData as IBlocksDataProps[]} />
        </div>
      </div>
    </div>
  );
};

export default Page;
