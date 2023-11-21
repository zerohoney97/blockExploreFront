/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { INftAddInfo, INftTransList, INftTxListProps } from "../interface";
import { createPortal } from "react-dom";
import AdditionalInfo from "./AdditionalInfo";
import NftTxsList from "./Container";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "@app/_components/pagination";

const NftTxListWrap: React.FC<INftTxListProps> = ({
  nftTxList,
  maxHeight = "900px",
  pageStack = 25,
}) => {
  const [addInfoModal, setAddInfoModal] = useState<Element | null>(null);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const { maxPage, page, pageHandler, pageTxList } = usePagination<INftTransList>(
    nftTxList,
    pageStack
  );

  useEffect(() => {
    setAddInfoModal(document.getElementById("portal"));
  }, [isToggled]);

  // 실제에서는 react-query로 가져올 예정
  const [addInfoTempData, setAddInfoTempData] = useState<INftAddInfo>({
    status: "Success",
    transactionAction:"Mint 3 of", 
    transactionFee: "0.0000000000231",
    gasInfo: "293840",
    nonce: "0",
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
          <thead>
            <tr className="h-8 border-b border-gray flex ">
              <th className="min-w-[80px] w-auto flex items-center justify-center font-medium p-2">
                ?
              </th>
              <th className="min-w-[200px]  flex justify-start items-center font-medium">
                Transaction Info
              </th>
              <th className="min-w-[120px] flex items-center font-medium">
                Method
              </th>
              <th className="min-w-[100px] flex items-center font-medium">
                Age
              </th>
              <th className="min-w-[200px]  flex items-center font-medium">
                From
              </th>
              <th className="min-w-[200px]  flex items-center font-medium">
                To
              </th>
              <th className="min-w-[150px] flex items-center font-medium">
                Type
              </th>
              <th className="min-w-[300px]  flex items-center font-medium">
                Item
              </th>
              {/* <th className="min-w-[100px] flex justify-start items-center  font-medium">
                {lastThName}
              </th> */}
            </tr>
          </thead>
          <tbody>
            <NftTxsList pageTxList={pageTxList} toggleHandler={toggleHandler} />
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

export default NftTxListWrap;
