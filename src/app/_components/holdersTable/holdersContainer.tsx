"use client";

import React, { useEffect, useState } from "react";
import { IholdersList, HoldersListProps } from "./interface";
import HoldersItem from "./holdersItem";
import Pagination from "@app/_components/pagination/Pagiation";
import usePagiNation from "@app/_hooks/usePagination";

const HoldersContainer: React.FC<HoldersListProps> = ({ holdersList }) => {
  const { maxPage, page, pageHandler, pageTxList } = usePagiNation(holdersList);
  return (
    <div>
      {pageTxList &&
        pageTxList.map((ele) => (
          <HoldersItem HoldersItem={ele} key={ele.rank} />
        ))}
    </div>
  );
};

export default HoldersContainer;
