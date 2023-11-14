import React from "react";
import { INftTxDetailInventoryProps } from "../interface";
import ItemTableWrap from "@app/_components/itemTable";

const NFTInventoryItem: React.FC<INftTxDetailInventoryProps> = ({
  nftInvenData,
}) => {
  return (
    <div className="w-2/5 h-auto border-2 border-gray  py-1 px-2 flex flex-col justify-center items-center m-2  rounded-md">
      <img
        width={"120px"}
        height={"120px"}
        src="https://upload.wikimedia.org/wikipedia/ko/e/eb/%ED%8F%AC%EC%BC%93%EB%AA%AC%EC%8A%A4%ED%84%B0_%EB%A0%88%EB%93%9C%C2%B7%EA%B7%B8%EB%A6%B0%EC%9D%98_%ED%99%8D%EB%B3%B4_%EC%9E%91%ED%92%88%EC%97%90_%EB%AC%98%EC%82%AC_%EB%90%9C_%ED%94%BC%EC%B9%B4%EC%B8%84.png"
        alt="피카츄"
        className="m-6"
      />
      <div className="w-full h-auto flex flex-col items-start-start m-5">
        <div className="w-auto text-xs">
          <span className="text-itemDetail-inventoryKeyColor">Token Id: </span>
          <span className="text-blue-500 ">{nftInvenData.tokenId}</span>{" "}
        </div>
        <div className="w-auto text-xs">
          <span className="text-itemDetail-inventoryKeyColor">Owner:</span>
          <span className="text-blue-500 ">{nftInvenData.owner}</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default NFTInventoryItem;
