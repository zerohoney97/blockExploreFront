/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IAddInfo, ItxList, TxListProps } from "./ineterface";
import { createPortal } from "react-dom";
import AdditionalInfo from "./additionalInfo";
import TxList from "./txListContainer";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "../pagination/Pagiation";

const TxListWrap: React.FC<TxListProps> = ({ txList }) => {
  const [addInfoModal, setAddInfoModal] = useState<Element | null>(null);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const { maxPage, page, pageHandler, pageTxList } =
    usePagination<ItxList>(txList);

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
    <div className="mt-10  h-auto  max-h-[600px]">
      <div className=" overflow-x-auto h-auto  max-h-[500px]">
        <div className="w-[300%] h-8 border-b border-gray flex ">
          <div className="w-[5%] flex justify-center items-center ">?</div>
          <div className=" w-[20%] flex justify-center items-center  ">
            Txn Hash
          </div>
          <div className=" w-[10%] flex justify-center items-center  ">
            Method
          </div>
          <div className=" w-[10%] flex justify-center items-center  ">
            Block
          </div>
          <div className=" w-[10%] flex justify-center items-center  ">Age</div>
          <div className=" w-[20%] flex justify-center items-center  ">
            From
          </div>
          <div className=" w-[20%] flex justify-center items-center  ">To</div>
          <div className=" w-[10%] flex justify-center items-center  ">
            Value
          </div>
        </div>
        <TxList pageTxList={pageTxList} toggleHandler={toggleHandler} />

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
