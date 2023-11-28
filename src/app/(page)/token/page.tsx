"use client";
import React, { useEffect, useState } from "react";
import Title from "@app/_components/itemTitle";
import ItemTable from "./_contents/ItemTable";
import TokenHeader from "@app/(page)/token/_contents/Header";
import TokenContent from "@app/(page)/token/_contents/Content";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "@app/_components/pagination";
import searchIcon from "../../../../public/search03.png";
import Image from "next/image";
import { TokenDataProps } from "./Interface";

const tokenData = [
  {
    number: "1",
    tokenImage: "https://etherscan.io/token/images/tethernew_32.png",
    tokenName: "Ethereum",
    unit: "(ETH)",
    ethPrice: "0.0012",
    change: "+0.05%",
    volume: "2,500",
    holders: "1,000,000",
  },
];

const Page = () => {
  const pagination = usePagination<TokenDataProps>(tokenData);
  return (
    <>
      <div className="box-border flex flex-col p-3 bg-mainBackGroundColor items-center dark:bg-black/90">
        <div className="w-full">
          <Title title="Token Tracker(ERC-20)" />
          <ItemTable>
            <div className="text-sm m-4 flex justify-between items-center dark:text-white">
              A total of {""} Token Contracts found{" "}
              <Image
                className="flex cursor-pointer m-3"
                src={searchIcon}
                alt="searchIcon"
                width={25}
              />
            </div>
            <div className="overflow-x-scroll">
              <div className="min-w-[250px] max-w-[1250px] h-auto">
                <table>
                  <TokenHeader />
                  <tbody className="items-center">
                    {pagination.pageTxList &&
                      (pagination.pageTxList as TokenDataProps[]).map(
                        (data: TokenDataProps, index: number) => (
                          <TokenContent key={index} data={data} />
                        )
                      )}
                  </tbody>
                </table>
              </div>
            </div>
            <Pagination
              maxPage={pagination.maxPage}
              page={pagination.page}
              pageHandler={pagination.pageHandler}
            />
          </ItemTable>
        </div>
      </div>
    </>
  );
};

export default Page;
