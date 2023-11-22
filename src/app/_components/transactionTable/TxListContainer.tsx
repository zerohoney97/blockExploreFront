/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { ItxList, ITxListWrapProps } from "./interface";
import TxItem from "./TxItem";
import Pagination from "../pagination";
import usePagiNation from "@app/_hooks/usePagination";

const TxList: React.FC<ITxListWrapProps> = ({ pageTxList, toggleHandler }) => {
  return (
    <>
      {pageTxList &&
        (pageTxList as ItxList[]).map((ele) => (
          <TxItem TxItem={ele} toggleHandler={toggleHandler} key={ele.txHash} />
        ))}
    </>
  );
};

export default TxList;
