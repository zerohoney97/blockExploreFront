/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { INftTxListWrapProps,INftTransList } from "../interface";
import NftTxsItem from "./Item";

const NftTxsList: React.FC<INftTxListWrapProps> = ({ pageTxList, toggleHandler }) => {

  return (
      <div >
        {pageTxList &&
          (pageTxList as INftTransList[]).map((ele) => (
            <NftTxsItem
              NftTxItem={ele}
              toggleHandler={toggleHandler}
              key={ele.transcationInfo}
            />
          ))}
    </div>
  );
};

export default NftTxsList;
