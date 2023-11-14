import React from "react";
import { IPageNationProps } from "../transactionTable/ineterface";

const Pagination: React.FC<IPageNationProps> = ({
  page,
  pageHandler,
  maxPage,
}) => {
  return (
    <div className="w-full h-20  flex justify-center items-center text-sm">
      <div
        className="m-2 border-gray border-2 py-1 px-2 bg-searchBarBackGroundColor rounded-lg  "
        onClick={() => {
          pageHandler(1);
        }}
      >
        First
      </div>
      <div
        className={`m-2 border-gray border-2 py-1 px-2 bg-searchBarBackGroundColor rounded-lg ${
          page === 1 && "text-gray"
        } `}
        onClick={() => {
          pageHandler(page - 1);
        }}
      >
        {"<"}
      </div>
      <div className="m-2 border-gray border-2 py-1 px-2 bg-searchBarBackGroundColor rounded-lg min-w-[92px]">
        Page {page} of {maxPage}
      </div>
      <div
        className={`m-2 border-gray border-2 py-1 px-2 bg-searchBarBackGroundColor rounded-lg ${
          page === maxPage && "text-gray"
        } `}
        onClick={() => {
          pageHandler(page + 1);
        }}
      >
        {">"}
      </div>
      <div
        className="m-2 border-gray border-2 py-1 px-2 bg-searchBarBackGroundColor rounded-lg"
        onClick={() => {
          pageHandler(maxPage);
        }}
      >
        Last
      </div>
    </div>
  );
};

export default Pagination;
