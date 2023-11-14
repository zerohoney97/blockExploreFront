import React, { useEffect, useState } from "react";
import { HoldersListProps, IholdersList } from "./interface";
import HoldersList from "./holdersContainer";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "../pagination/Pagiation";

// const HolderListWrap: React.FC<HoldersListProps> = ({ holderList }) => {
const HolderListWrap: React.FC<HoldersListProps> = ({ holdersList }) => {
  const { maxPage, page, pageHandler, pageTxList } =
    usePagination<IholdersList>(holdersList);

  return (
    <div className=" h-auto  max-h-[600px]  py-1 px-2 bg-white rounded-lg  shadow-md w-11/12">
      <div className=" overflow-x-auto mr-2 ">
        <div className="w-[300%] h-8 border-b border-gray flex ">
          <div className="w-[5%] flex items-center ">Rank</div>
          <div className=" w-[20%] flex items-center  ">
            Address
          </div>
          <div className=" w-[10%] flex items-center  ">
            Quantity
          </div>
          <div className=" w-[10%] flex items-center  ">
            Percentage
          </div>
          <div className=" w-[10%] flex items-center  ">
            Value
          </div>
        </div>
        <HoldersList holdersList={holdersList} />
      </div>
        <Pagination page={page} pageHandler={pageHandler} maxPage={maxPage} />
    </div>
  );
};
export default HolderListWrap;
