"use client";
import SearchBar from "@app/_components/searchBar";
import React, { useEffect } from "react";
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
      collection:
        "https://upload.wikimedia.org/wikipedia/ko/e/eb/%ED%8F%AC%EC%BC%93%EB%AA%AC%EC%8A%A4%ED%84%B0_%EB%A0%88%EB%93%9C%C2%B7%EA%B7%B8%EB%A6%B0%EC%9D%98_%ED%99%8D%EB%B3%B4_%EC%9E%91%ED%92%88%EC%97%90_%EB%AC%98%EC%82%AC_%EB%90%9C_%ED%94%BC%EC%B9%B4%EC%B8%84.png",
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
