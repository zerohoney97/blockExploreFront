/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ITokenTransfer } from "./interface";
import { createPortal } from "react-dom";
import AdditionalInfo from "./AdditionalInfo";
import TxList from "./TxListContainer";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "@app/_components/pagination";
import { IAddInfo } from "@app/_components/transactionTable/interface";
import useHydration from "@app/_hooks/useHydration";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TokenTransferListWrap = () => {
  const isRendered = useHydration();
  const tempDataArr: ITokenTransfer[] = Array.from(
    { length: 105 },
    (ele, index) => ({
      age: "asd",
      block: "123124124",
      from: "0x12312kj312kjb3jk",
      to: "0xqweqwnekjads2asdk2",
      method: "Transfer",
      txHash: "0x123fjafk231s",
      value: index.toString(),
      token: "pepe",
    })
  );
  const [addInfoModal, setAddInfoModal] = useState<Element | null>(null);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const { maxPage, page, pageHandler, pageTxList } =
    usePagination<ITokenTransfer>(tempDataArr, 50);

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
    <div
      className={`mt-10 w-11/12 m-auto rounded-lg shadow-md min-w-[250px] max-w-[1250px]  h-auto bg-white dark:bg-black`}
    >
      <div className={`overflow-x-auto  h-auto`}>
        <table className="w-full m-auto">
          <thead className="">
            <tr className="h-20 border-b border-gray flex text-sm dark:text-white">
              <th className="min-w-[60px] w-auto flex items-center justify-center lg:w-20  ">
                <FontAwesomeIcon icon={faCircleQuestion} />
              </th>
              <th className="min-w-[200px]  flex justify-start items-center ">
                Txn Hash
              </th>
              <th className="min-w-[120px] flex items-center ">
                Method
              </th>
              <th className="min-w-[100px] flex items-center  ">
                Block
              </th>
              <th className="min-w-[100px] flex items-center ">
                Age
              </th>
              <th className="min-w-[120px] flex items-center  lg:w-44  ">
                From
              </th>
              <th className="w-auto lg:w-20"></th>
              <th className="min-w-[200px] flex items-center   sm:ml-4 md:ml-4 lg:w-64 ">
                To
              </th>
              <th className="min-w-[100px] flex justify-start items-center  ">
                Value
              </th>
              <th className="min-w-[100px] flex justify-start items-center  ">
                Token
              </th>
            </tr>
          </thead>
          {isRendered && (
            <tbody>
              <TxList pageTxList={pageTxList} toggleHandler={toggleHandler} />
            </tbody>
          )}
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

export default TokenTransferListWrap;
