'use client'
import React from "react";
import NftTxsListWrap from ".././_content/ListWarp";
import useHydration from "@app/_hooks/useHydration";
import { INFTTranseTableProps } from "../interface";

const NFTTransTable:React.FC<INFTTranseTableProps> = ({NFTTransData}) => {
  const isRendered = useHydration();
  return (
    <React.Fragment>
      {isRendered && (
        <NftTxsListWrap
          nftTxList={NFTTransData}
          maxHeight="1200px"
          pageStack={20}
        />
      )}
    </React.Fragment>
  );
};

export default NFTTransTable;
