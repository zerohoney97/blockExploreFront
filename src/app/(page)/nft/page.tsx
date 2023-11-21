"use client";
import SearchBar from "@app/_components/searchBar";
import React from "react";
import Title from "@app/_components/itemTitle";
import ItemTableWrap from "@app/_components/itemTable";
import CollectionTableTitle from "./_contents/TableTitle";
import { Iitem } from "./interface";
import CollectionItemWrap from "./_contents/ItemWrap";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "@app/_components/pagination";
const Page = () => {
  const tempDataArr: Iitem[] = Array.from({ length: 100 }, (ele, index) => {
    return {
      number: index.toString(),
      collection: "img",
      type: "ERC721",
      name: "ContractAddress",
      volume: "203",
      change: "24",
      minPrice: "0.2",
      maxPrice: "20",
      sales: "5",
      transfers: "54,398",
      owners: "6,000",
      totalAssets: "0",
    };
  });
  const { maxPage, page, pageHandler, pageTxList } =
    usePagination<Iitem>(tempDataArr);

  return (
    <div className="bg-mainBackGroundColor min-h-screen ">
      {/* <SearchBar />
      <NFTContainer /> */}
      <Title title="NFT List" />
      <ItemTableWrap>
        <CollectionItemWrap pageTxList={pageTxList} />
      </ItemTableWrap>
      <Pagination page={page} pageHandler={pageHandler} maxPage={maxPage} />
    </div>
  );
};

export default Page;
