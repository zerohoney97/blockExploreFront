import React, { useEffect, useState } from "react";
import { HoldersListProps, IholdersList } from "./interface";
import HoldersList from "./holdersContainer";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "../pagination/Pagiation";

const HolderListWrap: React.FC<HoldersListProps> = ({ holdersList }) => {
  const { maxPage, page, pageHandler, pageTxList } =
    usePagination<IholdersList>(holdersList);

  return (
    <div className="h-auto max-h-[600px] py-1 px-2 bg-white rounded-lg shadow-md w-11/12 overflow-hidden">
      <div className="overflow-x-scroll">
        <table className="w-full">
          <thead>
            <tr className="h-8 border-b border-gray flex">
              <th className="min-w-[60px] flex items-center justify-center">Rank</th>
              <th className="min-w-[200px] flex items-center">Address</th>
              <th className="min-w-[200px] flex items-center">Quantity</th>
              <th className="min-w-[150px] flex items-center">Percentage</th>
              <th className="min-w-[200px] flex items-center">Value</th>
            </tr>
          </thead>
          <tbody className="align-middle whitespace-no-wrap">
            <HoldersList holdersList={holdersList} />
          </tbody>
        </table>
      </div>
      <Pagination page={page} pageHandler={pageHandler} maxPage={maxPage} />
    </div>
  );
};

export default HolderListWrap;
