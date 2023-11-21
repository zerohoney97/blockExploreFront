"use client";
import React from "react";
import Title from "@app/_components/itemTitle";
import ItemTable from "@app/_components/itemTable";
import { BlockCard } from "./_contents/Card";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "@app/_components/pagination";
import { BlockHeader } from "./_contents/Header";
import BlockContent from "./_contents/Content";

const blocksData = [
  {
    block: "18545455",
    age: "4 secs ago",
    Txn: "500",
    feeRecipient: "Recipient A",
    gasUsed: "30000",
    gasUsedPercent: 50,
    gasLimit: "50000",
    baseFee: "20",
    reward: "100",
    burntFees: "50",
    burntFeesPercent: 90,
  },
  {
    block: "18545456",
    age: "3 secs ago",
    Txn: "600",
    feeRecipient: "Recipient B",
    gasUsed: "35000",
    gasLimit: "60000",
    baseFee: "25",
    reward: "110",
    burntFees: "60",
  },
];

const Page = () => {
  const pagination = usePagination(blocksData);
  return (
    <div className="box-border flex flex-col p-3 bg-mainBackGroundColor items-center">
      <div className="w-full">
        <Title title="Blocks" />
        <ItemTable>
          <div className="">
            <span className="text-sm">Total of blocks</span>
            <table>
              <BlockHeader />
              <tbody className="items-center">
                {pagination.pageTxList &&
                  (pagination.pageTxList as any).map(
                    (data: any, index: number) => (
                      <BlockContent key={index} data={data} />
                    )
                  )}
              </tbody>
            </table>
          </div>
        </ItemTable>
        <Pagination
          maxPage={pagination.maxPage}
          page={pagination.page}
          pageHandler={pagination.pageHandler}
        />
      </div>
    </div>
  );
};

export default Page;
