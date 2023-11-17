/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { ItxList, ITxListWrapProps } from "./interface";
import TxItem from "./TxItem";
import Pagination from "../pagination/Pagiation";
import usePagiNation from "@app/_hooks/usePagination";

const TxList: React.FC<ITxListWrapProps> = ({ pageTxList, toggleHandler }) => {

  return (
      <div >
        {pageTxList &&
          (pageTxList as ItxList[]).map((ele) => (
            <TxItem
              TxItem={ele}
              toggleHandler={toggleHandler}
              key={ele.txHash}
            />
          ))}
    </div>
  );
};

export default TxList;
