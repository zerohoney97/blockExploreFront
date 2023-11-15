"use client";
import React from "react";
import Title from "@app/_components/itemTitle";
import ItemTable from "@app/_components/itemTable";
import TokenHerader from "@app/(page)/token/_contents/Header";
import TokenContent from "@app/(page)/token/_contents/Content";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "@app/_components/pagination/Pagiation";

const tokenData = [
  {
    number: "1",
    tokenName: "Ethereum",
    unit: "(ETH)",
    price: "0.0012",
    change: "+0.05%",
    volume: "2,500",
    holders: "1,000,000",
  },
  {
    number: "2",
    tokenName: "Bitcoin",
    unit: "(BTC)",
    price: "0.0234",
    change: "-0.8%",
    volume: "300",
    holders: "1,000,000",
  },
  {
    number: "3",
    tokenName: "Ripple",
    unit: "(XRP)",
    price: "0.00056",
    change: "+0.2%",
    volume: "12,000",
    holders: "1,000,000",
  },
  {
    number: "4",
    tokenName: "Litecoin",
    unit: "(LTC)",
    price: "0.0123",
    change: "-1.3%",
    volume: "800",
    holders: "1,000,000",
  },
  {
    number: "5",
    tokenName: "Cardano",
    unit: "(ADA)",
    price: "0.000034",
    change: "+0.1%",
    volume: "50,000",
    holders: "1,000,000",
  },
  {
    number: "6",
    tokenName: "Stellar",
    unit: "(XLM)",
    price: "0.00012",
    change: "+0.3%",
    volume: "6,000",
    holders: "1,000,000",
  },
  {
    number: "7",
    tokenName: "Chainlink",
    unit: "(LINK)",
    price: "0.0012",
    change: "-0.6%",
    volume: "3,000",
    holders: "1,000,000",
  },
  {
    number: "8",
    tokenName: "Polkadot",
    unit: "(DOT)",
    price: "0.00098",
    change: "+0.7%",
    volume: "2,500",
    holders: "1,000,000",
  },
  {
    number: "9",
    tokenName: "Binance Coin",
    unit: "(BNB)",
    price: "0.1234",
    change: "-0.9%",
    volume: "200",
    holders: "1,000,000",
  },
  {
    number: "10",
    tokenName: "Dogecoin",
    unit: "(DOGE)",
    price: "0.00023",
    change: "+0.4%",
    volume: "15,000",
    holders: "1,000,000",
  },
];

const page = () => {
  const pagination = usePagination(tokenData);
  return (
    <div className="box-border flex flex-col p-3 bg-mainBackGroundColor items-center">
      <div className="w-full  ">
      <Title title="Token Tracker(ERC-20)" />
        <ItemTable>
          <div className="">
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

export default page;
