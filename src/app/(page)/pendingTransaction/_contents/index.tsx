/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IPendingTransaction } from "./interface";
import { createPortal } from "react-dom";
import TxList from "./TxListContainer";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "@app/_components/pagination";
import useHydration from "@app/_hooks/useHydration";

const PendingTxListWrap = () => {
  const isRendered = useHydration();
  const tempDataArr: IPendingTransaction[] = Array.from(
    { length: 105 },
    (ele, index) => ({
      txHash:
        "0x966fb52cc296a93a538ee12d32994cefbc31452d8391bf8e60b8bfda2a3b5d9c",
      method: "Transfer",
      nonce: "47",
      lastSeen: "less than 1 sec ago",
      gasLimit: "21000",
      gasPrice: "0",
      from: "0x3910c18C2D886CC6c18918C197aF4A28563b3Ccd",
      to: "0xECEaFC653dac2f554129d6ec32ce05971A604616",
      amount: "0",
    })
  );
  const [addInfoModal, setAddInfoModal] = useState<Element | null>(null);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const { maxPage, page, pageHandler, pageTxList } =
    usePagination<IPendingTransaction>(tempDataArr, 50);

  useEffect(() => {
    setAddInfoModal(document.getElementById("portal"));
  }, [isToggled]);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      {isRendered && (
        <div
          className={`mt-10 w-11/12 m-auto rounded-lg shadow-md min-w-[250px] max-w-[1250px]  h-auto bg-white max-h-[600px]`}
        >
          <div className={`overflow-x-auto  h-auto  max-h-[600px]`}>
            <table className="w-full m-auto">
              <thead className="">
                <tr className="h-20 border-b border-gray flex ">
                  <th className="font-bold  flex justify-start items-center min-w-[240px] p-2">
                    Txn Info
                  </th>
                  <th className="font-bold flex items-center min-w-[150px]">Method</th>
                  <th className="font-bold flex items-center min-w-[100px]  ">Nonce</th>
                  <th className="font-bold flex items-center min-w-[150px] ">Last Seen</th>
                  <th className="font-bold flex items-center min-w-[100px]">Gas Limit</th>
                  <th className="font-bold flex items-center min-w-[100px]">Gas Price</th>
                  <th className="font-bold flex items-center  lg:w-44  min-w-[130px] ">
                    From
                  </th>
                  <th className="w-auto min-w-[20px] lg:w-20"></th>
                  <th className="font-bold flex items-center  min-w-[150px] sm:ml-4 md:ml-4 lg:w-64 ">
                    To
                  </th>
                  <th className=" flex justify-start items-center min-w-[100px] ">Amount</th>
                </tr>
              </thead>
              <tbody>
                <TxList pendingTransactionData={pageTxList} />
              </tbody>
            </table>
          </div>
          <Pagination page={page} pageHandler={pageHandler} maxPage={maxPage} />
        </div>
      )}
    </>
  );
};

export default PendingTxListWrap;
