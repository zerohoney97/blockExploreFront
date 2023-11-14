/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { ItxList, TxListWrapProps } from "./interface";
import TxItem from "./txItem";
import Pagination from "../pagination/Pagiation";
import usePagiNation from "@app/_hooks/usePagination";

const TxList: React.FC<TxListWrapProps> = ({ pageTxList, toggleHandler }) => {

  return (
    <div>
      <div>
        {pageTxList &&
          (pageTxList as ItxList[]).map((ele) => (
            <TxItem
              TxItem={ele}
              toggleHandler={toggleHandler}
              key={ele.txHash}
            />
          ))}
      </div>
    </div>
  );
};

export default TxList;
