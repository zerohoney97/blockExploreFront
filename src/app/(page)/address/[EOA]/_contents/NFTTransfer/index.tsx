"use client";
import React from "react";
import NftTxsListWrap from "@app/(page)/nftTrans/_content/ListWarp";
import { ITxListProps } from "@app/_components/transactionTable/interface";
import { INftTransList } from "@app/(page)/nftTrans/interface";
import useHydration from "@app/_hooks/useHydration";
import NftTransTitle from "@app/_components/itemTitle";


const AddressNftTransfer: React.FC<ITxListProps> = () => {
  const tempDataArr: INftTransList[] = Array.from(
    { length: 105 },
    (ele, index) => ({
      hash: "0x123fjafk231s",
      method: "Transfer",
      age: "15",
      from: "0x12312kj312kjb3jk",
      to: "0xqweqwnekjads2asdk2",
      type: "ERC-721",
      itemImage: "https://etherscan.io/images/main/nft-placeholder.svg",
      itemName: "NFT: Big Time Collection",
    })
  );
  const isRendered = useHydration();
  return (
    <div className="dark:bg-black/90">
      {isRendered && (
        <NftTxsListWrap
          nftTxList={tempDataArr}
          maxHeight="1200px"
          pageStack={20}
        />
      )}
    </div>
  );
};

export default AddressNftTransfer;
