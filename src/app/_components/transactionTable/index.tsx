/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IAddInfo, ItxList, ITxListProps } from "./interface";
import { createPortal } from "react-dom";
import AdditionalInfo from "./AdditionalInfo";
import TxList from "./TxListContainer";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "../pagination/Pagiation";

const TxListWrap: React.FC<ITxListProps> = ({
  txList,
  lastThName,
  maxHeight = "900px",
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
  useEffect(() => {
    console.log(maxHeight);
  }, [maxHeight]);
  return (
    <div
      className={`mt-10 w-11/12 m-auto rounded-lg shadow-md min-w-[250px] max-w-[1250px]  h-auto bg-white max-h-[${maxHeight}]`}
    >
      <div className={`overflow-x-auto  h-auto  max-h-[${maxHeight}]`}>
        <table className="w-full m-auto">
          <thead className="">
            <tr className="h-20 border-b border-gray flex ">
              <th className="font-bold min-w-[60px] w-auto flex items-center justify-center lg:w-20  ">
                ?
              </th>
              <th className="font-bold min-w-[200px]  flex justify-start items-center ">
                Txn Info
              </th>
              <th className="font-bold min-w-[120px] flex items-center ">
                Method
              </th>
              <th className="font-bold min-w-[100px] flex items-center  ">
                Block
              </th>
              <th className="font-bold min-w-[100px] flex items-center ">
                Age
              </th>
              <th className="font-bold min-w-[120px] flex items-center  lg:w-44  ">
                From
              </th>
              <th className="w-auto lg:w-20"></th>
              <th className="font-bold min-w-[200px] flex items-center   sm:ml-4 md:ml-4 lg:w-64 ">
                To
              </th>
              <th className="min-w-[100px] flex justify-start items-center  ">
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
