/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IAddInfo, ItxList, TxListProps } from "./interface";
import { createPortal } from "react-dom";
import AdditionalInfo from "./AdditionalInfo";
import TxList from "./TxListContainer";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "../pagination/Pagiation";

const TxListWrap: React.FC<TxListProps> = ({
  txList,
  lastThName,
  maxHeight = "600px",
  pageStack = 25,
}) => {
  const [addInfoModal, setAddInfoModal] = useState<Element | null>(null);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const { maxPage, page, pageHandler, pageTxList } = usePagination<ItxList>(
    txList,
    pageStack
  );

  useEffect(() => {
    setAddInfoModal(document.getElementById("portal"));
  }, [isToggled]);

  // 실제에서는 react-query로 가져올 예정
  const [addInfoTempData, setAddInfoTempData] = useState<IAddInfo>({
    status: "Success",
    transactionFee: "0.0000000000231",
    gasInfo: "293840",
    gasLimit: "318840",
    nonce: "0",
    blockNum: "18497",
    position: "18",
  });

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`mt-10 w-11/12 m-auto rounded-lg shadow-md max-w-[1250px]  h-auto bg-white  max-h-[${maxHeight}]`}>
      <div className="overflow-x-auto  h-auto  max-h-[500px]">
        <table className="w-full m-auto">
          <thead>
            <tr className="h-8 border-b border-gray flex ">
              <th className="min-w-[60px] lg:w-20 w-auto flex items-center justify-center font-medium">
                ?
              </th>
              <th className="min-w-[200px]  lg:w-64 flex justify-start items-center font-medium">
                Txn Info
              </th>
              <th className="min-w-[120px] flex items-center font-medium">
                Method
              </th>
              <th className="min-w-[100px] flex items-center  font-medium">
                Block
              </th>
              <th className="min-w-[100px] flex items-center font-medium">
                Age
              </th>
              <th className="min-w-[200px]  lg:w-64 flex items-center font-medium">
                From
              </th>
              <th className="min-w-[200px]  lg:w-64 flex items-center font-medium">
                To
              </th>
              <th className="min-w-[100px] flex justify-start items-center  font-medium">
                {lastThName}
              </th>
            </tr>
          </thead>
          <tbody>
            <TxList pageTxList={pageTxList} toggleHandler={toggleHandler} />
          </tbody>
        </table>

        {isToggled && addInfoModal
          ? createPortal(
              <AdditionalInfo
                addInfoTempData={addInfoTempData}
                toggleHandler={toggleHandler}
              />,
              addInfoModal
            )
          : ""}
      </div>
      <Pagination page={page} pageHandler={pageHandler} maxPage={maxPage} />
    </div>
  );
};

export default TxListWrap;
