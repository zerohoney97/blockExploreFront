"use client";
import React from "react";
import Title from "@app/_components/itemTitle";
import ItemTable from "@app/_components/itemTable";
import TokenHerader from "@app/(page)/token/_contents/Header";
import TokenContent from "@app/(page)/token/_contents/Content";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "@app/_components/pagination/Pagiation";
import searchIcon from "../../../../public/search04.png";
import Image from "next/image";

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
  {
    number: "2",
    tokenImage: "https://etherscan.io/token/images/tethernew_32.png",
    tokenName: "Bitcoin",
    unit: "(BTC)",
    ethPrice: "0.0234",
    change: "-0.8%",
    volume: "300",
    holders: "1,000,000",
  },
  {
    number: "3",
    tokenImage: "https://etherscan.io/token/images/tethernew_32.png",
    tokenName: "Ripple",
    unit: "(XRP)",
    ethPrice: "0.00056",
    change: "+0.2%",
    volume: "12,000",
    holders: "1,000,000",
  },
  {
    number: "4",
    tokenImage: "https://etherscan.io/token/images/tethernew_32.png",
    tokenName: "Litecoin",
    unit: "(LTC)",
    ethPrice: "0.0123",
    change: "-1.3%",
    volume: "800",
    holders: "1,000,000",
  },
  {
    number: "5",
    tokenImage: "https://etherscan.io/token/images/tethernew_32.png",
    tokenName: "Cardano",
    unit: "(ADA)",
    ethPrice: "0.000034",
    change: "+0.1%",
    volume: "50,000",
    holders: "1,000,000",
  },
  {
    number: "6",
    tokenImage: "https://etherscan.io/token/images/tethernew_32.png",
    tokenName: "Stellar",
    unit: "(XLM)",
    ethPrice: "0.00012",
    change: "+0.3%",
    volume: "6,000",
    holders: "1,000,000",
  },
  {
    number: "7",
    tokenImage: "https://etherscan.io/token/images/tethernew_32.png",
    tokenName: "Chainlink",
    unit: "(LINK)",
    ethPrice: "0.0012",
    change: "-0.6%",
    volume: "3,000",
    holders: "1,000,000",
  },
  {
    number: "8",
    tokenImage: "https://etherscan.io/token/images/tethernew_32.png",
    tokenName: "Polkadot",
    unit: "(DOT)",
    ethPrice: "0.00098",
    change: "+0.7%",
    volume: "2,500",
    holders: "1,000,000",
  },
  {
    number: "9",
    tokenImage: "https://etherscan.io/token/images/tethernew_32.png",
    tokenName: "Binance Coin",
    unit: "(BNB)",
    ethPrice: "0.1234",
    change: "-0.9%",
    volume: "200",
    holders: "1,000,000",
  },
  {
    number: "10",
    tokenImage: "https://etherscan.io/token/images/tethernew_32.png",
    tokenName: "Dogecoin",
    unit: "(DOGE)",
    ethPrice: "0.00023",
    change: "+0.4%",
    volume: "15,000",
    holders: "1,000,000",
  },
];

const Page = () => {
  const pagination = usePagination(tokenData);
  return (
    <div className="box-border flex flex-col p-3 bg-mainBackGroundColor items-center">
      <div className="w-full">
        <Title title="Token Tracker(ERC-20)" />
        <div className="mt-10 w-11/12 m-auto rounded-lg shadow-md  bg-white ">
          <div className="text-xs m-2 flex justify-between items-center">
            A total of "" Token Contracts found{" "}
            <Image
            className="flex cursor-pointer m-3"
            src={searchIcon}
            alt="searchIcon"
            width={25}
            height={3}
          />
          </div>
          <div className="min-w-[250px] max-w-[1250px] overflow-x-scroll h-auto">
          <table>
            <TokenHerader />
            <tbody className="items-center">
              {pagination.pageTxList &&
                (pagination.pageTxList as any).map(
                  (data: any, index: number) => (
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
      </div>
    </div>
  );
};

export default Page;
