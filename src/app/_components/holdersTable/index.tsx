import React, { useEffect, useState } from "react";
import { HoldersListProps, IholdersList } from "./interface";
import HoldersList from "./HoldersContainer";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "../pagination/Pagiation";

const HolderListWrap: React.FC<HoldersListProps> = ({ holdersList }) => {
  const { maxPage, page, pageHandler, pageTxList } =
    usePagination<IholdersList>(holdersList);

  return (
    <div className="mt-5 w-11/12 m-auto rounded-lg shadow-md  h-auto bg-white  max-h-[600px]">
      <div className="overflow-x-scroll">
        <table className="w-full">
          <thead>
            <tr className="h-8 border-b border-gray text-sm flex">
              <th className="min-w-[60px] flex items-center justify-center font-medium">Rank</th>
              <th className="min-w-[200px] flex items-center font-medium">Address</th>
              <th className="min-w-[200px] flex items-center font-medium">Quantity</th>
              <th className="min-w-[150px] flex items-center font-medium">Percentage</th>
              <th className="min-w-[200px] flex items-center font-medium">Value</th>
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
