import React from "react";
import NftTxsListWrap from "./_content/ListWarp";
import { INftTransList } from "./interface";
import NftTransTitle from "@app/_components/itemTitle";
import { getTransaction } from "@app/_api/main/getTransaction";
import NFTTransTable from "./_content/Table";
const Page = async () => {
  const NFTTransData: INftTransList[] = (await getTransaction(
    "NFT"
  )) as INftTransList[];
  return (
    <div className="dark:bg-black/90">
      <NftTransTitle title="NFT Transfers" />
      <NFTTransTable NFTTransData={NFTTransData} />
    </div>
  );
};

export default Page;
