"use client";

import React, { useEffect, useState } from "react";
import { IholdersList, HoldersListProps } from "./interface";
import HoldersItem from "./HoldersItem";
import Pagination from "@app/_components/pagination";
import usePagiNation from "@app/_hooks/usePagination";

const HoldersContainer: React.FC<HoldersListProps> = ({ holdersList }) => {
  const { maxPage, page, pageHandler, pageTxList } = usePagiNation(holdersList);
  return (
    <div>
      <div>
        {pageTxList &&
        pageTxList .map((ele) => (
            <HoldersItem HoldersItem={ele} key={ele.rank} />
          ))}
      </div>
     
    </div>
  );
};

export default HoldersContainer;