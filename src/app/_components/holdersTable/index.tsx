import React from "react";
import { HoldersListProps, IholdersList } from "./interface";
import HoldersList from "./HoldersContainer";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "../pagination/Pagiation";

const HolderListWrap: React.FC<HoldersListProps> = ({ holdersList }) => {
  const { maxPage, page, pageHandler, pageTxList } =
    usePagination<IholdersList>(holdersList);

  return (
    <div className="mt-10  m-auto rounded-lg shadow-md h-auto bg-white max-h-[600px] max-w-[1250px]">
      <div className="overflow-x-auto h-auto ">
        <table className="w-11/12">
          <thead>
            <tr className="h-8 border-b border-gray flex">
              <th className="flex w-[100px] items-center justify-center font-medium">Rank</th>
              <th className="flex min-w-[350px] items-center font-medium">Address</th>
              <th className="flex min-w-[300px] items-center font-medium">Quantity</th>
              <th className="flex min-w-[200px] items-center font-medium">Percentage</th>
              <th className="flex min-w-[150px] first-line:items-center font-medium">Value</th>
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
